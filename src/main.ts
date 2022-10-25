import takeOrder from "./lib/main";

import "./style.css";

// get elements
const formEl = document.querySelector<HTMLButtonElement>("form");
const resultsEl = document.querySelector<HTMLDivElement>("#results");

// set up onclick handler for button
function handleSubmit(e: SubmitEvent) {
  e.preventDefault();

  const formTarget = e.target as HTMLFormElement;
  const inputTarget = formTarget[0] as HTMLInputElement;
  const orderValue = inputTarget.value;

  const result = takeOrder(orderValue);

  resultsEl!.innerHTML = result;
}
formEl!.addEventListener("submit", handleSubmit);
