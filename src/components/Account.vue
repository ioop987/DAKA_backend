<template>
  <div>
    <Form>
      <template v-slot:form_query>
        <button class="btn btn-dark member_add" type="submit">
          新增帳號
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


      <template v-slot:form_table>
        <table class="main_list">
          <tr>
            <th v-for="column in columns">{{ column }}</th>
          </tr>
          <tr v-for="(item, index) in dataList" :key="item.index" @click.prevent="memberInfo(index)">
            <td>{{ item.ename }}</td>
            <td>{{ item.admin_no }}</td>
            <td>{{ item.branch }}</td>
            <td>{{ item.ejob }}</td>
            <td>{{ item.password }}</td>
          </tr>
        </table>


      </template>
    </Form>
  </div>
</template>
<script>
import Modal from '@/components/Modal.vue';
import Form from '@/components/Form.vue';

export default {
  components: {
    Modal,
    Form
  },
  data() {
    return {
      memInfo: {
        ename: '',
        admin_no: '',
        branch: '',
        ejob: '',
        password: '',

      },
      dataList: [
        {
          ename: '',
          admin_no: '',
          branch: '',
          ejob: '',
          password: '',

        },
        {
          ename: '',
          admin_no: '',
          branch: '',
          ejob: '',
          password: '',

        },
        {
          ename: '',
          admin_no: '',
          branch: '',
          ejob: '',
          password: '',

        },
        {
          ename: '',
          admin_no: '',
          branch: '',
          ejob: '',
          password: '',

        },
        {
          ename: '',
          admin_no: '',
          branch: '',
          ejob: '',
          password: '',

        },
        {
          ename: '',
          admin_no: '',
          branch: '',
          ejob: '',
          password: '',

        },
        {
          ename: '',
          admin_no: '',
          branch: '',
          ejob: '',
          password: '',

        },
        {
          ename: '',
          admin_no: '',
          branch: '',
          ejob: '',
          password: '',

        },
      ],
      columns: [
        '姓名',
        '員工編號',
        '分館',
        '職稱',
        '密碼',
      ],
      model: '',

    }
  },
  methods: {
    memberInfo(index) {
      let { ename, admin_no, branch, ejob, password } = this.dataList[index];

      console.log(ename, admin_no, branch, ejob, password);

    },


  }
}
</script>

