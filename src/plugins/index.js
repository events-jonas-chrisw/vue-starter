import Vue from 'vue';
import Http from './http';
import router from '../router';
import AvatarLetters from './avatar-letters';
import Bus from './bus';
import Dialog from './dialog';
import Toast from './toast';

Vue.use(Http, { router });
Vue.use(AvatarLetters);
Vue.use(Bus);
Vue.use(Dialog);
Vue.use(Toast);
