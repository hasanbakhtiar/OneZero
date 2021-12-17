"use strict";

var root = document.getElementById('root');
var number = 0;

var addOne = function addOne() {
  number++;
  renderApp();
};

var clearOne = function clearOne() {
  if (number > 0) {
    number--;
  }

  renderApp();
};

var renderApp = function renderApp() {
  var temp = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      'color': "red",
      "font-size": "20px"
    }
  }, "Button Counter"), /*#__PURE__*/React.createElement("p", null, number), /*#__PURE__*/React.createElement("button", {
    onClick: clearOne
  }, "-1"), /*#__PURE__*/React.createElement("button", {
    onClick: addOne
  }, "+1"));
  ReactDOM.render(temp, root);
};

renderApp();
