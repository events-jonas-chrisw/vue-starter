<template>
  <div>Saindo...</div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'Logout',
    mounted () {
      this.logout()
        .then(() => this.$router.push({ path: '/login' }));
    },
    methods: {
      ...mapActions(['logout'])
    }
  }
</script>
