<script setup lang="ts">

</script>

<template>
  <div class="bg-effect long-bg" />
  <div class="title first-elem center">
    <h1 class="bold-800">Unbiased Reviews of<br>University Courses,<br><span class="bold-800 secondary">All in One Place.</span></h1>
    <p class="box">
      Easily explore and compare university courses. Read honest student<br>
      reviews and make informed decisions to find the right course for you.
    </p>
  </div>
  <CourseSearchBar />

  <div class="info">
    <div class="columns center panels">
      <div class="column container thirds center panel">
        <h4><PhosphorIconBookOpenText :size="48"/></h4>
        <p>Browse Courses from<br>Universities worldwide</p>
      </div>
      <div class="column container thirds center panel">
        <h4><PhosphorIconStar :size="48"/></h4>
        <p>Honest, Anonymous<br>Reviews</p>
      </div>
      <div class="column container thirds center panel">
        <h4><PhosphorIconChatText :size="48"/></h4>
        <p>Help other by<br>sharing your opinion</p>
      </div>
    </div>
  </div>
  <div class="info container center full">
    <div>
      <h2 class="white">Choosing The Right Course<br>Shouldn't Be A Gamble.<br><b class="bold-700 accent">So We Solved It.</b></h2>
      <div class="columns site-stats">
        <div class="column thirds center">
          <h2 class="white">50+</h2>
          <h4 class="white">Universities</h4>
        </div>
        <div class="column thirds center">
          <h2 class="white">6400+</h2>
          <h4 class="white">Courses</h4>
        </div>
        <div class="column thirds center">
          <h2 class="white">400+</h2>
          <h4 class="white">Professors</h4>
        </div>
      </div>
    </div>
  </div>
  <div class="info center">
    <h2>Recent Course Reviews</h2>
    <p class="box desc">See what students are saying! Check out the latest reviews to get real,<br>
      up-to-date insights on courses from universities around the world. </p>
  </div>


</template>

<style scoped>
.info {
  width: 70vw;
  max-width: 1100px;
  margin-top: 200px;
}

.full {
  width: 95vw;
  max-width: none;
  background: var(--primary);
  color: var(--background);
  padding: 6rem
;
}

.white {
  color: var(--background);
}

.panels {
  gap: 24px;
}

.panel {
  padding: 24px;
}

.long-bg {
  height: 200vw;
}

.site-stats {
  margin-top: 4rem;
  gap: 6vw;
}

</style>