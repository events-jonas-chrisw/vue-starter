import Dialog from 'components/modal/Dialog.vue';

let dialog;

function show(title, params = {}) {
  params = Object.assign({
    type: 'success', // success|danger|neutral
    closable: true,
    html: null,
    buttons: null
  }, params);

  dialog.show = true;
  dialog.title = title;
  dialog.type = params.type;
  dialog.closable = params.closable;
  dialog.html = params.html;
  dialog.buttons = params.buttons;

  return dialog;
}

function close() {
  dialog.show = false;
}

function mount(Vue) {
  const DialogClass = Vue.extend(Dialog);
  dialog = new DialogClass();
  dialog.$mount();
  dialog.$on('close', close);
}

export default function install(Vue) {
  mount(Vue);

  Object.defineProperty(Vue.prototype, '$dialog', {
    get() {
      return {show, close};
    }
  })
}
