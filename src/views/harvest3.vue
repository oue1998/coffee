<template>
  <div id="harvest3">
    <header>
      <router-link to="/">
        <i class="material-icons nav__icon">keyboard_backspace</i>
      </router-link>
    </header>
    <div class="image">
      <img src="../assets/qr.svg" alt="qr" />
    </div>
    <section>
      <h2>เก็บเกี่ยว</h2>
      <p>หมายเลขล็อต</p>
      <p>สายพันธุ์</p>
    </section>
    <div class="button">
      <router-link to="#">บันทึกรูป</router-link>
      <router-link to="#">แชร์</router-link>
      <router-link to="/harvest2">
        <i class="material-icons nav__icon">keyboard_backspace</i>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "harvest3",
};
</script>
<style scoped>
header {
  height: 65px;
  position: relative;
}
header i {
  position: absolute;
  left: 10%;
  bottom: 0;
}

.nav__icon {
  font-size: 30px;
  color: #000;
}
.image {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

section{
    margin: 30px 10%;
}
section h2{
    font-size: 20px;
}
section p{
    font-size: 16px;
    margin: 15px 20px;
}

.button{
    display: flex;
  flex-direction: column;
  align-items: center;
}

.button a{
  text-decoration: none;
  color: #fff;
  background-color: #81542D;
  text-align: center;
  padding: 10px;
  width: 370px;
  font-size: 20px;
  font-weight: bolder;
  margin: 10px 0;
}
.button i{
    color: #fff;
}
</style>
