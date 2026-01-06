const { useState, useEffect } = React;

function App() {
  return (
    <div style={{padding:'40px', textAlign:'center'}}>
      <h1>G10 Solutions</h1>
      <p>Site organizado em HTML, CSS e JavaScript.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
