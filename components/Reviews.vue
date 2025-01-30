<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps({
  reviews: {
    type: Array,
    default: []
  }
});
</script>

<template>
  <div class="grid">
    <div
        class="container grid-item review center"
        v-for="review in reviews"
    >
      <Stars :rating="3" size="big"/>
      <p class="box">"{{ review.description }}"</p>
      <div class="columns stats">
        <div class="container column thirds">
          <h4 class="tcenter tcenter">{{ review.difficulty }}/5</h4>
          <p class="gray subtext tcenter">Difficulty</p>
        </div>
        <div class="container column thirds">
          <h4 class="tcenter">{{ review.workload }}/5</h4>
          <p class="gray subtext tcenter">Workload</p>
        </div>
        <div class="container column thirds">
          <h4 class="tcenter">{{ review.clarity }}/5</h4>
          <p class="gray subtext tcenter">Clarity</p>
        </div>
      </div>
      <p class="subtext gray"><i class="pi texticon like" :class="review.liked ? 'pi-thumbs-up-fill' : 'pi-thumbs-up'"></i>3 likes</p>
    </div>

  </div>
</template>

<style scoped>
.review {
  padding: 32px 48px;
  text-align: left;
}

.stats {
  width: 70%;
}

.like:hover {
  cursor: pointer;
}

</style>