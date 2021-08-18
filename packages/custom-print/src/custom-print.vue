<template>
  <div class="content">
    vue-hansandtable-print
  </div>
</template>

<script>
import propsMixin from './mixins/propMixin.js'

export default {
  name: 'CustomPrint',

  mixins: [propsMixin]
}
</script>

<style scoped>
@import '../../theme-scss/custom-print/customPrint.scss'
</style>
