<script setup lang="ts">

</script>

<template>
  <div class="bg-effect long-bg" />
  <div class="title first-elem center">
    <h1 class="bold-800">Unbiased Reviews of<br>University Courses,<br><span class="bold-800 secondary">All in One Place.</span></h1>
    <p class="box">
      Easily explore and compare university courses. Read honest student
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
    <p class="box desc">See what students are saying! Check out the latest reviews to get real,
      up-to-date insights on courses from universities around the world. </p>
    <Button label="Browse Courses & Professors" @click="navigateTo('/search')"/>
  </div>
  <div class="info container center full">
      <div class="columns site-stats">
        <div class="column half">
          <h2 class="accent tleft bold-600">
            Ready to start reviewing<br>
            your own courses?
          </h2>
          <p class="white box">
            Your experience matters! Share your thoughts on the courses you've taken
            and help other students make smarter choices. Join our community today
            and start leaving reviews that make a difference.
          </p>
          <Button label="Sign up to write your first review " class="tleft box"/>
        </div>
        <div class="column half center">
          <h2 class="white">STARS :)</h2>
        </div>
    </div>
  </div>
  <div class="info center">
    <h2>FAQ</h2>
    <p class="box desc">Got questions? We've got answers! Explore our frequently asked questions to learn how our
      platform works, how to get started, and why it's the best place for university course reviews. </p>
    <Accordion>
      <AccordionPanel value="0">
        <AccordionHeader>Header I</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader>Header II</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="2">
        <AccordionHeader>Header III</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
            qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
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
  padding: 6rem;
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