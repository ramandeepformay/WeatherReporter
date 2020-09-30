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
  event.preventDefault()

     resultData= await weatherApi(input.value);
     filterData = domManipulation(resultData);
      console.log(filterData)
      
      dataInsert(filterData)
      if(event.key===13){
        resultData= await weatherApi(input.value);
        filterData = domManipulation(resultData);
         console.log(filterData)
         
         dataInsert(filterData)
      }

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
<div class="card" style="width: 300px;">
  <h1 class="card-text">${Math.floor(filterData.temp)}°</h1>
    <img src=${imgSrcIcon} class="card-img-top" alt="...">
    <div class="card-body">
      <h2 class="card-text">${caseLetterConverter(filterData.description)}</h2>
      
      <div class="d-flex justify-content-around">
            <div class="col">
              <p>Feels Like</p>
              <p>${filterData.feelsLike}°</p>
            </div>
            <div class="col-sm">
              <p>Min Temp</p>
              <p>${filterData.minTemp}°</p>
            </div>
            <div class="col-sm">
              <p>Max Temp</p>
              <p>${filterData.maxTemp}°</p>
            </div>
    </div>
    <div class="d-flex justify-content-around">
    
          <div class="col-sm">
          <p>Sunrise</p>
          <p>${timeCoverter(filterData.sunrise)} AM</p>
        </div>
        <div class="col-sm">
          <p>Sunset</p>
          <p>${timeCoverter(filterData.sunset)} PM</p>
        </div>
        
  </div>
  </div>


`
weatherCard.insertAdjacentHTML("afterbegin", htmlData)
}
// imgSrcIcon="http://openweathermap.org/img/w/" + filterData.icon + ".png"

function timeCoverter(unixTime){
  let timeStamp = new Date(unixTime * 1000);
  let hour, min ,sec , time;
  hour = timeStamp.getHours();
  min=timeStamp.getMinutes();
  sec=timeStamp.getSeconds();
  
  if(hour>12){
    hour = hour-12;
    time= `${hour}:${min}:${sec}`;
    return time;
  }
  time= `${hour}:${min}:${sec}`
  console.log(timeStamp);
  return time;
}

function caseLetterConverter(word){
  console.log(word);
    var splitWord =word.split(" ")
     return splitWord
    .map(el=> el[0].toUpperCase() + el.substr(1)).join(" ")
}

// <div class="card" style="width: 18rem;">
  

