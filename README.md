# Henbao

index.html為主頁面，index1.html為分頁。

選擇菜單部分圖片實作輪播圖 : 利用javascript和jquery實現2秒自動輪播及設置左右箭頭切換，先將圖片容器設為position:relative及overflow:hidden，內部圖片設為position:absolute，使圖片能夠移動至畫面右方隱藏，當點擊右箭頭時，將原本圖片往左移，右方圖片往畫面中間放，點擊左箭頭時，原圖片右移，左方圖片往畫面中間放，達成左右切換的效果，圖片下方點再與相同索引號圖片配對，當前點設置活躍，最後設置interval兩秒執行一次往右。

前往外送部分 : 使用grid布局，將容器分為5列2欄。點擊預訂外送或零接觸外送時，可切換顯示的網格物件。使用我的位置按鈕利用javascript的geolocation提供用戶位置。前往訂餐連結至index1.html通知用戶訊息。
