let div0 = document.createElement("div");
div0.setAttribute("class", "row row-cols-1 row-cols-md-4 g-5");
document.body.append(div0);
async function getWeatherData(country) {
  await fetch(
    `https://api.weatherapi.com/v1/current.json?key=bb100b15139e4d68936112241231901&q=${country}&aqi=yes`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
async function getData() {
  await fetch("https://restcountries.com/v2/all") //https://openweathermap.org/ link should asking some paid amount so far am using restcountries.api
    .then((response) => response.json())
    .then((data) => {
      data &&
        data.map((e) => {
          let div1 = document.createElement("div");
          div1.setAttribute("class", "col");
          div0.append(div1);
          let div2 = document.createElement("div");
          div2.setAttribute("class", "card h-100 text-center");
          div1.append(div2);
          let div3 = document.createElement("div");
          div3.setAttribute(
            "class",
            "card-header bg-transparent border-success"
          );
          div3.innerHTML = `${e.name}`;
          div2.append(div3);
          let image = document.createElement("img");
          image.setAttribute("src", `${e.flags.png}`);
          image.setAttribute("alt", "");
          image.setAttribute("class", "card-img-top");
          div2.append(image);
          let div4 = document.createElement("div");
          div4.setAttribute("class", "card-body");
          div2.append(div4);
          let h6one = document.createElement("h6");
          h6one.setAttribute("class", "card-title");
          h6one.innerHTML = `Capital : ${e.capital}`;
          div4.append(h6one);
          let h6two = document.createElement("h6");
          h6two.setAttribute("class", "card-text");
          h6two.innerHTML = `Region : ${e.region}`;
          div4.append(h6two);
          let h6four = document.createElement("h6");
          h6four.setAttribute("class", "card-text");
          h6four.innerHTML = `Country code : ${e.alpha3Code}`;
          div4.append(h6four);
          let h6five = document.createElement("h6");
          h6five.setAttribute("class", "card-text");
          h6five.innerHTML = `latitude : ${e.latlng && e.latlng[0]}`;
          div4.append(h6five);
          let h6six = document.createElement("h6");
          h6six.setAttribute("class", "card-text");
          h6six.innerHTML = `longitude : ${e.latlng && e.latlng[1]}`;
          div4.append(h6six);
          let button1 = document.createElement("button");
          button1.setAttribute("type", "button");
          button1.addEventListener("click", () => getWeatherData(e.name));
          button1.setAttribute("class", "btn btn-primary");
          button1.innerHTML = "Click for weather";
          div4.append(button1);
        });
    })
    .catch((err) => console.log(err));
}
getData();
