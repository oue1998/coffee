<template>
  <div id="produc">
    <header>
      <router-link to="/">
        <i class="material-icons nav__icon">keyboard_backspace</i>
      </router-link>
    </header>
    <section>
      <div class="harvest">
      <div class="box_har"></div>
      <router-link to="/harvest1"><h1>เก็บเกี่ยว</h1></router-link>
    </div>
    <div class="Milling">
      <div class="box_mil"></div>
      <router-link to="/"><h1>การสี</h1></router-link>
    </div>
    <div class="stow">
      <div class="box_st"></div>
      <router-link to="/"><h1>คั่ว/บรรจุ</h1></router-link>
    </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "produc",
  components: {},
  methods: {
    // Toharvest(){
    //     this.$router.push({ name: 'harvest1' })
    // }
  },
};
</script>
<style scoped>
header{
  height: 65px;
  position: relative;
}
header i{
  position: absolute;
  left: 10%;
  bottom: 0;
}

.nav__icon {
    font-size: 30px;
    color: #000;
}

div a {
  text-decoration: none;
  color: #000;
}
a h1{
  font-size: 28px;
  font-weight:inherit;
  position: absolute;
  top: 50px;
  right: 50px;
}

section{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.harvest{
  height: 150px;
  width: 400px;
  border: 1px solid #A9D730;
  display: flex;
  position: relative;
  margin-bottom: 50px;
}
.box_har{
  height: 150px;
  width: 200px;
  background-color: #A9D730;
}

.Milling{
  height: 150px;
  width: 400px;
  border: 1px solid #EEAD00;
  display: flex;
  position: relative;
  margin-bottom: 50px;
}
.box_mil{
  height: 150px;
  width: 200px;
  background-color: #EEAD00;
}

.stow{
  height: 150px;
  width: 400px;
  border: 1px solid #E22E17;
  display: flex;
  position: relative;
  margin-bottom: 50px;
}
.box_st{
  height: 150px;
  width: 200px;
  background-color: #E22E17;
}


</style>
