export default function install(Vue) {
  const eventBus = new Vue();

  Object.defineProperty(Vue.prototype, '$bus', {
    get() {
      return eventBus;
    }
  });
}
