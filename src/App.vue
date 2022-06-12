<template >
  <div class="app">


    <i-slider v-model="arr" range>
    </i-slider>
    <i-button>22</i-button>
  </div>
  <!-- <p>{{ a }}</p> -->

</template>
<script setup lang="ts">
import { Button } from 'view-design'
import { getresutl } from '@/api/getsongs'
console.log(Button);


const arr = [20, 50]

const a = 1
getresutl()
</script>
<style>
#app {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: aqua;
}
</style>