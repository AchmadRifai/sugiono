<template>
  <div>
    <Loader />
    <router-view />
  </div>
</template>
<script>
import Loader from './Loader.vue'
export default {
  components: { Loader },
}
</script>