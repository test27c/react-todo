var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Make a bomb'
        }, {
          id: 2,
          text: 'Clear the backyard'
        },
        {
          id: 3,
          text: 'Do the chores'
        }, {
          id: 4,
          text: 'Playing games'
        }
      ]
    };
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
    var {todos} = this.state;
    // var todosId = todos.length;
    // alert(todosId);
    // this.setState({
    //   todos: todos.push({id: todosId, text: text})
    // })
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;