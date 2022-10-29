fetch("https://restcountries.com/v3.1/all").then(function(data){
    return data.json();
}).then(function(countryData){
      var div = document.createElement("div");
      div.setAttribute("class","container");
      var row = document.createElement("div");
    row.setAttribute("class","row");
    
    div.append(row);
    

     countryData.forEach(function(country){
        var card = document.createElement("div");
        card.setAttribute("class"," card card-design text-white col-lg-4 col-sm-12");
        row.appendChild(card);

      var cardHeader = document.createElement("div");
      cardHeader.setAttribute("class","card-header bg-dark text-white d-flex justify-content-center");
      cardHeader.innerHTML = country.name.common;
      card.append(cardHeader);

      var cardBody = document.createElement("div");
      cardBody.setAttribute("class","card-body p-3 card-design");
      cardBody.innerHTML = `<img class="mx-auto d-block" src= ${country.flags.png} height = '90' width='200'>`

      if(country.capital){
        var capitalText = document.createElement("p");
      capitalText.setAttribute("class","text-center");
      capitalText.innerText = `Capital : ${country.capital}`;
      cardBody.append(capitalText);
      }

      var population = document.createElement("p");
      population.setAttribute("class","text-center");
      population.innerText = `Population : ${country.population}`;
      cardBody.append(population);
      card.append(cardBody);

      
        var population = document.createElement("p");
        population.setAttribute("class","text-center");
        population.innerText = `Region : ${country.region}`;
        cardBody.append(population);
        card.append(cardBody);

        

      var button = document.createElement("button");
      button.setAttribute("type","button");
      button.setAttribute("class","btn btn-primary btn-sm text-white");
      button.addEventListener("click",function (){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=6e1752da63232595e530480afe988233`)
        .then(function(resp) { return resp.json() })
        .then(function(climate){
            alert(`The temperature of ${country.name.common} is ${climate.main.temp}`);
          
        }).catch(function (error){
          alert("weather report not found");
        })
      })
      button.innerText = "Click for weather";
      card.append(button);

     });
      
      document.body.append(div);
      
}).catch(function(error){
    console.error("error");
})















