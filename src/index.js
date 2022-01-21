import App from "./app";
import Calendar from "./components/calendar/calendar"
import days from "./data.json";
import parseHTML from "./helpers/parse-html";

import "./styles/normalize.css";
import "./styles/style.scss";

const tag = '[index]';

function init() {
  const app = App();

  const { pathname } = window.location; 
  let component;
  if (pathname !== "/") {
    console.log(pathname)
    const selectedItem = days.find(f => f.date === pathname.replace(/\//g,''));
    console.log(selectedItem)
    component = parseHTML(`<h1>${selectedItem.label}</h1>`)
  } else {
    component = Calendar(days);
  }
  app.render(component);
}


init();