<script setup lang="ts">
import {defineEmits, ref, watchEffect} from "vue";
import CourseCard from "~/components/CourseCard.vue";

const route = useRoute()
const id = route.params.id
const router = useRouter();

const course = ref(loadCourse(id.toString()));
const avg_rating = ref(1);
//const uni = ref(loadUni(course.university));

async function loadCourse(id:String) {
  try {
    const response: Response = await $fetch(getAPI() + '/courses/get_course/' + id, {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.status === "success") {
      course.value = response.data;
      avg_rating.value = course.value.avg_course_rating;
    } else {
      await router.push('/');
    }
  } catch(err) {
    console.log(err)
    await router.push('/');
  }
};


/*async function loadUni(id:String){
  try {
    const response: Response = await $fetch(getAPI() + '/courses/get_course/' + id, {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: { }
    });
    if (response.success) {
      course.value = response.data;
    } else {
      await router.push('/');
    }
  } catch(err) {
    console.log(err)
    await router.push('/');
  }
};*/
const statDesc = ["Awful", "Bad", "Ok", "Good", "Great"]

function getStatPercentage(rating:number) {
  return Math.round((rating / 5) * 100);
}

function getStatDescription(rating:number) {
  return statDesc[Math.floor(rating-0.45)];
}

const getReview = async (course_id) => {
  try {
    const response: Response = await $fetch(getAPI() + 'reviews/get_reviews_for_course/' + course_id, {
      method: 'GET',
      credentials: 'include'
    });
    if (response.status === "success") {
      reviews.value = response.data;
    } else {
      console.log(response.message);
    }
  } catch(err) {
    console.log(err)
  }
}

const reviews = ref([]);
const loading = ref(true);

async function getReviews(course_id: string) {
  try {
    const response: Response = await $fetch(getAPI() + '/reviews/get_reviews_for_course/' + course_id, {
      method: "GET",
      credentials: "include",
    });
    console.log(response);
    return response;
  } catch (err) {
    console.error("Search failed:", err);
    await router.push("/");
    return [];
  }
}

watchEffect(async () => {
  if (!course.value || !course.value.id) return;
  loading.value = true; // Show loading before fetching data
  reviews.value = await getReviews(course.value.id);
  loading.value = false; // Hide loading after data loads
});
</script>

<template>
  <Button @click="$router.back()" class="first-elem">Back</Button>
  <div class="container">
    <span class="subtitle content"> {{course.course_code}} </span>
  </div>
  <div class="course-info">
    <div>
      <h2 class="bold-700">{{course.course_name}}</h2>
      <div class="columns">
        <div class="column first">
          <div class="columns">
            <p class="texticon"><i class="pi pi-search"></i></p>
            <p class="text"> Northbridge University, UK</p>
          </div>
        </div>
        <div class="column second">
          <div class="columns">
            <p class="texticon"><i class="pi pi-book"></i></p>
            <p class="text"> Computer Science, Software Engineering,
              Information Technology </p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column info left">
          <div class="container column center">
            <p class="">Overall Rating</p>
            <h2>{{course.avg_course_rating}}</h2>
            <Stars :rating="avg_rating" size="small" />
            <p class="subtext gray">( 4 reviews )</p>
          </div>
          <div class="container column center">
            <p class="subtext gray">Professor</p>
            <h4 class="bold-600">Dr. Eleanor Hartman</h4>
          </div>
        </div>
        <div class="column info right">
          <div class="container column center">
            <div class="columns center">
              <div class="column thirds"><p class="tleft subtext gray">{{getStatPercentage(course.avg_cognitive_load_rating)}}%</p></div>
              <div class="column thirds"><p class="tcenter">Cognitive Load</p></div>
              <div class="column thirds"><p class="tright subtext gray">{{getStatDescription(course.avg_cognitive_load_rating)}}</p></div>
            </div>
          </div>

          <div class="container column center">
            <div class="columns center">
              <div class="column thirds"><p class="tleft subtext gray">{{getStatPercentage(course.avg_delivery_support_rating)}}%</p></div>
              <div class="column thirds"><p class="tcenter">Support</p></div>
              <div class="column thirds"><p class="tright subtext gray">{{getStatDescription(course.avg_delivery_support_rating)}}</p></div>
            </div>
          </div>

          <div class="container column center">
            <div class="columns center">
              <div class="column thirds"><p class="tleft subtext gray">{{getStatPercentage(course.avg_engagement_enjoyment_rating)}}%</p></div>
              <div class="column thirds"><p class="tcenter">Enjoyment</p></div>
              <div class="column thirds"><p class="tright subtext gray">{{getStatDescription(course.avg_engagement_enjoyment_rating)}}</p></div>
            </div>
          </div>

          <div class="container column center">
            <div class="columns center">
              <div class="column thirds"><p class="tleft subtext gray">{{getStatPercentage(course.avg_usefulness_relevance_rating)}}%</p></div>
              <div class="column thirds"><p class="tcenter">Usefulness</p></div>
              <div class="column thirds"><p class="tright subtext gray">{{getStatDescription(course.avg_usefulness_relevance_rating)}}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row"><!--
      <Badge value="Online" severity="secondary" />
      <Badge value="Advanced" severity="secondary" />
      <Badge severity="secondary">Estimated weekly hours:&nbsp&nbsp<b class="bold-800">8-10 hours</b> </Badge>-->
    </div>
  </div>

  <div v-if="loading">
    <p>Loading reviews...</p>
  </div>

  <div v-else-if="reviews.length > 0" class="courses">
    <Reviews :reviews="reviews" />
  </div>

  <p v-else>There are no reviews yet for this course. Be the first one to add one!.</p>

</template>

<style scoped>
.course-info {
  width: 50vw;
  max-width: 700px;
}

.first {
  width: 60%;
}

.info.left {
  width: 30%;
}

.info.right {
  width: 70%;
}

.reviews {

}
</style>