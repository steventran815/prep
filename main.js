var hiddenHotFood = document.getElementById("hotFoods")
var hiddenColdFood = document.getElementById("coldFoods")
var output = document.getElementById("output")
var sourceLink = document.getElementById("sourceLink")
var findTheLink = document.getElementById("findTheLinkDiv")
var mainDiv = document.getElementById("mainDiv")
var logo = document.getElementById("logo")
var mainDescription = document.getElementById("description")
var zipCodeInfo = document.getElementById("zipCodeInfo")

function getSource(id){
  $.ajax({
    url: "https://api.spoonacular.com/recipes/" + id +"/information?apiKey=27e23debc10f4f63831d9b64a7285b86",
    success: function(res){
      document.getElementById("sourceLink").innerHTML=res.sourceUrl
      document.getElementById("sourceLink").href=res.sourceUrl
    }
  });
}
// function getRecipe(q){
//   $.ajax({
//     url:"https://api.spoonacular.com/recipes/search?apiKey=5ca88977504f47b4a3c8381b76627b26&number=1&query="+q,
//     success: function(res){
//       document.getElementById("output").innerHTML="<h1>"+res.results[0].title+"</h1><br><img src='"+res.baseUri+res.results[0].image+"'width='400'/><br>ready in "+res.results[0].readyInMinutes+" minutes"
//       getSource(res.results[0].id)
//     }
//   })
// }
//HOT FOODS
function getRecipeBurger() {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=1&query=burger",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")

      sourceLink.classList.remove("hidden");
      sourceLink.classList.add("reveal")

      findTheLink.classList.remove("hidden");
      findTheLink.classList.add("reveal")

      mainDiv.classList.remove("main2")
      mainDiv.classList.add("main3")

      document.getElementById("output").innerHTML = "<h1>" + res.results[0].title + "</h1><h3 class='readyIn'>Ready in <span class='minutes'>" + res.results[0].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='" + res.baseUri + res.results[0].image + "'width='400'/>"
      getSource(res.results[0].id)
    }
  })
}
function getRecipeWraps() {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=1&query=wrap",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")

      sourceLink.classList.remove("hidden");
      sourceLink.classList.add("reveal")

      findTheLink.classList.remove("hidden");
      findTheLink.classList.add("reveal")

      mainDiv.classList.remove("main2")
      mainDiv.classList.add("main3")

      document.getElementById("output").innerHTML = "<h1>" + res.results[0].title + "</h1><h3 class='readyIn'>Ready in <span class='minutes'>" + res.results[0].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='" + res.baseUri + res.results[0].image + "'width='400'/>"
      getSource(res.results[0].id)
    }
  })
}
function getRecipeSalad() {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=1&query=salad",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")

      sourceLink.classList.remove("hidden");
      sourceLink.classList.add("reveal")

      findTheLink.classList.remove("hidden");
      findTheLink.classList.add("reveal")

      mainDiv.classList.remove("main2")
      mainDiv.classList.add("main3")

      document.getElementById("output").innerHTML = "<h1>" + res.results[0].title + "</h1><h3 class='readyIn'>Ready in <span class='minutes'>" + res.results[0].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='" + res.baseUri + res.results[0].image + "'width='400'/>"
      getSource(res.results[0].id)
    }
  })
}
function getRecipeSandwich() {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=1&query=cold+sandwiches",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")

      sourceLink.classList.remove("hidden");
      sourceLink.classList.add("reveal")

      findTheLink.classList.remove("hidden");
      findTheLink.classList.add("reveal")

      mainDiv.classList.remove("main2")
      mainDiv.classList.add("main3")

      document.getElementById("output").innerHTML = "<h1>" + res.results[0].title + "</h1><h3 class='readyIn'>Ready in <span class='minutes'>" + res.results[0].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='" + res.baseUri + res.results[0].image + "'width='400'/>"
      getSource(res.results[0].id)
    }
  })
}

//COLD FOODS
function getRecipeSoup() {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=1&query=soup",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")

      sourceLink.classList.remove("hidden");
      sourceLink.classList.add("reveal")

      findTheLink.classList.remove("hidden");
      findTheLink.classList.add("reveal")

      mainDiv.classList.remove("main2")
      mainDiv.classList.add("main3")

      document.getElementById("output").innerHTML = "<h1>" + res.results[0].title + "</h1><h3 class='readyIn'>Ready in <span class='minutes'>" + res.results[0].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='" + res.baseUri + res.results[0].image + "'width='400'/>"
      getSource(res.results[0].id)
    }
  })
}
function getRecipeRamen() {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b8626&number=1&query=ramen",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")

      sourceLink.classList.remove("hidden");
      sourceLink.classList.add("reveal")

      findTheLink.classList.remove("hidden");
      findTheLink.classList.add("reveal")

      mainDiv.classList.remove("main")
      mainDiv.classList.add("main2")

      document.getElementById("output").innerHTML = "<h1>" + res.results[0].title + "</h1><h3 class='readyIn'>Ready in <span class='minutes'>" + res.results[0].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='" + res.baseUri + res.results[0].image + "'width='400'/>"
      getSource(res.results[0].id)
    }
  })
}
function getRecipePasta() {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=1&query=pasta",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")

      sourceLink.classList.remove("hidden");
      sourceLink.classList.add("reveal")

      findTheLink.classList.remove("hidden");
      findTheLink.classList.add("reveal")

      mainDiv.classList.remove("main2")
      mainDiv.classList.add("main3")

      document.getElementById("output").innerHTML = "<h1>" + res.results[0].title + "</h1><h3 class='readyIn'>Ready in <span class='minutes'>" + res.results[0].readyInMinutes + "</span> minutes</h3><img id='recipeImage' src='" + res.baseUri + res.results[0].image + "'width='400'/>"
      getSource(res.results[0].id)
    }
  })
}
function getRecipeChilli() {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=27e23debc10f4f63831d9b64a7285b86&number=1&query=chilli",
    success: function (res) {

      output.classList.remove("hidden");
      output.classList.add("reveal")

      sourceLink.classList.remove("hidden");
      sourceLink.classList.add("reveal")

      findTheLink.classList.remove("hidden");
      findTheLink.classList.add("reveal")

      mainDiv.classList.remove("main2")
      mainDiv.classList.add("main3")

      document.getElementById("output").innerHTML = "<h1>" + res.results[0].title + "</h1><h3 class='readyIn'>Ready in <span class='minutes'>" + res.results[0].readyInMinutes + "</span> minutes</h3><img src='" + res.baseUri + res.results[0].image + "'width='400' id='recipeImage'/><br>"
      getSource(res.results[0].id)
    }
  })
}

$(document).ready(function() {
  $("#submitZipCode").click(function(){
    var city = document.getElementById("zipCode").value
    var body =  document.getElementById("body")
    body.classList.remove("noOverflow");
  if (city != ''){

  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?zip=" + city +"&units=imperial"+"&appid=7cd09e3d8351c4be6584a8a84a5880b7",
    type: "GET",
    dataType: "json",
    success: function(data){
      console.log(data)
      var widget = show(data);
      $("#show").html(widget);
      document.getElementById("zipCode").value = ""
      mainDiv.classList.remove("main")
      mainDiv.classList.add("main2")
      logo.classList.remove("logo")
      logo.classList.add("logo2")
      // mainDescription.classList.add("hidden")
      // zipCodeInfo.classList.add("hidden")
      var averageWeather = (((data.list[0].main.temp) + (data.list[1].main.temp) + (data.list[2].main.temp) + (data.list[3].main.temp) + (data.list[4].main.temp))/5);
      console.log(averageWeather);
    }
});
    }else{
      $("error").html('Field cannot be empty');
    }
  });
});
function show(data){
  var d = new Date();
  var n = d.getDate();
  var m = d.getMonth()+1
  var averageWeather = (((data.list[0].main.temp) + (data.list[8].main.temp) + (data.list[16].main.temp) + (data.list[32].main.temp) + (data.list[39].main.temp)) / 5);

  if (Math.trunc(averageWeather) > 60) {
    console.log("IT'S TOO HOT")

    hiddenHotFood.classList.remove("hidden");
    hiddenHotFood.classList.add("reveal");

  } else {
    console.log("IT'S COLD")
    // hiddenObjects.classList.remove("hidden");
    hiddenColdFood.classList.remove("hidden");
    hiddenColdFood.classList.add("reveal");


  }

  return  '<h3 data-wow-delay=".0s" class="forecast animated fadeInDown Wow">Your 5 Day Forecast:<center><div class="divider"></div></center></h3>'+
          '<div class="row">'
          + '<div class="offset-md-1"></div>'
          + '<div data-wow-delay=".1s" class="animated wow fadeInUp weatherDiv col-md-2"><h3><strong>' + m + "/" + n + "</strong><br>" + '<span class="temperature">'+data.list[0].main.temp +'<span class="degrees">°F</span></span></h3></div>'
          + '<div data-wow-delay=".2s" class="animated wow fadeInUp weatherDiv col-md-2"><h3><strong>' + m + "/" + (n + 1) + "</strong><br>" + '<span class="temperature">' +data.list[8].main.temp + '<span class="degrees">°F</span></span></h3></div>'
          + '<div data-wow-delay=".3s" class="animated wow fadeInUp weatherDiv col-md-2"><h3><strong>' + m + "/" + (n + 2) + "</strong><br>" + '<span class="temperature">' +data.list[16].main.temp + '<span class="degrees">°F</span></span></h3></div>'
          + '<div data-wow-delay=".4s" class="animated wow fadeInUp weatherDiv col-md-2"><h3><strong>' + m + "/" + (n + 3) + "</strong><br>" + '<span class="temperature">' +data.list[32].main.temp + '<span class="degrees">°F</span></span></h3></div>'
          + '<div data-wow-delay=".5s" class="animated wow fadeInUp weatherDiv col-md-2"><h3><strong>' + m + "/" + (n + 4) + "</strong><br>" + '<span class="temperature">' +data.list[39].main.temp + '<span class="degrees">°F</span></span></h3></div>'
          + '<div class="offset-md-1"></div>'
        +'</div>'
}
