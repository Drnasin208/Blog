
var list = document.getElementsByTagName('ul')[0];                 // Get the <ul> element

// ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement('li');                    // Create element
var newTextLast = document.createTextNode('cream');                // Create text node
newItemLast.appendChild(newTextLast);                              // Add text node to element
list.appendChild(newItemLast);

var blist = document.getElementsByTagName('article')[1];                 // Get the <ul> element

// ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement('h2');                    // Create element
var newTextLast = document.createTextNode('Ovo je drugi h2 elemenat');                // Create text node
newItemLast.appendChild(newTextLast);                              // Add text node to element
blist.insertBefore(newItemLast,blist.firstChild);


$("img").on("click", function() {
     $("img").toggleClass("boja");
   });
     $("li").on("click", function() {
     alert("LISTA is Clicked!");
   });


   $("button").on("click", function() {
     $(this).toggleClass("boja").html("Svidja mi se!!!");
   });



   var listItems = document.querySelectorAll('button');                   // All <li> elements

   // ADD A CLASS OF COOL TO ALL LIST ITEMS
   var i;                                                             // Counter variable
   for (i = 0; i < listItems.length; i++) {                           // Loop through elements
     listItems[i].innerHTML = 'Cool';                                 // Change class to cool
   }

   var heading = document.querySelectorAll('h2')[3];                        // h2 element
   var headingText = heading.textContent;                    // h2 text
   var totalItems = listItems.length;                                 // No. of <li> elements
   var newHeading =  headingText +'<p class="paragraf">Broj button-a je:'+totalItems +'</p>'; // Content
   heading.innerHTML = newHeading;
