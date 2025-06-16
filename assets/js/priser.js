document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const content = document.querySelector(".priserData");
  const loaderText = document.querySelector(".loader-text");
  
  loader.style.display = "block";
  loaderText.style.display = "block";
  content.style.display = "none";
  
  
  async function init() {
    
    const data = await getData()
    // renderActivities(data);
    renderPriser(data);
    loader.style.display = "none";
    loaderText.style.display = "none";
    content.style.display = "block";
  }

init()
/*Indsætter indhold på priser siden */


const sektionPriser = document.querySelector(".priserData")
function renderPriser(data) {

  /*Vi er kun interesset i det første objekt og derfor gemmer vi dette i prisData som data[0], vi rammer her det første. */
  const prisData =data[0];
  /*med innerHTML indsætter vi følgende html ved class ="priserData" */
  sektionPriser.innerHTML += `
  <h1>${prisData.acf.titel}</h1>
  <section class="z_layout">
  <div class="text_section">
  <h2>Hvad er inkluderet hos os?</h2>
  <p>
  ${prisData.acf.sektion_1.beskrivelse}
  <br><br>
  <span class="bold">
  ${prisData.acf.sektion_1.underoverskrift}</span>
  <br>
  ${prisData.acf.sektion_1.beskrivelse_Kopier}
  </p>
  </div>
  <img
  src="${prisData.acf.sektion_1.billede_desktop.url}"
  alt="${prisData.acf.sektion_1.billede_desktop.alt}"
  />
  </section>
  <section class="z_layout">
  <img
  src="${prisData.acf.sektion_2.billede_desktop.url}"
  alt="${prisData.acf.sektion_2.billede_desktop.alt}"
  />
  
  <div class="text_section">
  <h2>${prisData.acf.sektion_2.overskrift}</h2>
  <p>
  <span class="bold">${prisData.acf.sektion_2.underoverskrift}</span>
  ${prisData.acf.sektion_2.beskrivelse}.
  <span class="bold">Inkluderet:</span>
  ${prisData.acf.sektion_2.Inkluderet_indhold}.
  <br>
  <span class="bold">Priser:</span>
  ${prisData.acf.sektion_2.beskrivelse_Kopier}
  <br>
  <span class="bold">Bemærk:</span>
  ${prisData.acf.sektion_2.beskrivelse_Kopier2}.
  </p>
  <a
  href="https://booking.egensestrandcamping.dk/daybooking/step1?cId=383&lc=da&wid=1"
  >${prisData.acf.sektion_2.knap}</a
  >
  </div>
  </section>
  <section class="z_layout">
  <div class="text_section">
  <h2>${prisData.acf.sektion_3.overskrift}</h2>
  <p>
  <span class="bold">Indhold:</span>
  ${prisData.acf.sektion_3.beskrivelse}.
  <br>
  <span class="bold">Pris:</span>
  ${prisData.acf.sektion_3.beskrivelse_Kopier}.
  <br>
  <span class="bold">Inkluderet:</span>
  ${prisData.acf.sektion_3.Inkluderet_indhold}.
  <br>
  <span class="bold">Bemærk:</span>
  ${prisData.acf.sektion_3.beskrivelse_Kopier2}.
  </p>
  </div>
  <img
  src="${prisData.acf.sektion_3.billede_desktop.url}"
  alt="egense strand camping solnedgang over Limfjorden"
  />
  </section>
  <section class="z_layout">
  <img
  src="${prisData.acf.sektion_4.billede_desktop.url}"
  alt="egense strand camping solnedgang over Limfjorden"
  loading="lazy"
  />
  <div class="text_section">
  <h2>${prisData.acf.sektion_4.overskrift}</h2>
  <p>
  <span class="bold">Indhold:</span>
  ${prisData.acf.sektion_4.beskrivelse}.
  <br>
  <span class="bold">Pris:</span>
  ${prisData.acf.sektion_4.beskrivelse_Kopier}.
  <br>
  <span class="bold">Special pris:</span>
  ${prisData.acf.sektion_4.specialpris} <br>
  <span class="bold">Inkluderet:</span>
  ${prisData.acf.sektion_4.beskrivelse_Kopier2}.
  <br>
  <span class="bold">Bemærk:</span>
  ${prisData.acf.sektion_4.beskrivelse_Kopier2}.
  </p>
  <a
  href="https://booking.egensestrandcamping.dk/daybooking/step1?cId=383&lc=da&wid=1"
  >Book ophold</a>
  </div>
  </section>
  
  <section class="z_layout">
  <div class="text_section">
  <h2>${prisData.acf.sektion_5.overskrift}</h2>
  <p>
  ${prisData.acf.sektion_5.beskrivelse}
  </p>
    <a href="https://booking.egensestrandcamping.dk/daybooking/step1?cId=383&lc=da&wid=1">${prisData.acf.sektion_5.knap}</a>
  </div>
  <img src="${prisData.acf.sektion_5.billede_desktop.url}"
  alt="${prisData.acf.sektion_5.billede_desktop.alt}" 
  loading="lazy"
  />

  </section>
  <section>
  
  <button class="accordion">${prisData.acf.Accordion_1.Kolonne_1.overskrift}
  <i class="fa-solid fa-caret-down"></i>
  </button>
  <div class="accordion-content">
  <table>
  <tr>
  <th>${prisData.acf.Accordion_1.Kolonne_1.overskrift}</th>
  <th>${prisData.acf.Accordion_1.Kolonne_1.tekst_1}</th>
  <th>${prisData.acf.Accordion_1.Kolonne_1.tekst_2}</th>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_1.Kolonne_2.overskrift}</td>
  <td>${prisData.acf.Accordion_1.Kolonne_2.tekst_1}</td>
  <td>${prisData.acf.Accordion_1.Kolonne_2.tekst_2}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_1.Kolonne_3.overskrift}</td>
  <td>${prisData.acf.Accordion_1.Kolonne_3.tekst_1}</td>
  <td>${prisData.acf.Accordion_1.Kolonne_3.tekst_2}</td>
  </tr>
  </table>
  </div>
  
  <button class="accordion">${prisData.acf.Accordion_2.Kolonne_1.overskrift}
  <i class="fa-solid fa-caret-down"></i>
  </button>
  <div class="accordion-content">
   <table>
  <tr>
  <th>${prisData.acf.Accordion_2.Kolonne_1.overskrift}</th>
  <th>${prisData.acf.Accordion_2.Kolonne_2.overskrift}</th>
  <th>${prisData.acf.Accordion_2.Kolonne_3.overskrift}</th>

  </tr>

   <tr>

  </tr>
  <tr>
  <td>${prisData.acf.Accordion_2.Kolonne_1.tekst_1}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_2.tekst_1}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_3.tekst_1}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_2.Kolonne_1.tekst_2}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_2.tekst_2}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_3.tekst_2}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_2.Kolonne_1.tekst_3}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_2.tekst_3}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_3.tekst_3}</td>
   </tr>
  <tr>
  <td>${prisData.acf.Accordion_2.Kolonne_1.tekst_4}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_2.tekst_4}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_3.tekst_4}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_2.Kolonne_1.tekst_5}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_2.tekst_5}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_3.tekst_5}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_2.Kolonne_1.tekst_6}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_2.tekst_6}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_3.tekst_6}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_2.Kolonne_1.tekst_7}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_2.tekst_7}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_3.tekst_7}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_2.Kolonne_1.tekst_8}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_2.tekst_8}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_3.tekst_8}</td>
  </tr>
  <tr>
   <td>${prisData.acf.Accordion_2.Kolonne_1.tekst_9}</td>
   <td>${prisData.acf.Accordion_2.Kolonne_2.tekst_9}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_3.tekst_9}</td>
   </tr>
   <tr>
  <td>${prisData.acf.Accordion_2.Kolonne_1.tekst_10}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_2.tekst_10}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_3.tekst_10}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_2.Kolonne_1.tekst_11}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_2.tekst_11}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_3.tekst_11}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_2.Kolonne_1.tekst_12}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_2.tekst_12}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_3.tekst_12}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_2.Kolonne_1.tekst_13}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_2.tekst_13}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_3.tekst_13}</td>
  </tr>
   <tr>
  <td>${prisData.acf.Accordion_2.Kolonne_1.tekst_14}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_2.tekst_14}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_3.tekst_14}</td>
  </tr>
   <tr>
  <td>${prisData.acf.Accordion_2.Kolonne_1.tekst_15}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_2.tekst_15}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_3.tekst_15}</td>
  </tr>
   <tr>
  <td>${prisData.acf.Accordion_2.Kolonne_1.tekst_16}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_2.tekst_16}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_3.tekst_16}</td>
  </tr>
   <tr>
  <td>${prisData.acf.Accordion_2.Kolonne_1.tekst_17}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_2.tekst_17}</td>
  <td>${prisData.acf.Accordion_2.Kolonne_3.tekst_17}</td>
  </tr>

  </table>
  </div>
  
<button class="accordion">${prisData.acf.Accordion_3.Kolonne_1.overskrift}
  <i class="fa-solid fa-caret-down"></i>
  </button>
  <div class="accordion-content">
   <table>
  <tr>
  <th>${prisData.acf.Accordion_3.Kolonne_1.overskrift}</th>
  <th>${prisData.acf.Accordion_3.Kolonne_2.overskrift}</th>
  <th>${prisData.acf.Accordion_3.Kolonne_3.overskrift}</th>

  </tr>

   <tr>

  </tr>
  <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_1}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_1}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_1}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_2}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_2}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_2}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_3}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_3}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_3}</td>
   </tr>
  <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_4}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_4}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_4}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_5}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_5}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_5}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_6}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_6}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_6}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_7}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_7}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_7}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_8}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_8}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_8}</td>
  </tr>
  <tr>
   <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_9}</td>
   <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_9}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_9}</td>
   </tr>
   <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_10}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_10}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_10}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_11}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_11}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_11}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_12}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_12}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_12}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_13}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_13}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_13}</td>
  </tr>
   <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_14}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_14}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_14}</td>
  </tr>
   <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_15}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_15}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_15}</td>
  </tr>
   <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_16}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_16}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_16}</td>
  </tr>
   <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_17}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_17}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_17}</td>
  </tr>
    <tr>
   <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_18}</td>
   <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_18}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_18}</td>
   </tr>
  <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_19}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_19}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_19}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_20}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_20}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_20}</td>
  </tr>
   <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_21}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_21}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_21}</td>
  </tr>
   <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_22}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_22}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_22}</td>
  </tr>
   <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_23}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_23}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_23}</td>
  </tr>
   <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_24}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_24}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_24}</td>
  </tr>
    <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_25}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_25}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_25}</td>
  </tr>
   <tr>
  <td>${prisData.acf.Accordion_3.Kolonne_1.tekst_26}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_2.tekst_26}</td>
  <td>${prisData.acf.Accordion_3.Kolonne_3.tekst_26}</td>
  </tr>

  </table>
  </div>
  
<button class="accordion">${prisData.acf.Accordion_4.Kolonne_1.overskrift}
  <i class="fa-solid fa-caret-down"></i>
  </button>
  <div class="accordion-content">
   <table>
  <tr>
  <th>${prisData.acf.Accordion_3.Kolonne_1.overskrift}</th>
  <th>${prisData.acf.Accordion_3.Kolonne_2.overskrift}</th>
  <th>${prisData.acf.Accordion_3.Kolonne_3.overskrift}</th>

  </tr>

   <tr>

  </tr>
  <tr>
  <td>${prisData.acf.Accordion_4.Kolonne_1.tekst_1}</td>
  <td>${prisData.acf.Accordion_4.Kolonne_2.tekst_1}</td>
  <td>${prisData.acf.Accordion_4.Kolonne_3.tekst_1}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_4.Kolonne_1.tekst_2}</td>
  <td>${prisData.acf.Accordion_4.Kolonne_2.tekst_2}</td>
  <td>${prisData.acf.Accordion_4.Kolonne_3.tekst_2}</td>
  </tr>
  <tr>
  <td>${prisData.acf.Accordion_4.Kolonne_1.tekst_3}</td>
  <td>${prisData.acf.Accordion_4.Kolonne_2.tekst_3}</td>
  <td>${prisData.acf.Accordion_4.Kolonne_3.tekst_3}</td>
   </tr>


  </table>
  </div>
 
  
  </section>
  `
  /*kalder accordion funktionen her får at få den til at virke. da koden ellers kører før data er hentet ned */
  startAccodion();
  
}

});