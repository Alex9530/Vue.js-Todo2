
import { createStore } from 'vuex';


const store = createStore({

  state: {

    tasks: []
  },

  mutations: {

    ADD_TASK(state, task) {
      state.tasks.push(task);
    },

    DELETE_TASK(state, index) {
      state.tasks.splice(index, 1);
    },
    EDIT_TASK(state, payload) {
      const { updatedTask, id } = payload;
      const taskIndex = state.tasks.findIndex(item => item.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].text = updatedTask.text;
      }
    }
  },

  actions: {

    addTask({ commit }, task) {
      const newTask = { id: Date.now(), text: task };
      commit('ADD_TASK', newTask);
    },

    deleteTask({ commit }, index) {
      commit('DELETE_TASK', index);
    },
    editTask({commit},payload){
      commit('EDIT_TASK',payload)
    }
  },

  getters: {

    allTasks(state) {
      return state.tasks;
    }
  }
});


export default store;


