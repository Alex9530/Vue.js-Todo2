<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
};
</script>
<template>
  <nav class="nava">
    <RouterLink class="navigation" to="/">Мои задачи</RouterLink>
    <RouterLink class="navigation" to="/addtask">Добавить задачу</RouterLink>
    <RouterLink class="navigation" to="/settings">Настройки</RouterLink>
  </nav>
  <main>
    <div class="container">
      <h1>Список задач</h1>

      <RouterView />
    </div>
  </main>
</template>

<style>
@font-face {
  font-family: "Intro Regular";
  src: url(./assets/fonts/IntroRegular.woff2) format("woff2"),
    url(./assets/fonts/intro-regular.woff) format("woff");
  font-weight: normal;
  font-style: normal;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body[data-theme='light'] {
  background: linear-gradient(135deg, lightgreen, darkgreen);
  color: black
}

body[data-theme='dark'] {
  background: linear-gradient(135deg, rgb(4, 57, 4), rgb(2, 18, 2));
  color: #e8e8e8;
}

body[data-theme='dark']  .container{
  background-color: #45aacc;
}
.nava{
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  background-color: lightseagreen;
  border-radius: 30px;
  border: 2px solid #000;
  box-shadow: 4px 4px #000;
  padding: 20px;
}

h1 {
  text-align: center;
}
nav {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  margin: 20px 0;
  
}
.navigation,
button {
  border-radius: 30px;
  padding: 20px;
  border: 2px solid #000;
  background-color: #f5f5dc;
  box-shadow: 4px 4px #000;
  font-size: 17px;
  font-weight: 600;
  color: blueviolet;
  text-decoration: none;
  cursor: pointer;
}
.navigation.router-link-active,
button:hover {
  box-shadow: 0px 0px #000;
  transform: translate(3px, 3px);
}

</style>
