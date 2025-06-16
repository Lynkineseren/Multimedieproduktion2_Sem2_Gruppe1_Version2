
//Hent data med API
const domain ="https://mmd2.jqt-website.com/";
const postsEndpoint = "wp-json/wp/v2/posts";
const getRealImageUrls = "&acf_format=standard";
/*asynkron kode der kan køre på samme tid som resten af js koden, så der ikke skal ventes på at alt data hentes først, inden der læses videre i koden. await gør at der skal vendes på at alt data er hentet før funktionen fortsætter. */
async function getData(){
    const res =await fetch(domain +postsEndpoint);
    /* det hentede data gemmes i datawordpress, dette er også asynkront, så her anvendes await også for at vente på at vi har alt data inden det returenes som JSON */
    const dataWordpress = await res.json();
    /*logger data i consolen så vi kan se den */
    return dataWordpress;
}
getData();




// Fanger elementerne
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".navLinks");

// Opsætter en event listener på vores burger menu, som har en klikfunktion, der toggler imellem at tilføje / fjerne en klasse.
burger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Fanger elementer til dropdown menu for aktiviteter
const aktiviteter = document.querySelector(".aktiviteter");
const aktiviteterDropdown = aktiviteter.querySelector(".dropdown");

// Tjekker om aktiviteter findes – hvis ja, så sætter vi en event listener på, som kun virker, hvis der er mindre end 1400 px på vinduet.
// Vi bruger preventDefault så siden ikke opdateres, og toggler klassen "showDropdown".
if (aktiviteter && aktiviteterDropdown) {
  aktiviteter.addEventListener("click", (e) => {
    if (window.innerWidth <= 1400) {
      aktiviteterDropdown.classList.toggle("showDropdown");
    }
  });
}

// Fanger elementer til dropdown menu for "Om campingpladsen"
const omCampingpladsen = document.querySelector(".omCampingpladsen");
const omCampingDropdown = omCampingpladsen.querySelector(".dropdown");

// Samme funktionalitet som ovenfor
if (omCampingpladsen && omCampingDropdown) {
  omCampingpladsen.addEventListener("click", (e) => {
    if (window.innerWidth <= 1400) {
      omCampingDropdown.classList.toggle("showDropdown");
    }
  });
}




//
//JS Accordion
//
// rammer alle med querySelectorAll med class accordion .forEach loop kører for hver knap/button tilføjes en EventListener der lytter efter klik på button.//
function startAccodion(){
document.querySelectorAll(".accordion").forEach(button => {
    button.addEventListener("click", ()=>{
        //erklære at accodionContent er det næste element ved siden af, her vores indhold under knappen.//
        const accordionContent = button.nextElementSibling;
        // hvis indholdet har class open, så skal den fjernes, da CSS har display: none. vises indholdet ikke
        if(accordionContent.classList.contains("open")){
            accordionContent.classList.remove("open");
            /*fjerner class til knappen også så de runde kanter kommer på igen hvis den er åben */
            button.classList.remove("open");
        //ellers tilføj class open. Dette åbner vores indhold, da class i vores CSS har display: block
        } else {
            accordionContent.classList.add("open");
            /*tilføjer class til knappen også så de runde kanter fjernes når accordion er åben */
            button.classList.add("open");
        }
    });
    });
  }
  startAccodion();




document.addEventListener('DOMContentLoaded', () => {
  const openButtons = document.querySelectorAll('.preview-active'); // Opsætter variable op for at åbne vores modal
  const closeButtons = document.querySelectorAll('.buttonClose'); // Opsætter variable op for at lukke vores modal

  
  openButtons.forEach(btn => { // Laver en forEach for hver knap der skal åbnes.
    btn.addEventListener('click', function (e) {  // Lytter efter et klik.
      e.preventDefault(); // har en prevent default for ikke at hoppe til toppen af siden så vi istedet kan se vinduet for et modal.
      const modalId = this.dataset.modal; // Henter data attributen for "data-modal" inde på HTML cardet, når man klikker på knappen. F.x data-modal="modal-1"
      const modal = document.getElementById(modalId); // Henter vores ID fra vores modal preview inde på HTML'en. F.x ID = "modal-1"
      if (modal) modal.style.display = 'block'; // Hvis der bliver fundet et ID, skal vores preview af ønsket card vises.
    });
  });


  closeButtons.forEach(btn => { // Laver en forEach på hver modal knap 
    btn.addEventListener('click', function () { // Lytter efter klik 
      this.closest('.hytte_preview').style.display = 'none';  // Når man trykker på krydset inde på modalet, vil class .hytte_preview ikke bliver vist. 
    });
  });
});



//API vejr data
/*https://dmigw.govcloud.dk/v2/metObs/collections/observation/items?api-key=INSERT_YOUR_API_KEY_HERE*/
const apiKey = "81ae6f0c68b642d082495934251606";
const domainWeather = "https://api.weatherapi.com/v1/current.json?key=";
const sted = "&q=56.980309,10.300468"
async function getWeather(){
  const res =await fetch(domainWeather + apiKey + sted);
  /* det hentede data gemmes i datawordpress, dette er også asynkront, så her anvendes await også for at vente på at vi har alt data inden det returenes som JSON */
  const weather = await res.json();
  console.log('weather:', weather)
  /*logger data i consolen så vi kan se den */
  return weather;
}
getWeather();

/*https://api.weatherapi.com/v1/current.json?key=81ae6f0c68b642d082495934251606&q=56.980309,10.300468&aqi=no*/