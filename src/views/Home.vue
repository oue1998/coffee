<template>
  <div class="home">
   <header>
     <nav>
      <div class="logo"> <router-link to="/">LOGO</router-link></div>
      <div class="logout"> <router-link to="#">logout</router-link></div>
     </nav>
     <div class="image">
       <img src="../assets/SCAN.svg" alt="scan">
     </div>
   </header>
   <section>
     <div class="title">
       <h3>รายการผลิตล่าสุด</h3>
     </div>
     <div class="box">
       <div class="head">
         <h4>เก็บเกี่ยว</h4>
       </div>
       <div class="text">
         <p>เลขล็อต</p>
         <p>ว/ด/ป ล่าสุด</p>
       </div>
     </div>
   </section>
  </div>
<!-- <HelloWorld /> -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
}
</script>

<style scoped>
header{
  width: 100%;
  height: 448px;
  margin: 0 auto;
  background: url('../assets/coffee.jpg') no-repeat;
  background-position: center;
}
nav{
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav a{
  text-decoration: none;
  color: #F0D9A5;
}

.logo{
  margin-left: 5%;
  font-size: 30px;
  font-weight: bold;
}

.logout{
  margin-right: 5%;
  font-size: 25px;
}

.image{
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.title h3{
text-align: center;
margin-top: 40px;
font-size: 25px;
}

.box{
  width: 400px;
  margin: 20px auto;
}

.head{
  height: 40px;
  background-color: #81542D;
}

.head h4{
color: white;
font-size: 20px;
font-weight: inherit;
margin-left: 30px;
padding-top: 3px;
}

.text{
  height: 94px;
  background-color: #F0D9A5;
}

.text p{
font-size: 16px;
font-weight:lighter;
margin-left: 30px;
padding-top: 10px;
}
</style>
