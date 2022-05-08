<template>
    <Favorite v-if="isSearch"/>
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