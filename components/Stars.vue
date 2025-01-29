<template>
  <p> DATA: {{ small }} and {{ rating }} and {{ clickable }}</p>
  <div class="star-rating" :class="{'clickable-rating': clickable}" @mouseleave="handleHover(null)">
    <PhosphorIconStar
        :size="small ? 18 : 24"
        v-for="(star, index) in 5"
        :key="index"
        :weight="index < (hoverRating || rating) ? 'fill' : 'regular'"
        :class="{ 'clickable': clickable }"
        @click="clickable ? updateRating(index + 1) : null"
        @mouseover="handleHover(index + 1)"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';

const props = defineProps({
  rating: { type: Number, default: 0 },
  clickable: { type: Boolean, default: false },
  small: { type: Boolean, default: false }
});

const emit = defineEmits(['update:rating']);
const rating = ref(props.rating);
const hoverRating = ref(null);

watch(() => props.rating, (newValue) => {
  if(!props.clickable)
    return;
  rating.value = newValue;
});

const updateRating = (newRating) => {
  if(!props.clickable)
    return;
  rating.value = newRating;
  emit('update:rating', newRating);
};

const handleHover = (newHover) => {
  if(!props.clickable)
    return;
  hoverRating.value = newHover;
};
</script>

<style scoped>
.star-rating {
  display: flex;
  gap: 5px;
  width: 100%;
  color: var(--secondary);
}

.clickable-rating:hover {
  color: var(--secondary-hover);
}

.clickable {
  cursor: pointer;
}
</style>