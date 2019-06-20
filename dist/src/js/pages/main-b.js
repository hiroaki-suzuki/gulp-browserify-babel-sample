(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentB = function () {
    function ComponentB() {
        _classCallCheck(this, ComponentB);

        this.x = 'x';
    }

    _createClass(ComponentB, [{
        key: 'show',
        value: function show() {
            console.log('hogeB');
        }
    }]);

    return ComponentB;
}();

exports.default = ComponentB;

},{}],2:[function(require,module,exports){
"use strict";

var _ComponentB = require("../components/ComponentB");

var _ComponentB2 = _interopRequireDefault(_ComponentB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
    var componentB = new _ComponentB2.default();
    componentB.show();
});

},{"../components/ComponentB":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9Db21wb25lbnRCLmpzIiwic3JjL2pzL3BhZ2VzL21haW4tYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBcUIsVTtBQUNqQiwwQkFBYztBQUFBOztBQUNWLGFBQUssQ0FBTCxHQUFTLEdBQVQ7QUFDSDs7OzsrQkFFTTtBQUNILG9CQUFRLEdBQVIsQ0FBWSxPQUFaO0FBQ0g7Ozs7OztrQkFQZ0IsVTs7Ozs7QUNBckI7Ozs7OztBQUVBLEVBQUUsWUFBVztBQUNULFFBQUksYUFBYSxJQUFJLG9CQUFKLEVBQWpCO0FBQ0EsZUFBVyxJQUFYO0FBQ0gsQ0FIRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudEIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnggPSAneCc7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hvZ2VCJyk7XG4gICAgfVxufSIsImltcG9ydCBDb21wb25lbnRCIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbXBvbmVudEJcIjtcblxuJChmdW5jdGlvbigpIHtcbiAgICBsZXQgY29tcG9uZW50QiA9IG5ldyBDb21wb25lbnRCKCk7XG4gICAgY29tcG9uZW50Qi5zaG93KCk7XG59KTsiXX0=
