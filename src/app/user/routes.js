import Main from './components/Main.vue';
import Edit from './components/Edit.vue';

export default  [
  {
    path: '/users',
    component: Main,
    meta: {
      layout: 'master',
      requiresAuth: true
    }
  }, {
    path: '/users/:id/edit',
    component: Edit,
    meta: {
      layout: 'master',
      requiresAuth: true
    }
  }
];
