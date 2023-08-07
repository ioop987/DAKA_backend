<template>
  <div>
    <Form >
      <template v-slot:form_query>
        <button class="btn btn-dark member_add" type="submit">
        新增會員
        <img src="@/assets/images/member/plus.svg" alt="plus" class="member_plus"> 
      </button>
      <select class="form-select w-25" aria-label="Default select example">
        <option selected>請選擇</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <input type="search">

      
 </template>
      <template v-slot:form_table >
        <table>
        <tr>
          <th v-for="column in columns">{{ column }}</th>
        </tr>
        <tr v-for="(item, index) in dataList" :key="item.index" @click.prevent="memberInfo(index)">
          <td>{{ item.name }}</td>
          <td>{{ item.no }}</td>
          <td>{{ item.rank }}</td>
          <td>{{ item.mobile }}</td>
          <td>{{ item.remain }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </table>
  
      
      </template>
    </Form>
  </div>
</template>

<script>

import Form from '@/components/Form.vue';

export default {
  components: {
    Form
  },
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