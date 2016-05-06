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
   * backbone
   *--------------------------------------------------*/
  /*
   * ボタン処理
   */
  // view
  var ButtonBackboneView = Backbone.View.extend({
    el: '.js-button-backbone',

    // 設定
    conf: {
      'text': $('.js-button-backbone').text()
    },

    // イベント設定
    events: {
      'click button': 'click'
    },
    click: function (e) {
      buttonBackboneModel.setAlert(this.conf);
    }
  });
  var view = new ButtonBackboneView();


  // model
  var ButtonBackboneModel = Backbone.Model.extend({

    // alert処理
    setAlert: function (conf) {
      alert(conf.text);
    }
  });
  var buttonBackboneModel = new ButtonBackboneModel();



  /**
   * knockout
   *--------------------------------------------------*/
  /*
   * ボタン処理
   */
  var buttonKnockoutViewModel = {

    // 設定
    conf: {
      text: $('.js-button-knockout').text()
    },

    // イベント設定
    alertMessage: function () {
      this.setAlert(this.conf);
    },

    // alert処理
    setAlert: function (conf) {
      alert(conf.text);
    }

  };
  ko.applyBindings(buttonKnockoutViewModel);



  /**
   * vue
   *--------------------------------------------------*/
  /*
   * ボタン処理
   */
  new Vue({

    // new Vue 設定
    el: '#js-button-vue',

    // 処理
    methods: {

      // イベント設定
      alertMessage: function () {
        var that = this;

        // 設定
        var conf = {
          text: this.$els.label.textContent
        };

        // alert処理
        that.setAlert(conf);
      },

      // alert処理
      setAlert: function (conf) {
        alert(conf.text);
      }
    }
  });



  /**
   * angular
   *--------------------------------------------------*/
  /*
   * ボタン処理
   */
  angular.module('app', [])
    .controller('js-button-angular', function () {
      var that = this;

      // 設定
      that.conf = {
        text: $('.js-button-angular').text()
      };

      // イベント設定
      that.alertMessage = function() {
        that.setAlert(that.conf);
      };

      // alert処理
      that.setAlert = function(conf) {
        alert(conf.text);
      };
    });



  /**
   * react
   * compiled by Babel : https://babeljs.io/repl/
   *--------------------------------------------------*/
  /*
   * ボタン処理
   */
  var ButtonReact = React.createClass({

    // 設定
    conf: {
      text: 'alert ： react'
    },
    
    // イベント設定
    alertMessage: function alertMessage(event) {
      this.setAlert(this.conf);
    },

    // alert処理
    setAlert: function setAlert(conf) {
      alert(conf.text);
    },
    
    // レンダリング
    render: function render() {
      return React.createElement(
        'button',
        { onClick: this.alertMessage },
        this.conf.text
      );
    }
    
  });
  ReactDOM.render(React.createElement(ButtonReact, null), doc.getElementById('js-button-react'));



  /**
   * riot
   *--------------------------------------------------*/
  /*
   * ボタン処理
   */
  riot.tag(
    'button-riot',
    '<p class="button"><button onclick="{alertMessage}">{opts.label}</button></p>',
    function(opts) {
      var that = this;

      // 設定
      that.conf = {
        text: 'alert ： riot'
      };
      
      // イベント設定
      that.alertMessage = function () {
        that.setAlert(that.conf);
      };
      
      // alert処理
      that.setAlert = function (conf) {
        alert(conf.text);
      };
    }
  );
  
  // レンダリング
  riot.mount('button-riot', {
    label: 'alert ： riot'
  });
  
  
})();


