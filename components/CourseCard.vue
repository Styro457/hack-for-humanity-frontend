<script setup lang="ts">
import {computed, ref, watchEffect} from "vue";
import {getReviews, getUniversityName, getProfessorData} from "~/utils/utils";

const emit = defineEmits(['update:course']);

const props = defineProps({
  course: { type: Object, default: {} }
});

const course = computed({
  get: () => props.course,
  set: (value) => emit('update:course', value),
});

const reviews = ref([]);
const proffesor = ref({"name":"Unknown"});
const universityName = ref("Unkown");
const departaments = ref(getDepartments())
const loading = ref(true);

watchEffect(async () => {
  if (!course.value || !course.value.id) return;
  loading.value = true;
  reviews.value = await getReviews(course.value.id);
  universityName.value = await getUniversityName(course.value.university);
  proffesor.value = await getProfessorData(course.value.professors[0]); //TODO: Make it work with multiple
  loading.value = false;
});

function getDepartments() {
  let departments_list = "";
  for(let department in course.value.departments || []) {
    departments_list = departments_list + ", " + department;
  }
  if(departments_list===" ")
    return null;
  else
    return departments_list.slice(2);
}
</script>

<template>
  <NuxtLink :to="'/course/' + course.id">
    <div class="container course-card">
      <div class="columns">
        <div class="column first">
          <h2 class="rating-value bold-500">{{course.avg_course_rating || '0.0'}}</h2>
          <Stars :rating="parseInt(course.avg_course_rating || '0')" size="normal" :dark="true"/>
          <p class="subtext gray">({{reviews.length}} review{{reviews.length == 1 ? '' : 's'}})</p>
        </div>
        <div class="column second">
          <h4 class="code">{{course.course_code}}</h4>
          <h2 class="name">{{course.course_name}}</h2>
          <div class="nested-columns">
            <p class="nested-column subtext gray"><i class="pi pi-map-marker"></i> {{universityName}}</p>
            <p class="nested-column subtext gray"><i class="pi pi-user"></i> {{proffesor.name}}</p>
            <p class="nested-column"><!--<i class="pi pi-clock"></i> 12 Weeks--></p>
          </div>
        </div>
        <div class="column third" v-if="departaments">
          <span>Departments</span>
          <p>{{departaments}}</p>
        </div>
      </div>
      <div class="row">
<!--        <Badge value="Online" severity="secondary" />
        <Badge value="Advanced" severity="secondary" />
        <Badge severity="secondary">Estimated weekly hours:&nbsp&nbsp<b class="bold-800">8-10 hours</b> </Badge>-->
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>

.first {
   width: 20%;
   text-align: center;
 }

.course-card {
  padding: 48px 16px;
}

.second {
  width: 60%;
}
.third {
  width: 20%;
}
.nested-columns {
  display: flex;
  justify-content: space-between;
}
.nested-column {
  width: 32%;
}

.code {
  margin: 0 0;
  line-height: 1;
}

.name {
  margin-top: 0;
  margin-bottom: 8px;
}
</style>