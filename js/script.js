var elBurger = document.querySelector(".burger");
var elHeaderBox = document.querySelector(".header-box");
var elClose = document.querySelector(".close-img")

elBurger.addEventListener('click', function(){elHeaderBox.classList.add('header-show')});

elClose.addEventListener('click', function(){elHeaderBox.classList.remove("header-show")})
