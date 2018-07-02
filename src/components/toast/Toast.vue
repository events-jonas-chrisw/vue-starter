<template>
  <div class="toast-wrapper" v-if="show">
    <div class="toast" :class="`toast-${type}`">
      <button class="btn btn-clear float-right" @click="show = false"></button>
      {{ message }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: ''
      },
      message: String
    },
    methods: {

    },
    mounted () {
      this.$nextTick(() => {
        document.body.appendChild(this.$el);
      })
    },
    destroyed () {
      this.$el.remove();
    },
  }
</script>

<style lang="scss">
  .toast-wrapper {
    position: absolute;
    top: .5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
  }
</style>
