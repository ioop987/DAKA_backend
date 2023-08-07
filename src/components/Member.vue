<template>
  <div class="management_all">
      <div class="title">{{ management_all.title }}</div>
      <div class="gold">
          <div class="buy">{{ management_all.buy }}</div>
          <div class="spend">{{ management_all.spend }}</div>
      </div>
      <div class="member_infor">

          <div class="infor">
              <img src="../assets/images/member/pen_icon.png" alt="編輯" class="pen">
              <div class="first">
                  <label for="name"> 姓名<input type="text" class="name" id="name"></label>
                  <label for="password">密碼<input type="text" class="password" id="password"></label>
              </div>
              <div class="second">

                  <label for="phone">電話<input type="text" class="phone" id="phone"></label>
                  <label for="birthday">生日<input type="text" class="birthday" id="birthday"></label>
              </div>
              <div class="third">
                  <label for="mail">信箱<input type="text" class="mail" id="mail"></label>
              </div>
              <div class="barcode">
                  <img src="../assets/images/member/barcode.png" alt="條碼">{{management_all.mem_no}}
              </div>
              <button class="confirm">確認</button>

          </div>
      </div>
  </div>
  <div class="back">
        <div class="text">
            修改成功！
        </div>
        
        <button class="confirm">返回</button>
    </div>
</template>

<script>

export default({
  data() {
      return {
          management_all: 
              {
                  title: '白金會員_周杰倫',
                  buy: '儲值金:5600元',
                  spend: '當年度累積消費金額:3670元',
                  mem_no:'1234567890ABCD',
              },
          
      }
  }
})
</script>