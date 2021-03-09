<template>
  <div id="harvest2">
    <header>
      <router-link to="/harvest1">
        <i class="material-icons nav__icon">keyboard_backspace</i>
      </router-link>
    </header>
    <section>
      <h2>ข้อมูลเบื้องต้น</h2>
     <div class="input">
          <input type="text" name="เลขล็อต" placeholder="หมายเลขล็อต" />
      <select id="Species" name="Species" form="Species">
        <option value="volvo">อราบิก้า</option>
        <option value="saab">โรบัสต้า</option>
      </select>
      <input type="date" name="ว/ด/ป" placeholder="ว/ด/ป" value="2021-03-10" />
      <input
        type="text"
        name="ส่วนผสมในดิน/สารเคมีที่ใช้"
        placeholder="ส่วนผสมในดิน/สารเคมีที่ใช้"
      />
     </div>
      <h2>วิธีเก็บ</h2>
      <div class="input">
          <select id="how" name="how" form="how">
        <option value="volvo">แบบรวดเดียว</option>
        <option value="saab">แบบคัดสรร</option>
      </select>
      <input type="text" name="ปริมาณ" placeholder="ปริมาณ" />
      </div>
    </section>
    <div class="input">
        <router-link to="/harvest3">QR Code</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "harvest2",
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

section{
    margin: 30px 10%;
}
.input{
    display: flex;
  flex-direction: column;
  align-items: center;

}
input{
    width: 370px;
    height: 50px;
    margin: 15px 0;
    font-size: 18px;
    font-weight: lighter;
    padding-left: 20px;
    padding-right: 20px;
}
select{
    width: 370px;
    height: 50px;
    margin: 15px 0;
    font-size: 18px;
    font-weight: lighter;
    padding-left: 20px;
    
}

.input a{
  text-decoration: none;
  color: #fff;
  background-color: #81542D;
  text-align: center;
  padding: 10px;
  font-size: 20px;
  font-weight: bolder;

}
</style>
