<template>
    <div>
        <div class="col-md-14">
          <div class="input-group">
            <input
              type="search"
              class="form-control"
              placeholder="請輸入手機號碼"
              aria-describedby="basic-addon1"
              v-model="search" @keyup.enter="emitTxt"
            />
            <button type="submit" class="input-group-text" id="basic-addon1" @click="emitTxt">
              <img src="@/assets/images/search.svg" alt="search">
            </button>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      search: '',
    }
  },
  watch: {
    search() {
      if(this.search === '') {
        this.$emit('emit-txt', this.search);
      }
    },
  },
  methods: {
    emitTxt() {
      // console.log(123);
      this.$emit('emit-txt', this.search);
    }
  },
  computed: {

  },
}
</script>