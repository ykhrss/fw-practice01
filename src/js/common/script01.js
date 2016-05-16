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

    alert: function (text) {
      window.alert(text);
    },

    alertButtonText: function ($elem) {
     var text = $elem.text();

     this.alert(text);
    }

  };

  $(doc).on('click', '.js-button-jquery', function (e) {
    e.preventDefault();

    LESSON.alertButtonText($(this));
  });

})(window.LESSON = window.LESSON || {});
