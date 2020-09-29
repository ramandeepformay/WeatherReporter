const appId = "c78c6fd738c484a18569598b34605f50";
const api = `https://api.openweathermap.org/data/2.5/weather?q=&appid=${appId}`;
const input =document.querySelector(".location");
const button = document.querySelector(".search-button");
const image = document.querySelector(".icons");
const weatherCard =document.querySelector(".weatherCard");
let resultData, result, description, temp, feelsLike, minTemp, maxTemp, sunrise, sunset, icon, filterData, htmlData,imgSrcIcon;

//fetch url
async function weatherApi(val){
    const getApi= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${appId}&units=metric`)
     result= await getApi.json()
     console.log(result)
     return result;
 }

//  Add event Listener to get the city name
button.addEventListener("click",async (event)=>{
     resultData= await weatherApi(input.value);
     filterData = domManipulation(resultData);
      console.log(filterData)
      
      dataInsert(filterData)
})

// manipulate the dom
function domManipulation(domData){
    console.log(domData.weather[0].description)
    console.log(domData.main)
    console.log(image)

    description = domData.weather[0].description;
    icon=domData.weather[0].icon
    temp=domData.main.temp
    feelsLike=domData.main.feels_like
    minTemp=domData.main.temp_min
    maxTemp=domData.main.temp_max
    sunrise=domData.sys.sunrise
    sunset=domData.sys.sunset
     return {description, temp, feelsLike, minTemp, maxTemp, sunrise, sunset, icon}
}
// data insertion
function dataInsert(cardData){
    console.log(cardData.icon)
    imgSrcIcon="http://openweathermap.org/img/wn/" + filterData.icon + "@4x.png"
    htmlData=`
<div class="card" style="width: 18rem;">
    <img src=${imgSrcIcon} class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div class="d-flex justify-content-around">
        <div class="row">
            <div class="col-sm">
              One of three columns
            </div>
            <div class="col-sm">
              One of three columns
            </div>
            <div class="col-sm">
              One of three columns
            </div>
    </div>
  </div>
    </div>

  </div>


`
weatherCard.insertAdjacentHTML("afterbegin", htmlData)
}
// imgSrcIcon="http://openweathermap.org/img/w/" + filterData.icon + ".png"






// <div class="card" style="width: 18rem;">
  

