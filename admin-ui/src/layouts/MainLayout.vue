<template>
  <v-app :dark="dark" id="app">
    <v-main>
      <v-fade-transition name="fade" mode="out-in">
        <div>
          <router-view />
        </div>
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainLayout',
  components: {},
  data: () => ({
    dark: true
  }),
  created() {},

  computed: {
    ...mapState({})
  },
  methods: {}
}
</script>
<style>
#app {
  background-color: #fbfcfb;
}
</style>
