import Login from './components/Login.vue';
import Logout from './components/Logout.vue';

export default  [
  {
    path: '/login',
    component: Login,
    meta: {
      layout: 'empty'
    }
  }, {
    path: '/logout',
    component: Logout,
    meta: {
      layout: 'empty'
    }
  }
];
