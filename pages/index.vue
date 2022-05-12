<template>
    <div>
      <Search />
      <AsideLeft v-if="isSearch" />
      <AsideRight  v-if="isSearch" />
      <Repository v-if="isSearch" />
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapState('search', ['isSearch'])
  }
}
</script>

<style scoped>

</style>
