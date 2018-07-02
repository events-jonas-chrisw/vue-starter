<template>
  <div>
    <transition name="loading">
      <div class="modal active" v-if="show">
        <div class="modal-overlay"></div>
        <div class="loading" :class="sizeClass"></div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'lg'
      }
    },
    mounted () {
      this.$nextTick(() => {
        document.body.appendChild(this.$el);
      })
    },
    computed: {
      sizeClass () {
        return this.size ? `loading-${this.size}` : null;
      }
    },
    destroyed () {
      this.$el.remove();
    }
  }
</script>

<style lang="scss">
  .modal {
    &.loading-enter,
    &.loading-leave-active {
      opacity: 0;
      transform: scale(1.1);
    }
  }
</style>
