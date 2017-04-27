var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoApp = React.createClass({
  getInitialState: function () {
    return {
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
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;