var hiddenHotFood = document.getElementById("hotFoods")
var hiddenColdFood = document.getElementById("coldFoods")
var output = document.getElementById("output")
var mainDiv = document.getElementById("mainDiv")
var logo = document.getElementById("logo")
var errorModal = document.getElementById("errorModal")
var zipCodeInfo = document.getElementById("zipCodeInfo")
var loadingScreen = document.getElementById("loadingScreen")
var weatherDiv = document.getElementById("weatherDiv")
var recipeNumber = (Math.floor(Math.random() * (5 - 1) + 1));

function getSource(id) {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/" + id + "/information?apiKey=27e23debc10f4f63831d9b64a7285b86"
  });
}

function getRecipeBurger() {
  setTimeout(function () {
    loadingScreen.classList.remove("hidden")
  }, 0)
  setTimeout(function () {
    loadingScreen.classList.add("hidden")
  }, 500)
  setTimeout(function(){
    var output = document.getElementById("output");
  output.scrollIntoView();
  },500);
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=10&query=burger",
    success: function (res) {
      output.classList.remove("hidden");
      output.classList.add("reveal")
      document.getElementById("output").innerHTML =
        "<h2>" + res.results[recipeNumber].title + "</h2><h3 class='readyIn'>Ready in <span class='minutes'>"
        + res.results[recipeNumber].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='"
        + res.baseUri + res.results[recipeNumber].image + "'height='400'/><br>"
        + "<a href='" + res.results[recipeNumber].sourceUrl + "' target='_blank'> <button class='findRecipeButton'>FIND THE RECIPE HERE</button></a>"
    }
  })
}
function getRecipeWraps() {
  setTimeout(function () {
    loadingScreen.classList.remove("hidden")
  }, 0)
  setTimeout(function () {
    loadingScreen.classList.add("hidden")
  }, 500)
  setTimeout(function () {
    var output = document.getElementById("output");
    output.scrollIntoView();
  }, 500);
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=10&query=wrap",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")

      document.getElementById("output").innerHTML =
        "<h2>" + res.results[recipeNumber].title + "</h2><h3 class='readyIn'>Ready in <span class='minutes'>"
        + res.results[recipeNumber].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='"
        + res.baseUri + res.results[recipeNumber].image + "'height='400'/><br>"
        + "<a href='" + res.results[recipeNumber].sourceUrl + "' target='_blank'> <button class='findRecipeButton'>FIND THE RECIPE HERE</button></a>"
    }
  })
}
function getRecipeSalad() {
  setTimeout(function () {
    loadingScreen.classList.remove("hidden")
  }, 0)
  setTimeout(function () {
    loadingScreen.classList.add("hidden")
  }, 500)
  setTimeout(function () {
    var output = document.getElementById("output");
    output.scrollIntoView();
  }, 500);
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=10&query=salad",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")

      document.getElementById("output").innerHTML =
        "<h2>" + res.results[recipeNumber].title + "</h2><h3 class='readyIn'>Ready in <span class='minutes'>"
        + res.results[recipeNumber].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='"
        + res.baseUri + res.results[recipeNumber].image + "'height='400'/><br>"
        + "<a href='" + res.results[recipeNumber].sourceUrl + "' target='_blank'> <button class='findRecipeButton'>FIND THE RECIPE HERE</button></a>"
    }
  })
}
function getRecipeSandwich() {
  setTimeout(function () {
    loadingScreen.classList.remove("hidden")
  }, 0)
  setTimeout(function () {
    loadingScreen.classList.add("hidden")
  }, 500)
  setTimeout(function () {
    var output = document.getElementById("output");
    output.scrollIntoView();
  }, 500);
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=10&query=sandwich",
    success: function (res) {
      output.classList.remove("hidden");
      output.classList.add("reveal")
      document.getElementById("output").innerHTML =
        "<h2>" + res.results[recipeNumber].title + "</h2><h3 class='readyIn'>Ready in <span class='minutes'>"
        + res.results[recipeNumber].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='"
        + res.baseUri + res.results[recipeNumber].image + "'height='400'/><br>"
        + "<a href='" + res.results[recipeNumber].sourceUrl + "' target='_blank'> <button class='findRecipeButton'>FIND THE RECIPE HERE</button></a>"
    }
  })
}
function getRecipeSoup() {
  setTimeout(function () {
    loadingScreen.classList.remove("hidden")
  }, 0)
  setTimeout(function () {
    loadingScreen.classList.add("hidden")
  }, 500)
  setTimeout(function () {
    var output = document.getElementById("output");
    output.scrollIntoView();
  }, 500);
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=10&query=soup",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")

      document.getElementById("output").innerHTML =
        "<h2>" + res.results[recipeNumber].title + "</h2><h3 class='readyIn'>Ready in <span class='minutes'>"
        + res.results[recipeNumber].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='"
        + res.baseUri + res.results[recipeNumber].image + "'height='400'/><br>"
        + "<a href='" + res.results[recipeNumber].sourceUrl + "' target='_blank'> <button class='findRecipeButton'>FIND THE RECIPE HERE</button></a>"
    }
  })
}
function getRecipeRamen() {
  setTimeout(function () {
    loadingScreen.classList.remove("hidden")
  }, 0)
  setTimeout(function () {
    loadingScreen.classList.add("hidden")
  }, 500)
  setTimeout(function () {
    var output = document.getElementById("output");
    output.scrollIntoView();
  }, 500);
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=10&query=ramen",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")
      mainDiv.classList.remove("main")
      mainDiv.classList.add("main2")

      document.getElementById("output").innerHTML =
        "<h2>" + res.results[recipeNumber].title + "</h2><h3 class='readyIn'>Ready in <span class='minutes'>"
        + res.results[recipeNumber].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='"
        + res.baseUri + res.results[recipeNumber].image + "'height='400'/><br>"
        + "<a href='" + res.results[recipeNumber].sourceUrl + "' target='_blank'> <button class='findRecipeButton'>FIND THE RECIPE HERE</button></a>"
    }
  })
}
function getRecipePasta() {
  setTimeout(function () {
    loadingScreen.classList.remove("hidden")
  }, 0)
  setTimeout(function () {
    loadingScreen.classList.add("hidden")
  }, 500)
  setTimeout(function () {
    var output = document.getElementById("output");
    output.scrollIntoView();
  }, 500);
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=10&query=pasta",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")
      mainDiv.classList.remove("main")
      mainDiv.classList.add("main2")

      document.getElementById("output").innerHTML =
        "<h2>" + res.results[recipeNumber].title + "</h2><h3 class='readyIn'>Ready in <span class='minutes'>"
        + res.results[recipeNumber].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='"
        + res.baseUri + res.results[recipeNumber].image + "'height='400'/><br>"
        + "<a href='" + res.results[recipeNumber].sourceUrl + "' target='_blank'> <button class='findRecipeButton'>FIND THE RECIPE HERE</button></a>"
    }
  })
}
function getRecipeChilli() {
  setTimeout(function () {
    loadingScreen.classList.remove("hidden")
  }, 0)
  setTimeout(function () {
    loadingScreen.classList.add("hidden")
  }, 500)
  setTimeout(function () {
    var output = document.getElementById("output");
    output.scrollIntoView();
  }, 500);
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=10&query=chili",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")
      mainDiv.classList.remove("main")
      mainDiv.classList.add("main2")

      document.getElementById("output").innerHTML =
        "<h2>" + res.results[recipeNumber].title + "</h2><h3 class='readyIn'>Ready in <span class='minutes'>"
        + res.results[recipeNumber].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='"
        + res.baseUri + res.results[recipeNumber].image + "'height='400'/><br>"
        + "<a href='" + res.results[recipeNumber].sourceUrl + "' target='_blank'> <button class='findRecipeButton'>FIND THE RECIPE HERE</button></a>"
    }
  })
}

$(document).ready(function () {
  $("#submitZipCode").click(function () {
    $("#submitZipCode").off("click");
    var city = document.getElementById("zipCode").value
    var body = document.getElementById("body")
    body.classList.remove("noOverflow");
    if (city != '') {
      $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?zip=" + city + "&units=imperial" + "&appid=7cd09e3d8351c4be6584a8a84a5880b7",
        type: "GET",
        dataType: "json",
        error:
          function () {
            errorModal.classList.remove("hidden")
            setTimeout(function () {
              errorModal.classList.add("hidden")
            }, 3000)
          },
        success: function (data) {
          zipCodeInfo.classList.add("invisible")
          var widget = show(data);
          $("#show").html(widget);
          document.getElementById("zipCode").value = ""
          mainDiv.classList.remove("main")
          mainDiv.classList.add("main2")
          logo.classList.remove("logo")
          logo.classList.add("logo2")
        }
      });
    } else {
      $("error").html('Field cannot be empty');
      errorModal.classList.remove("hidden")
      setTimeout(function(){
      errorModal.classList.add("hidden")
      },3000);
    }
  });
});
function show(data) {
  setTimeout(function(){
  loadingScreen.classList.remove("hidden")
  },0)
  setTimeout(function () {
    loadingScreen.classList.add("hidden")
  }, 500)

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

    + '<div data-wow-delay=".1s" class="weatherColumn animated fadeInUp col-md-6 col-lg-2 weatherDivContainer"><div id="weatherDiv" class="weatherDiv"><h3><strong>' + data.list[0].dt_txt.substr(5, 5).replace('-', '/') + "</strong><br></h3>" + '<h3><span class="temperature">' + Math.floor(data.list[0].main.feels_like) + '<span class="degrees">°F</span></span></h3><br><h5 class="weatherStatus">' + data.list[0].weather[0].main + '</h5></div></div>'
    + '<div data-wow-delay=".2s" class="weatherColumn animated fadeInUp col-md-6 col-lg-2 weatherDivContainer"><div id="weatherDiv" class="weatherDiv"><h3><strong>' + data.list[8].dt_txt.substr(5, 5).replace('-', '/') + "</strong><br></h3>" + '<h3><span class="temperature">' + Math.floor(data.list[8].main.feels_like) + '<span class="degrees">°F</span></span></h3><br><h5 class="weatherStatus">' + data.list[8].weather[0].main + '</h5></div></div>'
    + '<div data-wow-delay=".3s" class="weatherColumn animated fadeInUp col-md-6 col-lg-2 weatherDivContainer"><div id="weatherDiv" class="weatherDiv"><h3><strong>' + data.list[16].dt_txt.substr(5, 5).replace('-', '/') + "</strong><br></h3>" + '<h3><span class="temperature">' + Math.floor(data.list[16].main.feels_like) + '<span class="degrees">°F</span></span></h3><br><h5 class="weatherStatus">' + data.list[16].weather[0].main + '</h5></div></div>'
    + '<div data-wow-delay=".4s" class="weatherColumn animated fadeInUp col-md-6 col-lg-2 weatherDivContainer"><div id="weatherDiv" class="weatherDiv"><h3><strong>' + data.list[32].dt_txt.substr(5, 5).replace('-', '/') + "</strong><br></h3>" + '<h3><span class="temperature">' + Math.floor(data.list[32].main.feels_like) + '<span class="degrees">°F</span></span></h3><br><h5 class="weatherStatus">' + data.list[32].weather[0].main + '</h5></div></div>'
    + '<div data-wow-delay=".5s" class="weatherColumn animated fadeInUp col-md-6 col-lg-2 weatherDivContainer"><div id="weatherDiv" class="weatherDiv"><h3><strong>' + data.list[39].dt_txt.substr(5, 5).replace('-', '/') + "</strong><br></h3>" + '<h3><span class="temperature">' + Math.floor(data.list[39].main.feels_like) + '<span class="degrees">°F</span></span></h3><br><h5 class="weatherStatus">' + data.list[39].weather[0].main + '</h5></div></div>'
    + '</div>'
}
