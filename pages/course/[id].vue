<script setup lang="ts">
const route = useRoute()
const id = route.params.id



const course = []

const reviews = [
  {
    description: "\"A challenging yet rewarding coursel The professor explained\n" +
        "complex concepts like graph theory and dynamic\n" +
        "programming with clarity. Expect to spend a lot of time on\n" +
        "assignments, but they re worth it for the hands-on\n" +
        "experience” ",
    difficulty: 4,
    workload: 4,
    clarity: 3,
    likes: 3,
    liked: false,
    comments: [
      {},
      {}
    ]
  },
  {
    description: "\"A challenging yet rewarding coursel The professor explained\n" +
        "complex concepts like graph theory and dynamic\n" +
        "programming with clarity. Expect to spend a lot of time on\n" +
        "assignments, but they re worth it for the hands-on\n" +
        "experience” ",
    difficulty: 4,
    workload: 4,
    clarity: 3,
    likes: 3,
    liked: false,
    comments: [
      {},
      {}
    ]
  },
  {
    description: "\"A challenging yet rewarding coursel The professor explained\n" +
        "complex concepts like graph theory and dynamic\n" +
        "programming with clarity. Expect to spend a lot of time on\n" +
        "assignments, but they re worth it for the hands-on\n" +
        "experience” ",
    difficulty: 4,
    workload: 4,
    clarity: 3,
    likes: 3,
    liked: false,
    comments: [
      {},
      {}
    ]
  }
]
</script>

<template>
  <div class="container first-elem">
    <span class="subtitle content">CS302</span>
  </div>
  <div class="course-info">
    <div>
      <h2 class="bold-700">Advanced Algorithms and Data Structures</h2>
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
            <h2>5.00</h2>
            <Stars :rating="4" size="small" />
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
              <div class="column thirds"><p class="tleft subtext gray">70%</p></div>
              <div class="column thirds"><p class="tcenter">Difficulty</p></div>
              <div class="column thirds"><p class="tright subtext gray">Good</p></div>
            </div>
          </div>

          <div class="container column center">
            <div class="columns center">
              <div class="column thirds"><p class="tleft subtext gray">70%</p></div>
              <div class="column thirds"><p class="tcenter">Workload</p></div>
              <div class="column thirds"><p class="tright subtext gray">Good</p></div>
            </div>
          </div>

          <div class="container column center">
            <div class="columns center">
              <div class="column thirds"><p class="tleft subtext gray">70%</p></div>
              <div class="column thirds"><p class="tcenter">Clarity</p></div>
              <div class="column thirds"><p class="tright subtext gray">Good</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <Badge value="Online" severity="secondary" />
      <Badge value="Advanced" severity="secondary" />
      <Badge severity="secondary">Estimated weekly hours:&nbsp&nbsp<b class="bold-800">8-10 hours</b> </Badge>
    </div>
  </div>

  <Reviews :reviews="reviews" />

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