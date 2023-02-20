import logo from './logo.svg';
import './App.css';
import "jquery.terminal/css/jquery.terminal.min.css";
const jquery = require("jquery");

function App() {
  jQuery(function($, undefined) {
    $('#terminal').terminal(function(command) {
      if (result === 'yes') {
        this.echo(String('lets goooo'))
    }
        if (command !== '') {
            var result = window.eval(command);
            if (result != undefined) {
                this.echo(String(result));
            }
        }
    }, {
        greetings: 'Javascript Interpreter',
        name: 'js_demo',
        height: 200,
        width: 450,
        prompt: 'wanna make a site?> '
    });
});
  return (
    <div className="App">
      <div id="terminal" className='terminal-div'>

      </div>
    </div>
  );
}

export default App;
