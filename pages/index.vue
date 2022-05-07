<template>
    <div>
      <Search />
      <User v-if="isSearch" />
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
