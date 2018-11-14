# Vue出一個童年模型電商
![image](https://github.com/lhikarul/Vue-onlineStore/blob/master/readme/Vue-%E6%A8%A1%E5%9E%8B%E5%B9%BB%E7%87%88.png)

### [Demo](https://lhikarul.github.io/Vue-onlineStore/#/index")

### 簡介
此為Vue.js的前端練習作品

#### 主要功能
 * 前台: 商品展示（分類、單一商品介紹、優惠券）、購物車功能、下單、結帳資訊、管理員登入。
 * 後台: 產品管理（新增/修改/刪除）、訂單管理、優惠券管理。
 
### 主要練習
  * Vue CLI 2
  * Vue Router
  * Vue 元件概念
  * Vue Axios --- 前後台API串接
  * Bootstrap 4 客制版型

***

### 商品列表
  ![image](https://github.com/lhikarul/Vue-onlineStore/blob/master/readme/Demo-2.png)
  
 模型分為3種類型，遊戲王、火影忍者、七龍珠。
  
 串接前台API(取得商品)，將商品的內容渲染至頁面上，此外，API提供的資料還包刮一個pagination的物件，因此，頁數也會自行渲染出來。
 
 點擊商品類別，會渲染出符合類別的商品，這裡使用的是filter函數，將符合類別的商品過濾成一個新的陣列。
 
***

### 購物車(串接購物車API)
  ![image](https://github.com/lhikarul/Vue-onlineStore/blob/master/readme/Demo-3.png)
  
  #### 購物車功能
  * 刪除不想要的商品
  * 自動計算價錢
  * 套用優惠碼(6666)，能夠打5折。
  
