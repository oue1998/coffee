<template>
  <div id="harvest1">
    <header>
      <router-link to="/produc">
        <i class="material-icons nav__icon">keyboard_backspace</i>
      </router-link>
    </header>
    <div class="title">
      <h1>เก็บเกี่ยว</h1>
      <div class="icon">
        <router-link to="/harvest2">
          <i class="material-icons nav__icon">add_circle</i>
        </router-link>
      </div>
    </div>
    <section>
      
      <div class="content">
        <p>เลขล็อต</p>
        <p>ว/ด/ป</p>
      </div>
      
    </section>
    <div class="space"></div>
  </div>
</template>
<script>
export default {
  name: "harvest1",
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
  bottom: 0px;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  position: relative;
}
.title h1 {
  font-size: 30px;
  font-weight: bolder;
  position: absolute;
  left: 5%;
}
.title i {
  position: absolute;
  right: 5%;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
.content{
  width: 370px;
  height: 90px;
  background-color: #FAEAC6;
}
.content p{
  font-size: 18px;
  font-weight: lighter;
  margin:10px 80px;
}

.nav__icon {
  font-size: 30px;
  color: #000;
}

.space{
  height: 30rem;
}
</style>
