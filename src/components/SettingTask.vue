<template>
  <div class="settings">
    
    <label for="theme-selector">Выберите тему:</label>
    <select id="theme-selector" v-model="selectedTheme" @change="changeTheme">
      <option value="light">Светлая тема</option>
      <option value="dark">Темная тема</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTheme: localStorage.getItem('theme') || 'light',
    };
  },
  methods: {
    changeTheme() {
      document.body.setAttribute('data-theme', this.selectedTheme);
      localStorage.setItem('theme', this.selectedTheme);
    },
  },
  created() {
    this.changeTheme(); 
  },
};
</script>

<style >
label{
  color: blueviolet;
  background-color: #f5f5dc;
  border-radius: 30px;
  margin: 5px;
  padding: 5px;
}




</style>