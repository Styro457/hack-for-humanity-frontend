<template>
  <NuxtLink :to="'/course/' + course.id">
    <div class="container course-card">
      <div class="columns">
        <div class="column first">
          <h2 class="rating-value">5.00</h2>
          <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <span class="subnote">(775 reviews)</span>
        </div>
        <div class="column second">
          <h3>{{course.course_code}}</h3>
          <h2>{{course.course_name}}</h2>
          <div class="nested-columns">
            <p class="nested-column"><i class="pi pi-map-marker"></i> Northbridge University, UK</p>
            <p class="nested-column"><i class="pi pi-user"></i> Dr. Eleanor Hartman</p>
            <p class="nested-column"><!--<i class="pi pi-clock"></i> 12 Weeks--></p>
          </div>
        </div>
        <div class="column third">
<!--          <span>Department</span>
          <p>Computer Science, Software Engineering, Information Technology</p>-->
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

.course-card {}

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

.subnote {
  color: #57B8FF;
}
</style>

<script setup lang="ts">
import {computed} from "vue";

const emit = defineEmits(['update:course']);

const props = defineProps({
  course: { type: Object, default: {} }
});

const course = computed({
  get: () => props.course,
  set: (value) => emit('update:course', value),
});
</script>