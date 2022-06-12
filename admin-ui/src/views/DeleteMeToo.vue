<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <delete-me msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import DeleteMe from '@/components/DeleteMe'

export default {
  name: 'DeleteMeToo',
  components: {
    DeleteMe
  }
}
</script>
