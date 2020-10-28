var app = new Vue({
  el: '#app',
  data: {
    data: [
      {
        name: '巧呼呼蘇打水',
        price: 30,
        expiryDate: 90
      },
      {
        name: '心驚膽跳羊肉飯',
        price: 65,
        expiryDate: 2
      },
      {
        name: '郭師傅武功麵包',
        price: 32,
        expiryDate: 1
      },
      {
        name: '不太會過期的新鮮牛奶',
        price: 75,
        expiryDate: 600
      },
      {
        name: '金殺 巧粒粒',
        price: 120,
        expiryDate: 200
      }
    ],
    isReverse: false,
    sortActive: 'price'
  },
  // 請在此撰寫 JavaScript
  methods: {
    priceClick: function(){
      this.sortActive == 'price' ? this.isReverse = !this.isReverse : this.isReverse = false;     
      this.sortActive = 'price';
    },
    dateClick: function(){
      this.sortActive == 'date' ? this.isReverse = !this.isReverse : this.isReverse = false;
      this.sortActive = 'date';
    }
  },
  computed: {
    sortArr: function(){
      let vm = this;
      let sort = '';
      let newArr = [];
      let result = [];
      
      !vm.isReverse ? sort = 1 : sort = -1;
      
      if(vm.sortActive == "price"){
        vm.data.forEach(function(item){
          newArr.push(item.price)
        })
        newArr.sort(function(a, b){
          return (a === b ? 0 : a > b ? 1 : -1) * sort;
        })
        newArr.forEach(function(item){
          vm.data.forEach(function(item2){
            if(item == item2.price){
              result.push(item2);
            }
          })
        })  
      } else if(vm.sortActive == "date") {
        vm.data.forEach(function(item){
          newArr.push(item.expiryDate)
        })
        newArr.sort(function(a, b){
          return (a === b ? 0 : a > b ? 1 : -1) * sort;
        })
        newArr.forEach(function(item){
          vm.data.forEach(function(item2){
            if(item == item2.expiryDate){
              result.push(item2);
            }
          })
        })  
      }
      
      return result;
    }
  }
});