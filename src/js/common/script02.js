/*****
 *
 * alerts
 *
 *****------------------------------------------------------------------*/
(function () {
  'use strict';

  // shortcut
  var doc = document;

  /**
   * native js
   *--------------------------------------------------*/
   LESSON.dialogBoxS02 = {

     // 要素のテキストを取得し、アラート表示する
     alertButtonText: function ($clickedItem, e) {
       e.preventDefault();

       window.alert($clickedItem.innerText);
     }

  };

  doc.addEventListener('click', function(e) {
    // click 要素から親要素に遡って処理をする
    for (var $clickedItem = e.target; $clickedItem && $clickedItem !== this;　$clickedItem = $clickedItem.parentNode) {

      // click 要素の親ノードに 特定の class 属性値が存在しているか判定
      if ($clickedItem.parentNode.classList && $clickedItem.parentNode.classList.contains('js-button-native')) {

        // 自信のラベルテキストをアラート表示する
        LESSON.dialogBoxS02.alertButtonText($clickedItem, e);

        // ループをぬける
        break;

      }
    }
  }, false);



})(window.LESSON = window.LESSON || {});
