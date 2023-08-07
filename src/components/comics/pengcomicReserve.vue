<template>
    <div>
      <Form>
        <template v-slot:form_query>
          <div class="col-md-2">
            <div class="input-group">
              <input type="search" class="form-control" placeholder="預約輸入請輸入電話" aria-describedby="basic-addon1"
                v-model="search" />
              <span class="input-group-text" id="basic-addon1" @click.prevent="searchReserve">
                <img src="@/assets/images/search.svg" alt="search">
              </span>
  
            </div>
          </div>
        </template>
        <template v-slot:form_table>
          <table class="main_list" v-show="step === 1">
            <tr>
              <th v-for="order in comics_order" :key="order">{{ order }}</th>
            </tr>
            <tr v-for="(item, index) in filterDataList" :key="index" @click="openModal(index)">
              <td>{{ item.comics_order_no }}</td>
              <td>{{ item.menno }}</td>
              <td>{{ item.comics_order_date }}</td>
              <td>{{ item.comics_borrow }}</td>
            </tr>
          </table>
          <!-- 黑底 -->
          <div class="modal-backdrop" v-show="showModal && step === 2"></div>
          <!-- 彈窗 -->
          <div v-show="showModal && step === 2" class="com_reserve_modal">
            <div class="modal_title">
              <h5>預約明細</h5>
              <img src="@/assets/images/member/close.svg" alt="close" class="close_window" @click="closeModal">
            </div>
            <div class="com_reserve_box">
              <div class="com_reserve_container">
                <table>
                  <tr>
                    <td>
                      <p>會員電話</p>
                      <span class="detail_content">{{ selectedItem.mobile }}</span>
                    </td>
                    <td>
                      <p>訂單編號</p>
                      <span class="detail_content">{{ selectedItem.comics_order_no }}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>預約日期</p>
                      <span class="detail_content">{{ selectedItem.comics_order_date }}</span>
                    </td>
                    <td>
                      <p>取書日期</p>
                      <span class="detail_content"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>應還日期</p>
                      <span class="detail_content">{{ selectedItem.comics_return_date }}</span>
                    </td>
                    <td>
                      <p>歸還日期</p>
                      <span class="detail_content"></span>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="com_books_detail">
                <table>
                  <tr>
                    <th>序號</th>
                    <th>建檔編碼</th>
                    <th>漫畫名稱</th>
                    <th>金額</th>
                  </tr>
                  <tr v-for="(book, index) in selectedItem.books" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ book.comics_no }}</td>
                    <td>{{ book.title }} {{ book.comics_index }}</td>
                    <td>{{ book.amount }}</td>
                  </tr>
                </table>
              </div>
              <div class="check_line">
                <div class="pickup_button">
                  <button type="submit" @click.prevent="goConfirm">取書</button>
                </div>
                <div class="total_amount">
                  <tr>
                    <p>總金額</p>
                    <span>{{ countTotal() }}</span>
                  </tr>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Form>
      <Modal v-show="step === 3" :check-confirm="getCheckConfirm" :close-confirm="getCloseConfirm"></Modal>
    </div>
  </template>
  <script>
  import Form from '@/components/Form.vue';
  import Modal from '@/components/comics/Modal.vue';
  import { TreeChildConfig } from 'view-ui-plus';
  
  export default {
    components: {
      Form, Modal
    },
    data() {
      return {
        showModal: false,
        comics_order: [
          '訂單編號',
          '姓名',
          '預約日期',
          '租借狀態'
        ],
        dataList: [
          {
            comics_order_no: 'CB0001',
            menno: '王小明',
            comics_order_date: '2023-05-01',
            comics_borrow: '未取書',
            mobile: '0988-000-123',
            books: [
              {
                comics_no: 'CM0001',
                title: 'ONE PIECE航海王',
                comics_index: '12',
                amount: '$10',
              },
            ]
          },
          {
            comics_order_no: 'CB0002',
            menno: '王小明',
            comics_order_date: '2023-05-04',
            comics_borrow: '未取書',
            mobile: '0988-789-333',
            books: [
              {
                comics_no: 'CM0002',
                title: 'ONE PIECE航海王',
                comics_index: '12',
                amount: '$10',
              },
              {
                comics_no: 'CM0006',
                title: '(日本版漫畫)咒術迴戰',
                comics_index: '',
                amount: '$10',
              },
              {
                comics_no: 'CM0009',
                title: '鬼滅之刃',
                comics_index: '',
                amount: '$10',
              },
            ]
          },
          {
            comics_order_no: 'CB0003',
            menno: '王小明',
            comics_order_date: '2023-05-05',
            comics_borrow: '未取書',
            mobile: '0988-456-123',
            books: [
              {
                comics_no: 'CM0003',
                title: 'ONE PIECE航海王',
                comics_index: '12',
                amount: '$10',
              },
              {
                comics_no: 'CM0014',
                title: '庫洛魔法使 透明牌篇',
                comics_index: '1',
                amount: '$10',
              },
              {
                comics_no: 'CM0019',
                title: '庫洛魔法使 透明牌篇',
                comics_index: '6',
                amount: '$10',
              },
              {
                comics_no: 'CM0020',
                title: '庫洛魔法使 透明牌篇',
                comics_index: '7',
                amount: '$10',
              },
              {
                comics_no: 'CM0013',
                title: '鬼滅之刃12',
                amount: '$10',
              },
            ]
          }
        ],
        filterDataList: [],
        selectedItem: {},
        search: '',
        step: 0,
  
      }
    },
    methods: {
  
      openModal(index) {
        this.showModal = !this.showModal;
        this.selectedItem = this.dataList[index];
        this.step = 2;
      },
      closeModal() {
        this.showModal = false;
        this.step = 1;
      },
      goConfirm() {
        this.showModal = false;
        this.step = 3;
      },
      countTotal() {
        let totalAmount = 0;
        if (this.selectedItem && this.selectedItem.books) {
          for (const book of this.selectedItem.books) {
            const amount = parseInt(book.amount.replace('$', ''), 10);
            if (!isNaN(amount)) {
              totalAmount += amount;
            }
          }
        }
  
        return `$${totalAmount}`;
      },
      searchReserve() {
        if (this.search === '') {
          this.step = 1;
        } else {
          this.filterDataList = this.dataList.filter((item) => {
            this.step = 1;
            return item.mobile.includes(this.search);
          })
        }
      },
      getCheckConfirm() {
        this.step = 1;
      },
      getCloseConfirm() {
        this.step = 2;
      },
  
    },
    computed: {
  
    }
    ,
    mounted() {
  
  
    }
  
  }
  </script>
  
  