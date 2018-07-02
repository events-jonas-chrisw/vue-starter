import Toast from 'components/toast/Toast.vue';

let toast;

function show(message, params = {}) {
  params = Object.assign({
    type: 'success', // success|danger|neutral
  }, params);

  toast.show = true;
  toast.type = params.type;
  toast.message = message;

  return toast;
}

function close() {
  toast.show = false;
}

function mount(Vue) {
  const ToastClass = Vue.extend(Toast);
  toast = new ToastClass();
  toast.$mount();
  toast.$on('close', close);
}

export default function install(Vue) {
  mount(Vue);

  Object.defineProperty(Vue.prototype, '$toast', {
    get() {
      return {show, close};
    }
  })
}
