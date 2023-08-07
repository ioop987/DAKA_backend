<template>
    <form action="" class="news_modal" id="news_modal">
        <div class="news_edit">
            <div class="news_header mb-3">
                <h5 class="modal-title" id="">編輯消息</h5>
                <span>管理者：中壢分店</span>
                <button type="button" @click="toggleReadOnly">編輯</button>
                <button type="button" class="btn-close" @click="this.$emit('emit-modal')"></button>
            </div>
            <div class="news_body">
                <!-- 標題 -->
                <div class="row mb-3">
                    <label for="news_title" class="col-1 col-form-label">標題</label>
                    <div class="col-11">
                        <input type="text" class="form-control" id="news_title" maxlength="20" placeholder="限制字數 20 字"
                            :disabled="isReadOnly" v-model="news.news_title">
                    </div>

                </div>
                <!-- 日期和類別 -->

                <div class="row mb-3">
                    <label for="news_date" class="col-1 col-form-label">日期</label>
                    <div class="col-3">
                        <input type="date" class="form-control" id="news_date" :disabled="isReadOnly" v-model="news.news_date">
                    </div>

                    <label for="news_category" class="col-1 col-form-label">類別</label>
                    <div class="col-3">
                        <select class="col-12 form-select form-control" id="news_category" :disabled="isReadOnly" v-model="news.news_category">
                            <option :selected="news.news_category === 'NEWS'">NEWS</option>
                            <option :selected="news.news_category === 'ACTIVITY'">ACTIVITY</option>
                        </select>
                    </div>
                </div>


                <!-- 上傳圖檔 -->
                <div class="row mb-3">
                    <label for="" class="col-1 col-form-label">圖檔</label>
                    <div class="col-11">
                        <input type="file" class="form-control col-10 " required :disabled="isReadOnly">
                    </div>
                </div>
                <!-- 內文 -->
                <div class="row mb-3">

                    <label for="news_content" class="form-label col-1">內文</label>
                    <div class="col-11">
                        <textarea class="form-control" id="news_content" rows="10" v-model="news.news_text" @input="countWords"
                            maxlength="1000" :disabled="isReadOnly">

                            <!-- <span class="wordCount"> {{ wordCount }} / 1000 </span> -->
                        </textarea>
                    </div>

                </div>
            </div>
            <div class="news_footer mt-3">
                <button type="button" class="btn btn-secondary m-1">儲存草稿</button>
                <button type="button" class="btn btn-primary m-1">發佈送出</button>
            </div>
        </div>
    </form>
</template>


<script>
import { Form } from 'view-ui-plus';

export default {
    props:['news'],
    data() {
        return {
            text: "", // 绑定Textarea的输入内容
            wordCount: 0, // 用于显示字数的变量
            isReadOnly: true,
        };
    },
    methods: {
        countWords() {
            this.wordCount = this.text.length;
        },
        toggleReadOnly() {
            this.isReadOnly = !this.isReadOnly;
        }
    },
    computed: {},
    component: {},
    mounted() {
    },
    components: { Form }
}
</script>