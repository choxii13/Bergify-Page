import { creatorData } from "../data/creators-data.js";

const creatorElement = document.querySelector(".creators");

export let creatorHTML = "";

creatorData.map((data) => {
  creatorHTML += `<li>
    <img src="${data.imagelink}">
    <h5> ${data.name}</h5>
    <p> ${data.title}</p>
</li>`;
});

creatorElement.innerHTML = creatorHTML;
