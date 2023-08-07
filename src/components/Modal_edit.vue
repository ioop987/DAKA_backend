<template>
    <div class="modal_edit">
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
                        姓名<input type="text" class="name">
                        性別<select name="" id="sex">
                            <option selected disabled hidden></option>
                            <option>男</option>
                            <option>女</option>
                        </select>
                    </div>
                    <!-- 性別<input type="list" class="sex"> -->
                    <div class="second">
                        電話<input type="text" class="phone">
                        密碼<input type="text" class="password">
                    </div>
                    <div class="third">
                        生日<input type="text" class="birthday">
                        E-Mail<input type="text" class="mail">
                    </div>
                    地址<input type="text" class="address">
                    <div class="barcode">
                        <img src="../assets/images/member/barcode.png" alt="條碼">1234567890ABCD
                    </div>
                    <button class="confirm">確認</button>

                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

export default ({
    data() {
        return {
            management_all:
            {
                title: '白金會員_周杰倫',
                buy: '儲值金:5600元',
                spend: '當年度累積消費金額:3670元',
                mem_no: '1234567890ABCD',
            },

        }
    }
})
</script>