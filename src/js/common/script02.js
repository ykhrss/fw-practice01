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

     // button 要素を取得する
     $buttonElem: doc.getElementsByTagName('button'),

     // button 要素を wrap している要素を取得する
     $buttonWrappingElem: doc.getElementsByTagName('p'),

     init: function () {
       // HTML に button要素が存在していたら `addClickEventButtonElem`を実行する
       if (this.$buttonElem.length > 0) {
         this.addClickEventButtonElem();
       }
     },

     // 子要素に button 要素があるかどうかを確認する
     hasButtonElem: function ($elem) {
       // 要素の class 値を取得
       var classValueDefault = $elem.className,
        classNameWrappingButton = 'js-button-native';

       // class 値に `js-button-native` を含んでいるか、真偽値を返す
       return classValueDefault.indexOf(classNameWrappingButton);
     },

     // button 要素に、自信のラベルテキストをアラートで表示する click イベントを付与する
     addClickEventButtonElem: function () {
       // button 要素を wrap している要素を全て検索する
       for (var i = 0, max = this.$buttonWrappingElem.length; i < max; i++) {

         // 子要素に button 要素が存在している場合、click イベントを登録する
         if (this.hasButtonElem(this.$buttonWrappingElem[i]) > 0) {
           var $button = this.$buttonWrappingElem[i].getElementsByTagName('button')[0];

           $button.addEventListener('click', function (e) {
             e.preventDefault();

             window.alert(this.innerText);
           }, false);
         }
       }
     }

  };

  LESSON.dialogBoxS02.init();

})(window.LESSON = window.LESSON || {});
