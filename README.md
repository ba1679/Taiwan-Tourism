# 臺灣觀光旅遊網

Demo: https://ba1679.github.io/Taiwan-Tourism/

## 簡介
以 Vue CLI3 實作專案，串接由臺灣交通部提供之 TDX API 取得**臺灣觀光相關資料**，可用搜尋或下拉選單選擇想查看的縣市資料。

## 使用技術
### 網頁切版:
   * HTML5、CSS3、Scss
   * bootstrap 4 格線系統、元件、utilities使用、客製 bootstrap 變數
### 前端開發&框架:
   * Vue CLI 搭配Webpack建置專案
   * Vue.js + javaScript(ES6)資料處理及渲染
   * Vuex 模組化資料管理、API 資料整理
   * Vue Router 頁面切換
   * jQuery 操作 DOM 元素
   * Vue transition 處理動畫效果
   * web API 自動定位
### 第三方套件運用:
   * Axios 串接 API 更新資料
   * Vue loading overlay 客製 loading page

### 首頁 : 

1. Banner 隨當下時間改變，分為早上、中午、下午、晚上四種版本
2. 搜尋框輸入縣市可直接搜尋想要查詢的縣市資料
3. 點擊黃色定位鈕可直接訂為使用者目前位置並搜尋對應分類資料
4. 下拉選單選擇縣市即顯示資料
![image alt](https://upload.cc/i1/2021/11/21/1vORgf.png)

### 搜尋結果 : 
1. 顯示 景點 / 活動 縣市搜尋結果
2. 點擊結果卡片顯示 modal 詳細資料
![image alt](https://upload.cc/i1/2021/11/21/98vG2b.png)
![image alt](https://upload.cc/i1/2021/11/21/YeLXU8.png)
![image alt](https://upload.cc/i1/2021/11/21/JzwAL3.png)
![image alt](https://upload.cc/i1/2021/11/21/M3thbS.png)

