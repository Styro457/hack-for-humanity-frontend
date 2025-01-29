<template>
  <NuxtLink to="/course/1">
    <div class="container">
      <div class="columns">
        <div class="column first">
          <h2 class="rating-value">5.00</h2>
          <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <span class="subnote">(775 reviews)</span>
        </div>
        <div class="column second">
          <h3>CS302</h3>
          <h2>Advanced Algorithms and Data Structures</h2>
          <div class="nested-columns">
            <p class="nested-column"><i class="pi pi-map-marker"></i> Northbridge University, UK</p>
            <p class="nested-column"><i class="pi pi-user"></i> Dr. Eleanor Hartman</p>
            <p class="nested-column"><i class="pi pi-clock"></i> 12 Weeks</p>
          </div>
        </div>
        <div class="column third">
          <span>Department</span>
          <p>Computer Science, Software Engineering, Information Technology</p>
        </div>
      </div>
      <div class="row">
        <Badge value="Online" severity="secondary" />
        <Badge value="Advanced" severity="secondary" />
        <Badge severity="secondary">Estimated weekly hours:&nbsp&nbsp<b class="bold-800">8-10 hours</b> </Badge>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>

.first {
  width: 20%;
  text-align: center;
}

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
.row {
  align-self: end;
}

.subnote {
  color: #57B8FF;
}
</style>
<script setup lang="ts">
</script>