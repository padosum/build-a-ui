
export default function Day (props) {
  const {complete: isComplete, date, color, label } = props;
  if (isComplete) {
      return `<a class='day' href='/${date}'>${date}<div class='label' style='background-color:${color}'>${label}</div></a>`
  } else {
      return `<div class='day'>${date}</div>`
  }
}