<template>
  <div>
    <Form>
      <template v-slot:form_query> </template>

      <template v-slot:form_table>
        <div class="com_add">
          <p>新增書籍資料</p>
          <div class="com_add_content">
            <div class="container">
              <div class="row">
                <div class="col-md-1">
                  <div class="mb-3">
                    <label class="col-form-label">建檔編號</label>
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">I S B N號</label>
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">書籍名稱</label>
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">書籍集數</label>
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">書籍作者</label>
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">書籍譯者</label>
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">漫畫分類</label>
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">熱門書籍</label>
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">新書推薦</label>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control border-0"
                      id="name"
                      placeholder=""
                      readonly
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="請輸入 阿拉伯數字"
                      v-model="inputValue1"
                      @input="validateInput(1)"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="請輸入 最多64字"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="請輸入 阿拉伯數字"
                      v-model="inputValue2"
                      @input="validateInput(2)"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="請輸入 最多32字"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="請輸入 最多32字"
                    />
                  </div>
                  <div class="mb-3">
                    <select
                      class="form-select"

                      v-model="selectedOption1"
                    >
                      <option value="0" disabled selected>請選擇</option>
                      <option value="1">冒險系列</option>
                      <option value="2">少男系列</option>
                      <option value="3">魔法系列</option>
                    </select>
                  </div>
                  <div class="mt-4">
                    <input
                      class="form-check-input checkbox"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                  </div>
                  <div class="mt-4">
                    <input
                      class="form-check-input checkbox"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                  </div>
                </div>
                <div class="col-md-1">
                  <div class="mb-3">
                    <label class="col-form-label">進貨價格</label>
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">書籍語言</label>
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">出版社</label>
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">出版日期</label>
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">封面更新</label>
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">內頁更新</label>
                  </div>
                  <div class="imgpreview">
                    <img
                      v-for="(url, index) in imageUrls"
                      :key="index"
                      :src="url"
                      alt="Uploaded Image"
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="請輸入 阿拉伯數字"
                      v-model="inputValue3"
                      @input="validateInput(3)"
                    />
                  </div>
                  <div class="mb-3">
                    <select
                      class="form-select"
                      v-model="selectedOption2"
                    >
                      <option value="0" disabled selected>請選擇</option>
                      <option value="1">繁體中文</option>
                      <option value="2">日語</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="請輸入 最多12字"
                    />
                  </div>
                  <div class="form-row form-group">
                    <div class="time">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="****"
                        v-model="inputValue4"
                        @input="validateInput(4)"
                        style="max-width: 70px"
                      />年
                    </div>
                    <div class="time">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="**"
                        v-model="inputValue5"
                        @input="validateInput(5)"
                        style="max-width: 50px"
                      />月
                    </div>
                    <div class="time">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="**"
                        v-model="inputValue6"
                        @input="validateInput(6)"
                        style="max-width: 50px"
                      />日
                    </div>
                  </div>
                  <div class="fileup">
                    <label for="formFileMultiple" class="form-label"></label>
                    <input
                      class="form-control"
                      type="file"
                      id="formFile"
                      multiple
                      name="imageUpload"
                      @change="handleImageUpload"
                    />
                  </div>
                  <div class="mb-3 fileup">
                    <label for="formFile" class="form-label"></label>
                    <input
                      class="form-control"
                      type="file"
                      id="formFile"
                      multiple
                      name="imageUpload"
                      @change="handleImageUpload"
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="mt-2 mb-4">
                    <label for="ol-form-label">書籍簡介</label>
                  </div>
                  <div class="col-mb-4">
                    <textarea
                      class="form-control mb-5"
                      id="exampleFormControlTextarea1"
                      rows="10"
                      v-model="text"
                      @input="countWords"
                      maxlength="150"
                    ></textarea>
                    <p class="wordCount">{{ wordCount }}/150</p>
                    <!-- 確認紐 -->
                    <div class="com_add_btncontent">
                      <button
                        type="button"
                        class="com_add_btn"
                        @click="openModal"
                        :disabled="!isFormValid"
                      >
                        送出
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 彈窗 -->
          <div class="modal_container" v-if="showModal">
            <div class="modal_overlay" @click="closeModal"></div>
            <div class="modal-content">
              <p>確定新增？</p>
              <div class="popup_btnarea">
                <button class="com_add_btn" @click="submitData">確定</button>
                <button class="com_add_btn" @click="closeModal">取消</button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Form>
  </div>

  <!-- Modal -->
</template>
<script>
import Form from "@/components/Form.vue";

export default {
  components: {
    Form,
  },
  data() {
    return {
      text: "", // 绑定Textarea的输入内容
      wordCount: 0, // 用于显示字数的变量
      imageUrls: [], // 用于存储上传后图片的URL数组
      inputValue1: "",
      inputValue2: "",
      inputValue3: "",
      inputValue4: "",
      inputValue5: "",
      inputValue6: "",
      showModal: false,
      selectedOption1: "0",
      selectedOption2: "0",
    };
  },
  computed: {
    isFormValid() {
      return (
        this.inputValue1 !== "" &&
        this.inputValue2 !== "" &&
        this.inputValue3 !== "" &&
        this.inputValue4 !== "" &&
        this.inputValue5 !== "" &&
        this.inputValue6 !== "" &&
        this.text !== "" &&
        this.imageUrls.length > 1 &&
        this.selectedOption1 !== "0" &&
        this.selectedOption2 !== "0"
      );
    },
  },
  methods: {
    countWords() {
      this.wordCount = this.text.length;
    },
    handleImageUpload(event) {
      const files = event.target.files;
      const maxImages = 2; // 最大图片张数

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = () => {
          if (this.imageUrls.length === maxImages) {
            // 如果已有图片数量等于最大限制，则替换第一张图片
            this.imageUrls.splice(0, 1);
          }
          this.imageUrls.push(reader.result); // 添加新上传的图片URL到数组中
        };

        if (file) {
          reader.readAsDataURL(file);
        }
      }
    },
    validateInput(inputNumber) {
      let inputValue = this[`inputValue${inputNumber}`];
      // 使用正则表达式验证输入的内容是否为阿拉伯数字
      inputValue = inputValue.replace(/[^\d]/g, "");
      // 将验证后的值赋回到相应的输入框
      this[`inputValue${inputNumber}`] = inputValue;
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    submitData() {
      // 处理提交数据逻辑
      // ...

      // 关闭弹窗
      this.closeModal();
    },
  },
};
</script>
