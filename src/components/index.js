import Vue from 'vue';
import Calendar from './calendar/Calendar';
import Loading from './loading/Loading';
import Modal from './modal/Modal';
import Tabs from './tabs/Tabs';
import Tab from './tabs/Tab';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('di-calendar', Calendar);
Vue.component('di-loading', Loading);
Vue.component('di-modal', Modal);
Vue.component('di-tabs', Tabs);
Vue.component('di-tab', Tab);
Vue.component('fa-icon', FontAwesomeIcon);
