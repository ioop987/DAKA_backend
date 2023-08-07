<template>
  <div>
    <Form>
      <template v-slot:form_query>
        <div class="col-md-4 d-flex">
          <select
            class="form-select w-20"
            v-model="selectedOption"
            aria-label="Default select example"
          >
            <option value="0" selected>--請選擇--</option>
            <option value="1">使用者</option>
            <option value="2">大廳區</option>
            <option value="3">包廂區</option>
          </select>
          <div class="input-group">
            <input
              type="search"
              class="form-control"
              placeholder="預約輸入請輸入電話"
              aria-describedby="basic-addon1"
              v-model="search"
            />
            <span
              class="input-group-text"
              id="basic-addon1"
              @click.prevent="searchReserve"
            >
              <img src="@/assets/images/search.svg" alt="search" />
            </span>
          </div>
        </div>
      </template>
      <template v-slot:form_table>
        <table class="main_list" v-show="step === 1">
          <tr>
            <th v-for="order in seat_order" :key="order">{{ order }}</th>
          </tr>
          <tr v-for="(item, index) in filterDataList" :key="index">
            <td>{{ stateMap[item.seat_order_state] }}</td>
            <td>{{ item.mname }}</td>
            <td>
              <div v-for="seat in item.seats" :key="seat">
                {{ areaMap[seat.seat_area] }}
                {{ seat.seat_area + "-" + seat.seat_number }}
              </div>
            </td>
            <td>{{ item.seat_order_startdate }}</td>
            <td>{{ item.seat_order_enddate }}</td>
            <td>{{ item.seat_order_time }}</td>
            <td>{{ item.seat_order_sum }}</td>
          </tr>
        </table>
        <div v-if="noResultsMessage" class="alert alert-warning">
          {{ noResultsMessage }}
        </div>
      </template>
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
    return {
      title: "",
      src: "",
      areaMap: {
        A: "大廳電競區",
        B: "大廳一般區",
        C: "包廂單人房",
        D: "包廂雙人房"
      },
      stateMap: {
        1: "預約中",
        2: "已完成",
        3: "已取消"
      },
      showModal: false,
      seat_order: [
        "訂單狀態",
        "會員姓名",
        "使用電腦",
        "開始時間",
        "結束時間",
        "使用總時數",
        "總金額"
      ],
      dataList: [
        {
          seat_order_id: "1",
          seat_order_no: "S0001",
          mem_id: "4",
          mname: "李芳婷",
          mobile: "0912345678",
          seat_order_date: "2023-07-23 10:24:00",
          seat_order_sum: "400",
          seat_order_startdate: "2023-07-24 10:00:00",
          seat_order_enddate: "2023-07-24 15:00:00",
          seat_order_time: "5",
          seat_order_state: "3",
          seat_payment_method: "儲值金扣款",
          seats: [
            {
              seat_id: "1",
              seat_area: "A",
              seat_number: "01"
            },
            {
              seat_id: "2",
              seat_area: "A",
              seat_number: "02"
            }
          ]
        },
        {
          seat_order_id: "2",
          seat_order_no: "S0002",
          mem_id: "4",
          mname: "李芳婷",
          mobile: "0912345678",
          seat_order_date: "2023-07-24 11:56:49",
          seat_order_sum: "540",
          seat_order_startdate: "2023-07-25 16:00:00",
          seat_order_enddate: "2023-07-25 22:00:00",
          seat_order_time: "6",
          seat_order_state: "2",
          seat_payment_method: "儲值金扣款",
          seats: [
            {
              seat_id: "46",
              seat_area: "B",
              seat_number: "16"
            },
            {
              seat_id: "47",
              seat_area: "B",
              seat_number: "17"
            },
            {
              seat_id: "48",
              seat_area: "B",
              seat_number: "18"
            }
          ]
        },
        {
          seat_order_id: "3",
          seat_order_no: "S0003",
          mem_id: "4",
          mname: "李芳婷",
          mobile: "0912345678",
          seat_order_date: "2023-08-01 07:02:05",
          seat_order_sum: "400",
          seat_order_startdate: "2023-08-31 10:00:00",
          seat_order_enddate: "2023-08-31 12:00:00",
          seat_order_time: "2",
          seat_order_state: "1",
          seat_payment_method: "儲值金扣款",
          seats: [
            {
              seat_id: "1",
              seat_area: "A",
              seat_number: "01"
            },
            {
              seat_id: "2",
              seat_area: "A",
              seat_number: "02"
            },
            {
              seat_id: "3",
              seat_area: "B",
              seat_number: "20"
            },
            {
              seat_id: "4",
              seat_area: "B",
              seat_number: "21"
            },
            {
              seat_id: "5",
              seat_area: "C",
              seat_number: "05"
            },
            {
              seat_id: "6",
              seat_area: "C",
              seat_number: "06"
            },
            {
              seat_id: "7",
              seat_area: "D",
              seat_number: "02"
            }
          ]
        },
        {
          seat_order_id: "4",
          seat_order_no: "S0004",
          mem_id: "7",
          mname: "孫維則",
          mobile: "0922333444",
          seat_order_date: "2023-07-24 11:56:49",
          seat_order_sum: "540",
          seat_order_startdate: "2023-07-25 16:00:00",
          seat_order_enddate: "2023-07-25 22:00:00",
          seat_order_time: "6",
          seat_order_state: "2",
          seat_payment_method: "儲值金扣款",
          seats: [
            {
              seat_id: "46",
              seat_area: "B",
              seat_number: "16"
            },
            {
              seat_id: "47",
              seat_area: "B",
              seat_number: "17"
            },
            {
              seat_id: "48",
              seat_area: "B",
              seat_number: "18"
            }
          ]
        }
      ],
      selectedOption: "0",
      noResultsMessage: "",
      filterDataList: [],
      selectedItem: {},
      search: "",
      step: 0
    };
  },
  methods: {
    searchReserve() {
      // 清空之前的搜索结果
      this.filterDataList = [];

      // 根据选择的选项进行不同的查询
      switch (this.selectedOption) {
        case "1": // 使用者
          this.filterDataList = this.dataList.filter((item) =>
            item.mobile.includes(this.search)
          );
          break;

        case "2": // 大廳區
          this.filterDataList = this.dataList.filter((item) => {
            return item.seats.some(
              (seat) =>
                seat.seat_number.includes(this.search) &&
                ["A", "B"].includes(seat.seat_area)
            );
          });
          break;

        case "3": // 包廂區
          this.filterDataList = this.dataList.filter((item) => {
            return item.seats.some(
              (seat) =>
                seat.seat_number.includes(this.search) &&
                ["C", "D"].includes(seat.seat_area)
            );
          });
          break;

        default:
          break;
      }

      // 若查询结果为空
      if (this.filterDataList.length === 0) {
        this.noResultsMessage = "查無此資料，請重新搜尋。";
      } else {
        this.step = 1;
        this.noResultsMessage = "";
      }
    }
  },
  computed: {},
  mounted() {}
};
</script>
