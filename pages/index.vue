<template>
  <div>
    {{ github }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // async asyncData({ $axios }) {
  //   const { data } = await $axios.get('/leetcode/contents/')
  //   return { github: data }
  // },
  data() {
    return {
      github: '',
    }
  },
  created() {},
  mounted() {
    this.getGithub()
  },
  methods: {
    async getGithub() {
      const res = await this.$store.dispatch('getLeetcodeRepositroy')
      this.github = res.data
    },
  },
})
</script>
