
// todo reimplement with backend to serve static files on routes and highlight variables on it
// for now just copy the code in component

import './App.css';

function highlight(strings, ...values) {
  return strings.map((string, i) => {
    return (<span key={i}>
      {string}<span className='highlight'>{values[i] || ''}</span>
    </span>);
  });
}

function App() {
  return (
    <div className="App">
      {content}
    </div>
  );
}

const content = highlight`function ${App.name}() {
  return (
    <div className="App">
      {${'content'}}
    </div>
  );
}`;

export default App;
