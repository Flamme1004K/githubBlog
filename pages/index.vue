<template>
  <div>
    {{ result }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      result: '',
    }
  },
  created() {
    this.sayHi('10')
    this.fetchSomething()
  },
  methods: {
    sayHi(someone: string) {
      this.result = 'hello ' + someone
    },
    async fetchSomething() {
      const ip = await this.$axios.$get('http://icanhazip.com')
      console.log(ip)
    },
  },
})
</script>
