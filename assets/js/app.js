
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
  closeButtons.forEach(btn => { // Laver en forEach på hver modal knap 
    btn.addEventListener('click', function () { // Lytter efter klik 
      this.closest('.picture_expand').style.display = 'none';  // Når man trykker på krydset inde på modalet, vil class .picture_preview ikke bliver vist. 
      });
  });
  
  document.querySelectorAll('.expand-icon').forEach(icon => {
    icon.addEventListener('click', e => {
      const modalId = icon.closest('.preview-active').dataset.modal; 
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
      }
    });
  });
  
  document.querySelectorAll('.buttonClose').forEach(btn => {
    btn.addEventListener('click', e => {
      const modal = e.target.closest('.picture_expand');
      if (modal) {
        modal.classList.remove('active'); 
      }
    });
  });

  document.querySelectorAll('.buttonClose_gallery').forEach(btn => {
    btn.addEventListener('click', e => {
      const modal = btn.closest('.picture_gallery_expand');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });


  document.querySelectorAll('.picture_expand').forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

});


//
//API vejr data
//
// gemme variabler
const apiKey = "81ae6f0c68b642d082495934251606";
const domainWeather = "https://api.weatherapi.com/v1/current.json?key=";
const domainWeatherMarine ="http://api.weatherapi.com/v1/marine.json?key=";
const sted = "&q=56.980309,10.300468"
// henter data
async function getWeather(){
  try{
  const res =await fetch(domainWeather + apiKey + sted);
  /* det hentede data gemmes i weather, dette er også asynkront, så her anvendes await også for at vente på at vi har alt data inden det returenes som JSON */
  const weather = await res.json();
  console.log('weather:', weather)
  return weather;

  } catch (fejlkode){
    console.log("Fejl:", fejlkode)
  }
  /*logger data i consolen så vi kan se den */
}
getWeather();


/*kalder asynkron funktion med awaitm fordi vi ønsker at vente på funktionen getWeather og getWeatherMarine har hentet alt data ned inden vi begynder at kalde funktionen renderWeather og getWeatherMarine, der skal sætte det hele ind i DOM */
async function init() {
    
  const weatherData = await getWeather()
  const weatherMarine = await getWeatherMarine()
  // renderWeather;
  renderWeather(weatherData);
  renderMarine (weatherMarine);
}

init()


//henter vandtemp!
/*der er sat en try ind, "kør denne funktion" og et catch "fang fejlen og håndter den ved at logge den i consolen" */
async function getWeatherMarine(){
  try{
  const res2 =await fetch(domainWeatherMarine + apiKey + sted);
  /* det hentede data gemmes i weather, dette er også asynkront, så her anvendes await også for at vente på at vi har alt data inden det returenes som JSON */
  const weatherMarine = await res2.json();
  console.log('weatherMarine:', weatherMarine)
  return weatherMarine;

  } catch (fejlkode){
    console.log("Fejl:", fejlkode)
 
  /*logger data i consolen så vi kan se den */
}
}
getWeatherMarine();
//indsætter dagens vejrudsigt på forsiden

function renderWeather (weather){
  const tempDay = document.querySelectorAll(".weatherForside");
   tempDay.forEach (tempDay => {

   
   tempDay.innerHTML += `
          <div>
            <img src ="${weather.current.condition.icon}" alt= "vejr ikon">
            <p class="apiDMITemp">${weather.current.temp_c}</p>
          </div>
          `
          
          ;
   });
  }

// indsæt vand temp
  function renderMarine (weatherMarine){
    const tempDay = document.querySelectorAll(".weatherForside");
     tempDay.forEach (tempDay => {
     tempDay.innerHTML += `
            <div>
              <i class="fa-solid fa-water"></i>
              <p class="apiDMITemp">${weatherMarine.forecast.forecastday[0].hour[0].water_temp_c}</p>
            </div>
            `
            
            ;
     });
    }
