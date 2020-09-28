const appId = "c78c6fd738c484a18569598b34605f50";
const api = `https://api.openweathermap.org/data/2.5/weather?q=&appid=${appId}`;
const input =document.querySelector(".location");
const button = document.querySelector(".btn")
let resultData, result;
//fetch url
async function weather(val){
    const getApi= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${appId}`)
     result= await getApi.json()
     return result
 }

//  Add event Listener to get the city name
button.addEventListener("click",async (event)=>{
     resultData=await weather(input.value)
     domManipulation(resultData)
})

function domManipulation(domData){
    console.log(domData)
}





