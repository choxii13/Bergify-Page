import { faqData } from "../data/FAQ-data.js";
const faqElement = document.querySelector("#FAQ");

export let faqHTML = "";
faqData.map((data) => {
  let contentHTML = "";

  // data within data
  data.map((content) => {
    let para = "";

    //  data within data within data
    content.paragraph.map((paraData) => {
      //  all  data within data within data
      para += `<p>${paraData}</p>`;
    });

    // all data within data
    contentHTML += `<li>
          <h4> ${content.title}</h4>
           ${para}
          </li>`;
  });

  // all data
  faqHTML += `<li>
    <ul> 
    ${contentHTML}
    </ul>
 </li>`;
});

faqElement.innerHTML = faqHTML;
