const inp = document.querySelector("#val");
const butt = document.querySelector("#butt");
const dyna = document.querySelector(".dyna");
const content = document.querySelector(".content");
let val="";

start();
inp.addEventListener('keypress',getValue);
butt.addEventListener('click',getValue2);

// function
function start()
{
    atStart('seoul');
    atStart('beijing');
    atStart('tokyo');
}
function atStart(input)
{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=5f79792f76936335dd8447c07d345181`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        let  temp = parseInt(data.main.temp-273); 
        temp=temp+" *Celsius";


        let weather = data.weather[0].description;
        let country = data.sys.country;
        let windspeed = data.wind.speed+" kms";
        
        let h2 = document.createElement('h2');
        h2.innerHTML=input.toUpperCase()+", "+country+"<i class='fas fa-cloud-sun-rain'></i>";
        const div = document.createElement('div');
        div.classList.add('temp');
        const sp = document.createElement('span');
        sp.innerHTML="<br>"+"<em>Temp: </em> "+temp+"</b><br>"+"<em>weather: </em>"+weather+"<br>"+"<em>WSpeed: </em>"+windspeed;

        div.appendChild(h2);
        div.appendChild(sp);
        content.appendChild(div);

    })
    .catch((err)=>{
        alert("Invalid City Name");
        console.log(err.message);
    })
}
function getValue(e)
{
   if(e.which==13)
   {
       butt.click();
   }
}

function getValue2(e){
    e.preventDefault();

    const input = inp.value;
    getWeather(input);
    inp.value="";
}

function getWeather(input)
{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=5f79792f76936335dd8447c07d345181`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        let  temp = parseInt(data.main.temp-273); 
        temp=temp+" *Celsius";


        let weather = data.weather[0].description;
        let country = data.sys.country;
        let windspeed = data.wind.speed+" kms";
        
        let h2 = document.createElement('h2');
        h2.innerHTML=input.toUpperCase()+", "+country+"<br>"+"<i class='fas fa-cloud-sun-rain'></i>";
        const div = document.createElement('div');
        const sp = document.createElement('span');
        sp.innerHTML="<br>"+"<em>Temp: </em> "+temp+"</b><br>"+"<em>weather: </em>"+weather+"<br>"+"<em>WSpeed: </em>"+windspeed;

        div.appendChild(h2);
        div.appendChild(sp);
        dyna.appendChild(div);

    })
    .catch((err)=>{
        alert("Invalid City Name");
        console.log(err.message);
    })
}