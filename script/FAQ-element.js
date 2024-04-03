import { faqData } from "../data/FAQ-data.js";
const faqElement = document.querySelector("#FAQ");

export let faqHTML = "";
// data faqData
// slow?
faqData.map((data) => {
  let contentHTML = "";

  // data within data
  data.map((content) => {
    let para = "";

    //  data within data within data
    content.paragraph.map((paraData) => {
      //  html data within data within data
      para += `<p>${paraData}</p>`;
    });

    // html data within data
    contentHTML += `<li>
          <h4> ${content.title}</h4>
           ${para}
          </li>`;
  });

  // html data
  faqHTML += `<li>
    <ul> 
    ${contentHTML}
    </ul>
 </li>`;
});

faqElement.innerHTML = faqHTML;
