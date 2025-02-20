
import { createMemoryHistory, createRouter } from 'vue-router';
import MyTask from './components/MyTask.vue';
import AddTask from './components/AddTask.vue';
import SettingsTask from './components/SettingTask.vue';

const routes = [

  { path: '/', component: MyTask },
  { path: '/addtask', component: AddTask },
  { path: '/settings', component: SettingsTask },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router;

