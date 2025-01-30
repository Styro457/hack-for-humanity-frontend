<template>
  <div class="star-rating" :class="{'clickable-rating': clickable}" @mouseleave="handleHover(null)">
    <PhosphorIconStar
        :size="size === 'small' ? 18 : (size === 'big' ? 32 : 24)"
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
    const props = defineProps({
      rating: { type: Number, default: 0 },
      clickable: { type: Boolean, default: false },
      size: { type: String, default: "" }
    });

    const emit = defineEmits(['update:rating']);
    const hoverRating = ref(null);

    const rating = computed({
      get: () => props.rating,
      set: (value) => emit('update:rating', value),
    });

    const updateRating = (newRating) => {
      if (!props.clickable) return;
      rating.value = newRating;
    };

    const handleHover = (newHover) => {
      if (!props.clickable) return;
      hoverRating.value = newHover;
    };
  </script>


<style scoped>
.star-rating {
  display: flex;
  align-content: center;
  justify-content: center;
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