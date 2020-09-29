const appId = "c78c6fd738c484a18569598b34605f50";
const api = `https://api.openweathermap.org/data/2.5/weather?q=&appid=${appId}`;
const input =document.querySelector(".location");
const button = document.querySelector(".search-button")
const image = document.querySelector(".icons")
let resultData, result, description, temp, feelsLike, minTemp, maxTemp, sunrise, sunset, icon, workData;

//fetch url
async function weatherApi(val){
    const getApi= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${appId}&units=metric`)
     result= await getApi.json()
     console.log(result)
     return result;
 }

//  Add event Listener to get the city name
button.addEventListener("click",async (event)=>{
     resultData=await weatherApi(input.value);
     workData = await domManipulation(resultData);
      console.log(workData)
})

// manipulate the dom
function domManipulation(domData){
    console.log(domData.weather[0].description)
    console.log(domData.main)
    console.log(image)
    image.src="http://openweathermap.org/img/w/" + domData.weather[0].icon + ".png"
    description = domData.weather[0].description;
    icon=domData.weather[0].icon
    temp=domData.main.temp
    feelsLike=domData.main.feels_like
    minTemp=domData.main.temp_min
    maxTemp=domData.main.temp_max
    sunRise=domData.sys.sunrise
    sunSet=domData.sys.sunset
     return [description, temp, feelsLike, minTemp, maxTemp, Sunrise, Sunset, icon]
}





