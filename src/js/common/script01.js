/*****
 *
 * alerts
 *
 *****------------------------------------------------------------------*/
(function (LESSON) {
  'use strict';

  // shortcut
  var doc = document;

  /**
   * jquery
   *--------------------------------------------------*/
  LESSON = {

    // アラートを表示する
    alert: function (text) {
      window.alert(text);
    },

    // 要素のテキストを取得し、アラート表示する
    alertButtonText: function ($elem) {
     var text = $elem.text();

     this.alert(text);
    }

  };

  // ボタン click 時に、自信のラベルテキストをアラートで表示する
  $('.js-button-jquery').on('click', 'button', function (e) {
    e.preventDefault();

    LESSON.alertButtonText($(this));
  });

})(window.LESSON = window.LESSON || {});
