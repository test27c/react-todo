var React = require('react');
var TodoList = require('TodoList');
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
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;