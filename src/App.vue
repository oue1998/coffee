<template>
  <div id="app">
    <router-view />
    <nav class="nav">
      <router-link to="/" class="nav__link nav__link--active">
        <i class="material-icons nav__icon">home</i>
        <span class="nav__text">Home</span>
      </router-link>
      <router-link to="/produc" class="nav__link">
        <i class="material-icons nav__icon">add_business</i>
        <span class="nav__text">การผลิต</span>
      </router-link>
      <router-link to="#" class="nav__link">
        <i class="material-icons nav__icon">qr_code_scanner</i>
        <span class="nav__text">SCAN</span>
      </router-link>
      <router-link to="#" class="nav__link">
        <i class="material-icons nav__icon">contact_page</i>
        <span class="nav__text">ข้อมูล</span>
      </router-link>
    </nav>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Prompt", sans-serif;
}

.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 55px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  display: flex;
  overflow-x: auto;
  position: sticky;
}

.nav__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-width: 50px;
  overflow: hidden;
  white-space: nowrap;
  font-family: sans-serif;
  font-size: 16px;
  color: #000;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.1s ease-in-out;
  border-radius: 50px;
}

.nav__link:hover {
  color: #5c5c5c;
}

.nav__link--active {
  background-color: #f0d9a5;
}

.nav__icon {
  font-size: 30px;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgba(190, 190, 190, 0.192);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

li {
  float: right;
}

#nav a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  border-bottom: 6px solid black;
} */
</style>
