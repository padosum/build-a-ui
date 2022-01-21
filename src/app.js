const tag = '[app]';

const App = () => {
  const { pathname } = window.location;
  const el = document.getElementById('root');

  return {
    render(component) {
      while (el.hasChildNodes()) {
        el.removeChild(el.lastChild);
      }
      el.appendChild(component);
    }
  }
};

export default App;