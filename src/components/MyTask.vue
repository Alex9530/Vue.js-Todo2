<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["allTasks"]),

    tasks() {
      return this.allTasks;
    },
  },

  methods: {
    deleteTask(index) {
      this.$store.dispatch("deleteTask", index);
    },
    editTask(index) {
    const task = this.tasks[index];
    const newText = prompt("Введите новый текст задачи:", task.text);
    if (newText !== null) {
      const updatedTask = { id: task.id, text: newText };
      this.$store.dispatch("editTask", { updatedTask, id: task.id });
    }
  },

    toggleTask(index) {
      this.$store.dispatch("toggleTask", index);
    },

    goToAdd() {
      this.$router.push("/addtask");
    },
  },
};
</script>

<template>
  <div class="task">
    <h3 v-if="tasks.length === 0">Задач нет</h3>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <span>{{ task.text }}</span>
        <button @click="deleteTask(index)">Удалить</button>
        <button @click="editTask(index)">Редактировать</button>
      </li>
    </ul>
    <button @click="goToAdd">Перейти к добавлению</button>
  </div>
</template>

<style>
.task {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
h3 {
  text-align: center;
  margin-bottom: 40px;
}
ul {
  width: 100%;
}
li {
 
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
}
</style>
