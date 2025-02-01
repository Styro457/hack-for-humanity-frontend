<script setup lang="ts">
import { ref, computed, defineProps, watch } from "vue";
import { FilterMatchMode, FilterService } from '@primevue/core/api';
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  defaultSearchTerm: String,
  defaultSearchTypeIndex: {
    type: Number,
    default: 0
  }
});

const selectedCourse = ref(props.defaultSearchTerm || "");
const filteredCourses = ref();

const groupedCourses = ref([
  {
    label: 'University of Oulu',
    code: 'OU',
    items: [
      { label: 'CS-1001: Introduction to Computer Science', value: 'Computer Science' },
      { label: 'MA-2045: Applied Mathematics in Engineering', value: 'Applied Mathematics' },
      { label: 'ES-3012: Principles of Environmental Science', value: 'Environmental Science' },
      { label: 'AI-1500: Fundamentals of Artificial Intelligence', value: 'AI' },
      { label: 'DM-1203: Digital Marketing and Analytics', value: 'Marketing' },
      { label: 'BT-2201: Molecular Biology and Biotechnology', value: 'Biotechnology' },
      { label: 'GP-3305: Geophysics and Remote Sensing', value: 'Geophysics' },
      { label: 'PS-4102: Philosophy of Science and Technology', value: 'Philosophy' },
      { label: 'BM-5004: International Business Management', value: 'Business' },
      { label: 'FL-6001: Finnish Language and Culture for International Students', value: 'Finnish Studies' }
    ]
  }
]);

const search = (event) => {
  let query = event.query;
  let newFilteredCourses = [];

  for (let university of groupedCourses.value) {
    if (university.label.toLowerCase().includes(query.toLowerCase())) {
      newFilteredCourses.push({ ...university, items: university.items });
    } else {
      let filteredItems = FilterService.filter(university.items, ['label'], query, FilterMatchMode.CONTAINS);
      if (filteredItems && filteredItems.length) {
        newFilteredCourses.push({ ...university, items: filteredItems });
      }
    }
  }

  filteredCourses.value = newFilteredCourses;
};

const search_types = [
  { name: 'Course', id: 0 },
  { name: 'Professor', id: 1 }
];

const selectedSearch = ref(search_types[props.defaultSearchTypeIndex] || search_types[0]);

const onFormSubmit = ({ valid }) => {
  router.push({
    path: '/search',
    query: {
      search: selectedCourse.value,
      option: selectedSearch.value.id
    }
  });
};

const placeholder = computed(() => {
  if (selectedSearch.value.id === 0) {
    return 'Course name, code or keyword';
  } else if (selectedSearch.value.id === 1) {
    return 'Professor name';
  }
  return 'Search';
});

watch(() => props.defaultSearchTerm, (newSearchTerm) => {
  selectedCourse.value = newSearchTerm || "";
});

watch(() => props.defaultSearchTypeIndex, (newSearchTypeIndex) => {
  selectedSearch.value = search_types[newSearchTypeIndex] || search_types[0];
});

  const handleKeydown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onFormSubmit({ valid: true });
    }
  }
</script>

<template>
  <Form @submit="onFormSubmit">
    <div class="searchbar-container">
      <Select
          v-model="selectedSearch"
          :options="search_types"
          optionLabel="name"
          class="searchbar-element select"
      />
      <AutoComplete
          v-model="selectedCourse"
          class="searchbar-element autocomplete"
          :suggestions="filteredCourses"
          @complete="search"
          optionLabel="label"
          optionGroupLabel="label"
          optionGroupChildren="items"
          :placeholder="placeholder"
          @keydown="handleKeydown"
      >
        <template #optiongroup="slotProps">
          <div class="flex items-center">
            <img
                :alt="slotProps.option.label"
                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
                style="width: 18px"
            />
            <div>{{ slotProps.option.label }}</div>
          </div>
        </template>
      </AutoComplete>
      <Button icon="pi pi-filter" aria-label="Filter" class="iconbutton" />
      <Button type="submit" label="Search" class="search-btn" />
    </div>
  </Form>
</template>


<style scoped>
.searchbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 35vw;
  padding: 0.5rem;
  background: white;
  border: 1px solid rgba(217, 217, 217, 1);
  border-radius: 8px;
  gap: 0.5rem;
}

.searchbar-element {
  margin: 0;
}

.select {
  flex-shrink: 0;
}

.autocomplete {
  flex-grow: 1;
  min-width: 200px;
}

.iconbutton {
  background: none;
  border: none;
  color: var(--primary);
}

.iconbutton:hover {
  background: none;
  border: none;
  color: var(--primary);
}

.search-btn {
  flex-shrink: 0;
}
</style>
