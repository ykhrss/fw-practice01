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
    for (var $clickedItem = e.target; $clickedItem && $clickedItem !== this;) {

      // click 要素の親ノードに 特定の class 属性値が存在していたら
      // 自信のラベルテキストをアラート表示する
      if ($clickedItem.parentNode.classList.contains('js-button-native')) {

        LESSON.dialogBoxS02.alertButtonText($clickedItem, e);
        break;
      }
    }
  }, false);



})(window.LESSON = window.LESSON || {});
