var hiddenHotFood = document.getElementById("hotFoods")
var hiddenColdFood = document.getElementById("coldFoods")
var output = document.getElementById("output")
var mainDiv = document.getElementById("mainDiv")
var logo = document.getElementById("logo")

function getSource(id) {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/" + id + "/information?apiKey=27e23debc10f4f63831d9b64a7285b86"
  });
}

function getRecipeBurger() {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=1&query=burger",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")
      mainDiv.classList.remove("main2")
      mainDiv.classList.add("main3")

      document.getElementById("output").innerHTML =
        "<h2>" + res.results[0].title + "</h2><h3 class='readyIn'>Ready in <span class='minutes'>"
        + res.results[0].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='"
        + res.baseUri + res.results[0].image + "'height='400'/><br>"
        + "<a href='" + res.results[0].sourceUrl + "' target='_blank'> <button class='findRecipeButton'>FIND THE RECIPE HERE</button></a>"
    }
  })
}
function getRecipeWraps() {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=1&query=wrap",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")
      mainDiv.classList.remove("main2")
      mainDiv.classList.add("main3")

      document.getElementById("output").innerHTML =
        "<h2>" + res.results[0].title + "</h2><h3 class='readyIn'>Ready in <span class='minutes'>"
        + res.results[0].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='"
        + res.baseUri + res.results[0].image + "'height='400'/><br>"
        + "<a href='" + res.results[0].sourceUrl + "' target='_blank'> <button class='findRecipeButton'>FIND THE RECIPE HERE</button></a>"
    }
  })
}
function getRecipeSalad() {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=1&query=salad",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")
      mainDiv.classList.remove("main2")
      mainDiv.classList.add("main3")

      document.getElementById("output").innerHTML =
        "<h2>" + res.results[0].title + "</h2><h3 class='readyIn'>Ready in <span class='minutes'>"
        + res.results[0].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='"
        + res.baseUri + res.results[0].image + "'height='400'/><br>"
        + "<a href='" + res.results[0].sourceUrl + "' target='_blank'> <button class='findRecipeButton'>FIND THE RECIPE HERE</button></a>"
    }
  })
}
function getRecipeSandwich() {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=1&query=cold+sandwiches",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")
      mainDiv.classList.remove("main2")
      mainDiv.classList.add("main3")

      document.getElementById("output").innerHTML =
        "<h2>" + res.results[0].title + "</h2><h3 class='readyIn'>Ready in <span class='minutes'>"
        + res.results[0].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='"
        + res.baseUri + res.results[0].image + "'height='400'/><br>"
        + "<a href='" + res.results[0].sourceUrl + "' target='_blank'> <button class='findRecipeButton'>FIND THE RECIPE HERE</button></a>"
    }
  })
}
function getRecipeSoup() {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=1&query=soup",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")
      mainDiv.classList.remove("main2")
      mainDiv.classList.add("main3")

      document.getElementById("output").innerHTML =
        "<h2>" + res.results[0].title + "</h2><h3 class='readyIn'>Ready in <span class='minutes'>"
        + res.results[0].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='"
        + res.baseUri + res.results[0].image + "'height='400'/><br>"
        + "<a href='" + res.results[0].sourceUrl + "' target='_blank'> <button class='findRecipeButton'>FIND THE RECIPE HERE</button></a>"
    }
  })
}
function getRecipeRamen() {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=1&query=ramen",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")
      mainDiv.classList.remove("main")
      mainDiv.classList.add("main2")

      document.getElementById("output").innerHTML =
        "<h2>" + res.results[0].title + "</h2><h3 class='readyIn'>Ready in <span class='minutes'>"
        + res.results[0].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='"
        + res.baseUri + res.results[0].image + "'height='400'/><br>"
        + "<a href='" + res.results[0].sourceUrl + "' target='_blank'> <button class='findRecipeButton'>FIND THE RECIPE HERE</button></a>"
    }
  })
}
function getRecipePasta() {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=1&query=pasta",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")
      mainDiv.classList.remove("main2")
      mainDiv.classList.add("main3")

      "<h2>" + res.results[0].title + "</h2><h3 class='readyIn'>Ready in <span class='minutes'>"
        + res.results[0].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='"
        + res.baseUri + res.results[0].image + "'height='400'/><br>"
        + "<a href='" + res.results[0].sourceUrl + "' target='_blank'> <button class='findRecipeButton'>FIND THE RECIPE HERE</button></a>"
    }
  })
}
function getRecipeChilli() {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=1&query=chilli",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")
      mainDiv.classList.remove("main2")
      mainDiv.classList.add("main3")

      "<h2>" + res.results[0].title + "</h2><h3 class='readyIn'>Ready in <span class='minutes'>"
        + res.results[0].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='"
        + res.baseUri + res.results[0].image + "'height='400'/><br>"
        + "<a href='" + res.results[0].sourceUrl + "' target='_blank'> <button class='findRecipeButton'>FIND THE RECIPE HERE</button></a>"
    }
  })
}

$(document).ready(function () {
  $("#submitZipCode").click(function () {
    var city = document.getElementById("zipCode").value
    var body = document.getElementById("body")
    body.classList.remove("noOverflow");
    if (city != '') {

      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?zip=" + city + "&units=imperial" + "&appid=7cd09e3d8351c4be6584a8a84a5880b7",
        type: "GET",
        dataType: "json",
        success: function (data) {
          console.log(data)
          var widget = show(data);
          $("#show").html(widget);
          document.getElementById("zipCode").value = ""
          mainDiv.classList.remove("main")
          mainDiv.classList.add("main2")
          logo.classList.remove("logo")
          logo.classList.add("logo2")
          var averageWeather = (((data.list[0].main.temp) + (data.list[1].main.temp) + (data.list[2].main.temp) + (data.list[3].main.temp) + (data.list[4].main.temp)) / 5);
          console.log(averageWeather);
        }
      });
    } else {
      $("error").html('Field cannot be empty');
    }
  });
});
function show(data) {
  var averageWeather = (((data.list[0].main.feels_like) + (data.list[8].main.feels_like) + (data.list[16].main.feels_like) + (data.list[32].main.feels_like) + (data.list[39].main.feels_like)) / 5);
  if (Math.trunc(averageWeather) > 60) {
    hiddenHotFood.classList.remove("hidden");
    hiddenHotFood.classList.add("reveal");
  } else {
    hiddenColdFood.classList.remove("hidden");
    hiddenColdFood.classList.add("reveal");
  }
  return '<h4 data-wow-delay=".0s" class="forecast animated fadeInDown Wow">' + data.city.name + '&apos;s Forecast:<center><div class="divider"></div></center></h4>' +
    '<div class="row weatherRow">'
    + '<div class="offset-md-1"></div>'
    + '<div data-wow-delay=".1s" class="weatherColumn animated wow fadeInUp col-md-12 col-lg-2 weatherDivContainer"><div class="weatherDiv"><h3><strong>' + data.list[0].dt_txt.substr(5, 5).replace('-', '/') + "</strong><br></h3>" + '<h3><span class="temperature">' + data.list[0].main.feels_like + '<span class="degrees">°F</span></span></h3><br><h5 class="weatherStatus">' + data.list[0].weather[0].main + '</h5></div></div>'
    + '<div data-wow-delay=".2s" class="weatherColumn animated wow fadeInUp col-md-12 col-lg-2 weatherDivContainer"><div class="weatherDiv"><h3><strong>' + data.list[8].dt_txt.substr(5, 5).replace('-', '/') + "</strong><br></h3>" + '<h3><span class="temperature">' + data.list[8].main.feels_like + '<span class="degrees">°F</span></span></h3><br><h5 class="weatherStatus">' + data.list[8].weather[0].main + '</h5></div></div>'
    + '<div data-wow-delay=".3s" class="weatherColumn animated wow fadeInUp col-md-12 col-lg-2 weatherDivContainer"><div class="weatherDiv"><h3><strong>' + data.list[16].dt_txt.substr(5, 5).replace('-', '/') + "</strong><br></h3>" + '<h3><span class="temperature">' + data.list[16].main.feels_like + '<span class="degrees">°F</span></span></h3><br><h5 class="weatherStatus">' + data.list[16].weather[0].main + '</h5></div></div>'
    + '<div data-wow-delay=".4s" class="weatherColumn animated wow fadeInUp col-md-12 col-lg-2 weatherDivContainer"><div class="weatherDiv"><h3><strong>' + data.list[32].dt_txt.substr(5, 5).replace('-', '/') + "</strong><br></h3>" + '<h3><span class="temperature">' + data.list[32].main.feels_like + '<span class="degrees">°F</span></span></h3><br><h5 class="weatherStatus">' + data.list[32].weather[0].main + '</h5></div></div>'
    + '<div data-wow-delay=".5s" class="weatherColumn animated wow fadeInUp col-md-12 col-lg-2 weatherDivContainer"><div class="weatherDiv"><h3><strong>' + data.list[39].dt_txt.substr(5, 5).replace('-', '/') + "</strong><br></h3>" + '<h3><span class="temperature">' + data.list[39].main.feels_like + '<span class="degrees">°F</span></span></h3><br><h5 class="weatherStatus">' + data.list[39].weather[0].main + '</h5></div></div>'
    + '<div class="offset-md-1"></div>'
    + '</div>'
}