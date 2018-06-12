var Counter = React.createClass({
    getInitialState: function() {
        console.log('Ustawiam domyślne wartości dla state');
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
      if (this.state.counter > 0) {
        this.setState({
            counter: this.state.counter - 1
        });
      }
    },
  
    componentWillMount: function() {
      console.log('przed renderowaniem');
    },
  
    componentDidMount: function() {
      console.log('po renderowaniu');
    },

    render: function() {
        console.log('renderuje komponent...');
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.decrement}, '-'),
            React.createElement('button', {onClick: this.increment}, '+')
        );
    }
});
var element = React.createElement('div', {}, 
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter)
);

ReactDOM.render(
  element,
  document.getElementById('app')
);