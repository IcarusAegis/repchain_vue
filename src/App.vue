<template>
  <div id="app">
    <nav>
      <router-link to="/blockinfo">blockinfo</router-link> |
      <router-link to="/upload">upload</router-link>|
      <router-link to="/setting">setting</router-link>|
      <router-link to="/create_upload_trans_dataHex">create_data</router-link>|
      <router-link to="/api">api</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
