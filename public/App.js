"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function DisplayFreeSeats(props) {
  var seat = props.updatetable;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, seats.slice(0, 5).map(function (row) {
    return /*#__PURE__*/React.createElement("td", {
      key: row,
      style: seat.includes(row) ? {
        background: 'grey'
      } : {
        background: 'red'
      }
    }, ' ', row, ' ');
  })), /*#__PURE__*/React.createElement("tr", null, seats.slice(5, 10).map(function (row) {
    return /*#__PURE__*/React.createElement("td", {
      key: row,
      style: seat.includes(row) ? {
        background: 'grey'
      } : {
        background: 'red'
      }
    }, ' ', row, ' ');
  })), /*#__PURE__*/React.createElement("tr", null, seats.slice(10, 15).map(function (row) {
    return /*#__PURE__*/React.createElement("td", {
      key: row,
      style: seat.includes(row) ? {
        background: 'grey'
      } : {
        background: 'red'
      }
    }, ' ', row, ' ');
  })), /*#__PURE__*/React.createElement("tr", null, seats.slice(15, 20).map(function (row) {
    return /*#__PURE__*/React.createElement("td", {
      key: row,
      style: seat.includes(row) ? {
        background: 'grey'
      } : {
        background: 'red'
      }
    }, ' ', row, ' ');
  })), /*#__PURE__*/React.createElement("tr", null, seats.slice(20, 25).map(function (row) {
    return /*#__PURE__*/React.createElement("td", {
      key: row,
      style: seat.includes(row) ? {
        background: 'grey'
      } : {
        background: 'red'
      }
    }, ' ', row, ' ');
  })))), /*#__PURE__*/React.createElement("div", null, "Grey: Available "), /*#__PURE__*/React.createElement("div", null, "Red: Seat Taken"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", null, "Total number of seats: 25"), /*#__PURE__*/React.createElement("div", null, "Number of tickets available: ", seat.length), /*#__PURE__*/React.createElement("div", null, "Number of seats taken: ", 25 - seat.length), /*#__PURE__*/React.createElement("div", null, "Seats available: ", seat.map(function (x) {
    return x + ', ';
  })), ";", /*#__PURE__*/React.createElement("div", null, "Seats taken:", ' ', seats.filter(function (x) {
    return !seat.includes(x);
  }).map(function (x) {
    return x + ', ';
  }), ' '));
}

var seats = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];
var initialIssues = [];

function IssueRow(props) {
  var issue = props.issue;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, issue.id), /*#__PURE__*/React.createElement("td", null, issue.Name), /*#__PURE__*/React.createElement("td", null, issue.handphone), /*#__PURE__*/React.createElement("td", null, issue.email), /*#__PURE__*/React.createElement("th", null, issue.seat), /*#__PURE__*/React.createElement("td", null, issue.created.toDateString()));
}

function DisplayTraveller(props) {
  var issueRows = props.issues.map(function (issue) {
    return /*#__PURE__*/React.createElement(IssueRow, {
      key: issue.id,
      issue: issue
    });
  });
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Handphone number"), /*#__PURE__*/React.createElement("th", null, "Email Address"), /*#__PURE__*/React.createElement("th", null, "Seat number"), /*#__PURE__*/React.createElement("th", null, "Date Purchased"))), /*#__PURE__*/React.createElement("tbody", null, issueRows));
}

var AddTraveller = /*#__PURE__*/function (_React$Component) {
  _inherits(AddTraveller, _React$Component);

  var _super = _createSuper(AddTraveller);

  function AddTraveller() {
    var _this;

    _classCallCheck(this, AddTraveller);

    _this = _super.call(this);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddTraveller, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.AddTraveller;

      if (form.Name.value == '' || form.handphone.value == '' || form.email.value == '' || form.seat.value == '') {
        alert('Please fill the required fields');
      } else {
        // seats.remove(form.seat.value)
        var issue = {
          Name: form.Name.value.toUpperCase(),
          handphone: form.handphone.value,
          email: form.email.value,
          seat: form.seat.value
        };
        this.props.createIssue(issue);
        form.Name.value = '';
        form.handphone.value = '';
        form.email.value = '';
        form.seat.value = '1';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "AddTraveller",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "Name",
        placeholder: "Name"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "handphone",
        placeholder: "Handphone number"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "email",
        placeholder: "Email Address"
      }), /*#__PURE__*/React.createElement("select", {
        name: "seat",
        placeholder: "Seat number"
      }, /*#__PURE__*/React.createElement("option", {
        value: "1"
      }, "Seat 1"), /*#__PURE__*/React.createElement("option", {
        value: "2"
      }, "Seat 2"), /*#__PURE__*/React.createElement("option", {
        value: "3"
      }, "Seat 3"), /*#__PURE__*/React.createElement("option", {
        value: "4"
      }, "Seat 4"), /*#__PURE__*/React.createElement("option", {
        value: "5"
      }, "Seat 5"), /*#__PURE__*/React.createElement("option", {
        value: "6"
      }, "Seat 6"), /*#__PURE__*/React.createElement("option", {
        value: "7"
      }, "Seat 7"), /*#__PURE__*/React.createElement("option", {
        value: "8"
      }, "Seat 8"), /*#__PURE__*/React.createElement("option", {
        value: "9"
      }, "Seat 9"), /*#__PURE__*/React.createElement("option", {
        value: "10"
      }, "Seat 10"), /*#__PURE__*/React.createElement("option", {
        value: "11"
      }, "Seat 11"), /*#__PURE__*/React.createElement("option", {
        value: "12"
      }, "Seat 12"), /*#__PURE__*/React.createElement("option", {
        value: "13"
      }, "Seat 13"), /*#__PURE__*/React.createElement("option", {
        value: "14"
      }, "Seat 14"), /*#__PURE__*/React.createElement("option", {
        value: "15"
      }, "Seat 15"), /*#__PURE__*/React.createElement("option", {
        value: "16"
      }, "Seat 16"), /*#__PURE__*/React.createElement("option", {
        value: "17"
      }, "Seat 17"), /*#__PURE__*/React.createElement("option", {
        value: "18"
      }, "Seat 18"), /*#__PURE__*/React.createElement("option", {
        value: "19"
      }, "Seat 19"), /*#__PURE__*/React.createElement("option", {
        value: "20"
      }, "Seat 20"), /*#__PURE__*/React.createElement("option", {
        value: "21"
      }, "Seat 21"), /*#__PURE__*/React.createElement("option", {
        value: "22"
      }, "Seat 22"), /*#__PURE__*/React.createElement("option", {
        value: "23"
      }, "Seat 23"), /*#__PURE__*/React.createElement("option", {
        value: "24"
      }, "Seat 24"), /*#__PURE__*/React.createElement("option", {
        value: "25"
      }, "Seat 25")), /*#__PURE__*/React.createElement("button", null, "Add"));
    }
  }]);

  return AddTraveller;
}(React.Component);

var DeleteTraveller = /*#__PURE__*/function (_React$Component2) {
  _inherits(DeleteTraveller, _React$Component2);

  var _super2 = _createSuper(DeleteTraveller);

  function DeleteTraveller() {
    var _this2;

    _classCallCheck(this, DeleteTraveller);

    _this2 = _super2.call(this);
    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(DeleteTraveller, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.DeleteTraveller;

      if (form.Name.value == '' || form.seat.value == '') {
        alert('Please fill the required fields');
      } else {
        // seats.remove(form.seat.value)
        var issue = {
          Name: form.Name.value.toUpperCase(),
          seat: form.seat.value
        }; // seats = seats.splice([form.seat.value - 1];

        this.props.deleteIssue(issue);
        form.Name.value = '';
        form.seat.value = '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "DeleteTraveller",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "Name",
        placeholder: "Enter Name"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "seat",
        placeholder: "Enter Seat Number"
      }), /*#__PURE__*/React.createElement("button", null, "Delete Reservation"));
    }
  }]);

  return DeleteTraveller;
}(React.Component);

var DisplayHomepage = /*#__PURE__*/function (_React$Component3) {
  _inherits(DisplayHomepage, _React$Component3);

  var _super3 = _createSuper(DisplayHomepage);

  function DisplayHomepage() {
    _classCallCheck(this, DisplayHomepage);

    return _super3.apply(this, arguments);
  }

  _createClass(DisplayHomepage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Welcome to Singapore High Speed Rail network"));
    }
  }]);

  return DisplayHomepage;
}(React.Component);

var App = /*#__PURE__*/function (_React$Component4) {
  _inherits(App, _React$Component4);

  var _super4 = _createSuper(App);

  function App() {
    var _this3;

    _classCallCheck(this, App);

    _this3 = _super4.call(this);
    _this3.state = {
      issues: [],
      seat_number: seats,
      currentPath: "4"
    };
    _this3.deleteIssue = _this3.deleteIssue.bind(_assertThisInitialized(_this3));
    _this3.createIssue = _this3.createIssue.bind(_assertThisInitialized(_this3));
    _this3.traveller = _this3.traveller.bind(_assertThisInitialized(_this3));
    _this3.add = _this3.add.bind(_assertThisInitialized(_this3));
    _this3.delete = _this3.delete.bind(_assertThisInitialized(_this3));
    _this3.home = _this3.home.bind(_assertThisInitialized(_this3));
    _this3.free = _this3.free.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        issues: initialIssues
      });
    }
  }, {
    key: "createIssue",
    value: function createIssue(issue) {
      var checkname = [];
      this.state.issues.map(function (x) {
        if (issue.Name == x.Name) {
          checkname.push(issue.Name);
        }
      });

      if (this.state.seat_number.includes(issue.seat) && !checkname.includes(issue.Name)) {
        issue.id = this.state.issues.length + 1;
        issue.created = new Date();
        var newIssueList = this.state.issues.slice();
        var newseat = [];
        this.state.seat_number.map(function (x) {
          if (issue.seat != x) {
            newseat.push(x);
          }
        });
        newIssueList.push(issue);
        this.setState({
          issues: newIssueList
        });
        this.setState({
          seat_number: newseat
        });
        alert('Sucessfully Added');
      } else {
        alert('Duplicated Name or Seat Number. Please choose another seat or Name!');
      }
    }
  }, {
    key: "deleteIssue",
    value: function deleteIssue(issue) {
      if (this.state.seat_number.includes(issue.seat) == false) {
        //  newseat = seats;
        var newIssueList = [];
        var removeList = this.state.seat_number.slice();
        var seatlist = [];
        var a = false;
        this.state.issues.map(function (x) {
          if (x.Name != issue.Name) {
            newIssueList.push(x);
          } else {
            a = true;
          } // alert("got item")

        });
        removeList.push(issue.seat);

        if (a != true) {
          alert('No records found. Please enter the correct name!');
        } else {
          this.setState({
            issues: newIssueList
          });
          this.setState({
            seat_number: removeList.sort(function (x) {
              return parseInt(x);
            })
          });
          alert("Sucessfully Deleted");
        }
      } else {
        alert('No Records found! Please provide correct info');
      }
    }
  }, {
    key: "traveller",
    value: function traveller() {
      this.setState({
        currentPath: "1"
      });
    }
  }, {
    key: "add",
    value: function add() {
      this.setState({
        currentPath: "2"
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.setState({
        currentPath: "3"
      });
    }
  }, {
    key: "home",
    value: function home() {
      this.setState({
        currentPath: "4"
      });
    }
  }, {
    key: "free",
    value: function free() {
      this.setState({
        currentPath: "5"
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Singapore Government High Speed Rail Network"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
        onClick: this.home
      }, "Homepage"), /*#__PURE__*/React.createElement("button", {
        onClick: this.traveller
      }, "Display Traveller"), /*#__PURE__*/React.createElement("button", {
        onClick: this.add
      }, "Add Traveller"), /*#__PURE__*/React.createElement("button", {
        onClick: this.delete
      }, "Delete Traveller"), /*#__PURE__*/React.createElement("button", {
        onClick: this.free
      }, "Display Free seats"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), this.state.currentPath === '1' ? /*#__PURE__*/React.createElement(DisplayTraveller, {
        issues: this.state.issues
      }) : null, this.state.currentPath === '2' ? /*#__PURE__*/React.createElement(AddTraveller, {
        createIssue: this.createIssue
      }) : null, this.state.currentPath === '3' ? /*#__PURE__*/React.createElement(DeleteTraveller, {
        deleteIssue: this.deleteIssue
      }) : null, this.state.currentPath === '4' ? /*#__PURE__*/React.createElement(DisplayHomepage, null) : null, this.state.currentPath === '5' ? /*#__PURE__*/React.createElement(DisplayFreeSeats, {
        updatetable: this.state.seat_number
      }) : null);
    }
  }]);

  return App;
}(React.Component);

var element = /*#__PURE__*/React.createElement(App, null);
ReactDOM.render(element, document.getElementById('contents'));