<template>
  <div class="confirm_modal">
    <h1>確定取書？</h1>
    <div class="confirm_buttons">
      <button @click="confirm">確定</button>
      <button @click="closeConfirm">取消</button>
    </div>
  </div>
</template>
<script>

export default {
  name: 'modal',
  emits:['confirm','closeConfirm'],
  data() {
    return {
    }
  },
  methods: {
    confirm() {
      this.$emit('check-confirm',  this.$parent.step = 0);
    },
    closeConfirm() {
      this.$emit('close-confirm',  this.$parent.step = 2,this.$parent.showModal=true);
    }
  },
  computed: {

  },
  components: {

  },
  mounted() {

  },
}
</script>