<template>
  <component :is="currentComponent"></component>
</template>

<script>
  import MasterLayout from '../layouts/Master.vue';
  import EmptyLayout from '../layouts/Empty.vue';

  export default {
    name: 'App',
    data () {
      return {
        layout: null
      }
    },
    components: {
      MasterLayout,
      EmptyLayout
    },
    mounted () {
      this.setLayout(this.$route);
    },
    watch: {
      $route (to) {
        this.setLayout(to);
      }
    },
    methods: {
      setLayout (route) {
        this.layout = route.meta.layout || null;
      }
    },
    computed: {
      currentComponent () {
        return this.layout !== null ? `${this.layout}-layout` : 'router-view';
      }
    }
  }
</script>
