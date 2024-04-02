import { sectionThreeData } from "../data/section-three-data.js";
import { creatorData } from "../data/creators-data.js";
import { pricingData } from "../data/pricing-data.js";

const sectionThreeElement = document.querySelector(".js-get-data");
const creatorElement = document.querySelector(".creators");
const pricingElement = document.querySelector(".pricing");

// section three html
let sectionThreeHTML = "";

sectionThreeData.map((data) => {
  sectionThreeHTML += `<li>
    <article>
        <img src="${data.imageLink}">
        <h4>${data.title}</h4>
        <p>${data.paragraph}</p>
    </article>
    </li>`;
});
sectionThreeElement.innerHTML = sectionThreeHTML;

// creator html
let creatorHTML = "";

creatorData.map((data) => {
  creatorHTML += `<li>
    <img src="${data.imagelink}">
    <h5> ${data.name}</h5>
    <p> ${data.title}</p>
</li>`;
});

creatorElement.innerHTML = creatorHTML;

let pricingHTML = "";

pricingData.map((data) => {
  let liElement = "";
  for (const item of data.item) {
    liElement += `<li> ${item} </li>`;
  }

  pricingHTML += `<li class="pricing-details"> 
  <div>
    <p>${data.title}</p>
    <h2> ${data.price}<span>${data.month}</span></h2>
</div>
<p> ${data.paragraph}</p>
<ul>
  ${liElement}
</ul>
<button class="btn"> Choose Plan </button>
</li>`;
});

pricingElement.innerHTML = pricingHTML;
