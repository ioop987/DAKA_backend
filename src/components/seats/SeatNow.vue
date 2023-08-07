<template>
  <div>
    <Form>
      <template v-slot:form_query>
        <button class="btn btn-dark member_add" type="submit">
          新增會員
          <img
            src="@/assets/images/member/plus.svg"
            alt="plus"
            class="member_plus"
          />
        </button>
        <select class="form-select w-25" aria-label="Default select example">
          <option selected>請選擇</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <input type="search" />
      </template>
      <template v-slot:form_table> </template>
    </Form>
  </div>
</template>
<script>
import Form from "@/components/Form.vue";

export default {
  components: {
    Form
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
