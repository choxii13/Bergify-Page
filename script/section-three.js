import { sectionThreeData } from "../data/section-three-data.js";

const sectionThreeElement = document.querySelector(".js-get-data");

export let sectionThreeHTML = "";

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
