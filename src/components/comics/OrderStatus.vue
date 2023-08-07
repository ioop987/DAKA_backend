<template>
  <div>
    <Form >
      <template v-slot:form_query>
        <div class="col-md-2">
          <select class="form-select" aria-label="Default select example" v-model="selectedStatus" @change="filterDataList">
            <option value="" selected>請選擇</option>
            <option value="預約過期">預約過期</option>
            <option value="未取書">未取書</option>
            <option value="已取書">已取書</option>
            <option value="未歸還">未歸還</option>
            <option value="已歸還">已歸還</option>
            <option value="已取消">已取消</option>
          </select>
        </div>
        <Search @emit-txt= "getSearch" />
        <!-- <div class="col-md-2">
          <div class="input-group">
            <input
              type="search"
              class="form-control"
              placeholder="請輸入手機號碼"
              aria-describedby="basic-addon1"
            />
            <span class="input-group-text" id="basic-addon1">
              <img src="@/assets/images/search.svg" alt="search">
            </span>
          </div>
        </div> -->
      </template>
      <template v-slot:form_table >
        <table class="main_list" v-show="filteredDataList.length > 0">
        <tr>
          <th v-for="column in columns">{{ column }}</th>
        </tr>
        <tr v-for="(item, index) in filteredDataList" :key="index" @click="openModal(index)">
          <td >{{ item.comics_order_no }}</td>
          <td>{{ item.menno }}</td>
          <td>{{ item.mobile }}</td>
          <td>{{ item.comics_order_date }}</td>
          <td>{{ item.comics_borrow_duedate }}</td>
          <td>{{ item.comics_return_date }}</td>
          <td>{{ item.comics_return_duedate }}</td>
          <td>{{ item.comics_order_status}}</td>
        </tr>
      </table>
      <div class="no_answer" v-if="search && filteredDataList.length === 0">
        查無此手機號碼，請重新搜尋！
      </div>
      <!-- 黑底 -->
      <div class="modal-backdrop" v-show="showModal"></div>
      <!-- 彈窗 -->
      <div v-show="showModal" class="com_reserve_modal">
        <div class="modal_title">
          <h5>{{ selectedItem.comics_order_status }}</h5>
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
                  <span class="detail_content">{{ selectedItem.comics_borrow_duedate }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>應還日期</p>
                  <span class="detail_content">{{ selectedItem.comics_return_date }}</span>
                </td>
                <td>
                  <p>歸還日期</p>
                  <span class="detail_content">{{ selectedItem.comics_return_duedate }}</span>
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
          <div class="check_line_show">
            <div class="total_amount_show">
              <tr>
                <p>總計金額</p>
                <span>{{ countTotal() }}</span>
              </tr>
            </div>
          </div>
        </div>
      </div>
      </template>
    </Form>
  </div>
</template>
<script>
import Form from '@/components/Form.vue';
import Search from '@/components/comics/Search.vue';

export default {
  components: {
    Form,Search
  },
  data() {
    return {
      search: '',
      showModal:false,
      selectedStatus: "",
      columns: [
        '訂單編號',
        '姓名',
        '手機',
        '預約日期',
        '取書日期',
        '應還日期',
        '歸還日期',
        '租借狀態'
      ],
      dataList:[
        {
          comics_order_no: 'CB0001',
          menno:'王小明',
          comics_order_date:'2023-05-03',
          comics_borrow_duedate:'2023-05-04',
          comics_return_date:'2023-05-07',
          comics_return_duedate:'',
          comics_order_status: '已取書',
          mobile:'0988000123',
          books: [
          {
            comics_no: 'CM0001',
            title: 'ONE PIECE航海王',
            comics_index:'12',
            amount: '$10',
          },
        ]
        },
        {
          comics_order_no: 'CB0002',
          menno:'王小明',
          comics_order_date:'2023-05-04',
          comics_borrow_duedate:'2023-05-04',
          comics_return_date:'2023-05-07',
          comics_return_duedate:'',
          comics_order_status: '未歸還',
          mobile:'0988000333',
          books: [
          {
            comics_no: 'CM0002',
            title: 'ONE PIECE航海王',
            comics_index:'12',
            amount: '$10',
          },
          {
            comics_no: 'CM0006',
            title: '(日本版漫畫)咒術迴戰',
            comics_index:'',
            amount: '$10',
          },
          {
            comics_no: 'CM0009',
            title: '鬼滅之刃',
            comics_index:'',
            amount: '$10',
          },
        ]
        },
        {
          comics_order_no: 'CB0003',
          menno:'王小明',
          comics_order_date:'2023-05-05',
          comics_borrow_duedate:'2023-05-06',
          comics_return_date:'2023-05-09',
          comics_return_duedate:'2023-05-07',
          comics_order_status: '已歸還',
          mobile:'0988000333',
          books: [
          {
            comics_no: 'CM0003',
            title: 'ONE PIECE航海王',
            comics_index:'12',
            amount: '$10',
          },
          {
            comics_no: 'CM0014',
            title: '庫洛魔法使 透明牌篇',
            comics_index:'1',
            amount: '$10',
          },
          {
            comics_no: 'CM0019',
            title: '庫洛魔法使 透明牌篇',
            comics_index:'6',
            amount: '$10',
          },
          {
            comics_no: 'CM0020',
            title: '庫洛魔法使 透明牌篇',
            comics_index:'7',
            amount: '$10',
          },
          {
            comics_no: 'CM0013',
            title: '鬼滅之刃12',
            amount: '$10',
          },
        ]
        },
        {
          comics_order_no: 'CB0004',
          menno:'王小明',
          comics_order_date:'2023-05-05',
          comics_borrow_duedate:'2023-05-06',
          comics_return_date:'2023-05-09',
          comics_return_duedate:'2023-05-07',
          comics_order_status: '已歸還',
          mobile:'0988000123',
          books: [
          {
            comics_no: 'CM0003',
            title: 'ONE PIECE航海王',
            comics_index:'12',
            amount: '$10',
          },
          {
            comics_no: 'CM0014',
            title: '庫洛魔法使 透明牌篇',
            comics_index:'1',
            amount: '$10',
          },
          {
            comics_no: 'CM0019',
            title: '庫洛魔法使 透明牌篇',
            comics_index:'6',
            amount: '$10',
          },
          {
            comics_no: 'CM0020',
            title: '庫洛魔法使 透明牌篇',
            comics_index:'7',
            amount: '$10',
          }
        ]
        },
        {
          comics_order_no: 'CB0003',
          menno:'王小明',
          comics_order_date:'2023-05-05',
          comics_borrow_duedate:'',
          comics_return_date:'',
          comics_return_duedate:'',
          comics_order_status: '未取書',
          mobile:'0988000123',
          books: [
          {
            comics_no: 'CM0003',
            title: 'ONE PIECE航海王',
            comics_index:'12',
            amount: '$10',
          },
          {
            comics_no: 'CM0020',
            title: '庫洛魔法使 透明牌篇',
            comics_index:'7',
            amount: '$10',
          },
          {
            comics_no: 'CM0013',
            title: '鬼滅之刃',
            comics_index:'12',
            amount: '$10',
          },
        ]
        }
      ],
      selectedItem:{},
      filteredDataList: []

    }
  },
  
  methods: {
    // getSearch(searchMobile) {
    //   this.search = searchMobile;
    //   if (this.search === '') {
    //     this.filteredDataList = this.dataList;
    //   } else {
    //     this.filteredDataList = this.dataList.filter(item => item.mobile.includes(this.search));
    //   }
    // },
    getSearch(searchMobile) {
      this.search = searchMobile;
      this.filterDataList();
    },
    filterDataList() {
      let filteredData = this.dataList;
      const selectedStatusText = this.selectedStatus;

      if (selectedStatusText) {
        filteredData = filteredData.filter(item => item.comics_order_status === selectedStatusText);
      }

      if (this.search) {
        filteredData = filteredData.filter(item => item.mobile.includes(this.search));
      }

      this.filteredDataList = filteredData;
      
    },

    openModal(index) {
      console.log(123);
      this.showModal=!this.showModal;
      this.selectedItem=this.dataList[index];
      console.log(this.selecteditem);
    },
    closeModal(){
      this.showModal=false;
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

  },
  // created() {
  //   this.filterDataList(); 
  // },
}
</script>

