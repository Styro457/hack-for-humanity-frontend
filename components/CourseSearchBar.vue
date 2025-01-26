<script setup lang="ts">
import { ref } from "vue";
import { FilterMatchMode, FilterService } from '@primevue/core/api';

const router = useRouter();

const courses = ref();
const selectedCourse = ref();
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
  },
  {
    label: 'University of Tampere',
    code: 'UT',
    items: [
      { label: 'CN-1010: Cognitive Neuroscience', value: 'Neuroscience' },
      { label: 'FL-2200: Modern Finnish Literature', value: 'Literature' },
      { label: 'PH-3001: Public Health and Healthcare Systems', value: 'Public Health' },
      { label: 'DM-1105: Digital Media and Communication', value: 'Media' },
      { label: 'BL-3500: Business Law and Ethics', value: 'Business Law' },
      { label: 'PS-4201: Psychology of Learning and Memory', value: 'Psychology' },
      { label: 'PS-5003: Political Science and International Relations', value: 'Political Science' },
      { label: 'DS-2401: Data Science and Big Data Analytics', value: 'Data Science' },
      { label: 'SO-3210: Sociology and Social Policy', value: 'Sociology' },
      { label: 'CW-4205: Creative Writing and Storytelling', value: 'Creative Writing' }
    ]
  },
  {
    label: 'Aalto University',
    code: 'AL',
    items: [
      { label: 'DT-2001: Design Thinking and Innovation', value: 'Design Thinking' },
      { label: 'EN-5003: Entrepreneurship and Startups', value: 'Entrepreneurship' },
      { label: 'AI-4301: Artificial Intelligence in Business', value: 'AI in Business' },
      { label: 'AR-2202: Architecture and Urban Design', value: 'Architecture' },
      { label: 'DT-3300: Digital Transformation and Leadership', value: 'Digital Transformation' },
      { label: 'CV-3401: Computer Vision and Machine Learning', value: 'Computer Vision' },
      { label: 'SE-4201: Sustainable Energy Systems', value: 'Sustainable Energy' },
      { label: 'IM-5102: International Marketing Strategies', value: 'International Marketing' },
      { label: 'MR-6003: Advanced Manufacturing and Robotics', value: 'Manufacturing' },
      { label: 'GM-7100: Creative Media and Game Development', value: 'Game Development' }
    ]
  }
]);



const search = (event) => {
  let query = event.query;
  let newFilteredCities = [];

  for (let university of groupedCourses.value) {
    if(university.label.toLowerCase().includes(query.toLowerCase())) {
      newFilteredCities.push({...university, ...{items: university.items}});
    }
    else {
      let filteredItems = FilterService.filter(university.items, ['label'], query, FilterMatchMode.CONTAINS);
      if (filteredItems && filteredItems.length) {
        newFilteredCities.push({...university, ...{items: filteredItems}});
      }
    }
  }

  filteredCourses.value = newFilteredCities;

}

const selectedSearch = ref({ name: 'Course', code: 'CRS' });
const search_type = ref([
  { name: 'Course', code: 'CRS' },
  { name: 'Professor', code: 'PRF' },
  { name: 'University', code: 'UNI' }
]);

const onFormSubmit = ({ valid }) => {
  router.push({
    path: '/search',
    query: {
      search: selectedCourse.value,
      option: selectedSearch.value.name,
    },
  });
};

</script>

<template>
  <Form @submit="onFormSubmit">
  <div class="card flex justify-center searchbar">
      <Select v-model="selectedSearch" :options="search_type" optionLabel="name" :default-value="search_type[0]" class="w-full md:w-56 searchbar element" />
      <AutoComplete v-model="selectedCourse" class="searchbar element" :suggestions="filteredCourses" @complete="search" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Course name, code or keyword">
        <template #optiongroup="slotProps">
          <div class="flex items-center country-item">
            <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
            <div>{{ slotProps.option.label }}</div>
          </div>
        </template>
      </AutoComplete>
      <Button icon="pi pi-filter" aria-label="Save" class="iconbutton" />
      <Button type="submit" label="Submit" />
  </div>
  </Form>

</template>


<style scoped>
.searchbar.card {
  width: 100%;
  padding: 0.3rem 0.3rem;
  background: white;
  border: rgba(217, 217, 217, 1) 1px solid;
  border-radius: 8px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 1rem;
}

.searchbar.element {
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  box-shadow: none;
  flex-wrap: nowrap;
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

.p-autocomplete {
  width: 70%;
}


</style>