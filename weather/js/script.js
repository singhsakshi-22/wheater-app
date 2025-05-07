async function w(){
    //window.alert("hello");
    const city=document.querySelector('#search>input').value;
    if(city==""){
        alert("please enter city name");
    }
    else{


 
        const apikey="040fd864e631f65b5f28ed02e1ca3f9c";
       const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
       let res=await fetch(url); 
       //console.log(res);
       let data=await res.json()
       console.log(data)
       temp.innerHTML= Math.round(data.main.temp)+"°C";
       document.getElementById('city').innerHTML=data.name;
      wind.innerHTML=data.wind.speed+"km/h";
      humidity.innerHTML=data.main.humidity+"%";
       
    }
}