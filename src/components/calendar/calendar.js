import parseHTML from "../../helpers/parse-html";
import Day from "./day";
import './layout.scss';
import './calendar.scss';
import Logo from "../../images/logo.svg";

export default function Calendar(days) {
  const daysHtml = days.reduce((prev, curr) => prev + Day(curr), '');
  const resultHtml = `
<div class="container">
  <div class="intro">
    <img 
      class="logo" 
      src="${Logo}"
      alt="Build a UI" 
      title="Build a UI" 
    />

    <h1>Build a UI</h1>
    <p>
    I have to
    </p>
    <ul>
      <li class="complete">build a UI...</li>
      <li>build a UI...</li>
      <li>build a UI...</li>
      <li>build a UI...</li>
    </ul>
  </div>
  <div class="calendar">
    <div class="h">Mon</div>
    <div class="h">Tue</div>
    <div class="h">Wed</div>
    <div class="h">Thu</div>
    <div class="h">Fri</div>
    <div class="h">Sat</div>
    <div class="h">Sun</div>
    ${daysHtml}
  </div>  
</div>

`
  return (
    parseHTML(resultHtml)
  )
};