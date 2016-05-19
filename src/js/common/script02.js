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

   LESSON.dialogBox = {

     buttons: doc.getElementsByTagName('button')

  };

  // button 要素に、自信のラベルテキストをアラートで表示する click イベントを付与する
  for (var i = 0, max = LESSON.dialogBox.buttons.length; i < max; i++){
    LESSON.dialogBox.buttons[i].addEventListener('click', function (e) {
      e.preventDefault();

      window.alert(this.innerText);
    }, false);
  }

})(window.LESSON = window.LESSON || {});
