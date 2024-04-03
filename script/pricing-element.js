import { pricingData } from "../data/pricing-data.js";

const pricingElement = document.querySelector(".pricing");

export let pricingHTML = "";

pricingData.map((data) => {
  let liElement = "";
  for (const item of data.item) {
    liElement += `<li> ${item} </li>`;
  }

  pricingHTML += `<li class="pricing-details"> 
  <div>
    <p>${data.title}</p>
    <h2> ${data.price}<span>/month</span></h2>
</div>
<p> ${data.paragraph}</p>
<ul>
  ${liElement}
</ul>
<button class="btn"> Choose Plan </button>
</li>`;
});

pricingElement.innerHTML = pricingHTML;
