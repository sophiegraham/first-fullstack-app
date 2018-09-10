<template>
  <div id="app">
    <header>
    <img alt="logo" src="./assets/logo.png">
    <HelloWorld msg="HELLOWORLDRappers"/>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/rappers">Rappers</router-link>
    </nav>
    </header>

    <main>
      <router-view :albums="albums"></router-view>
    </main>
  </div>
</template>

<script>
import api from './services/api';

export default {
  data(){
    return{
      albums: null
    };
  },
  created() {
    api.getAlbums()
      .then(albums => {
        this.albums = albums;
      });
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  height: 75px;
  background: lightsteelblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header img {
  width: 100px;
}
nav a {
  text-decoration: none;
  color: black;
  margin: 3px;
  padding: 3px;
  border: 1px solid black;
}
main {
  padding: 8px;
}

</style>
