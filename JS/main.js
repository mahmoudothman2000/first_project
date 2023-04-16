
let mainLink = document.getElementById( "link" );
let span = document.getElementById( "list" );
let btnScroll = document.getElementById( "scroll" );

window.onscroll = function() {
// console.log(window.scrollY)
// console.log(this.scrollY)
  
  if (window.scrollY >= 600)
  {
    btnScroll.classList.add("show")
  } else
  {
    btnScroll.classList.remove("show")
  }
}



// btnScroll.onclick = function ()
// {
//   window.scrollTo(1000 , 0);
// }

btnScroll.onclick = function ()
{
  window.scrollTo( {
    top: 0,
    behavior: "smooth"
  });
}


// span.onclick = function()
// {
//   mainLink.classList.toggle( "hide" );
// }


span.addEventListener( "click", function ()
{
  mainLink.classList.toggle( "hide" );
} )


// document.addEventListener( "click", function ()
// {
//   span.classList.remove( "rotate" );
//   span.classList.add( "rotate" );
// })























// <!DOCTYPE html>
// <html>
// <head>
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <style>
// body {
//   padding: 25px;
//   background-color: white;
//   color: black;
//   font-size: 25px;
// }

// .dark-mode {
//   background-color: black;
//   color: white;
// }
// </style>
// </head>
// <body>

// <h2>Toggle Dark/Light Mode</h2>
// <p>Click the button to toggle between dark and light mode for this page.</p>

// <button onclick="myFunction()">Toggle dark mode</button>

// <script>
// function myFunction() {
//    var element = document.body;
//    element.classList.toggle("dark-mode");
// }
// </script>

// </body>
// </html>

