$("#my-form").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert("Thank you!");
  });
});
$(document).ready(function(){
	
	// Scrollspy initiation
	$('body').scrollspy({ 
		target: '#scroll-spy',
		offset: 70
	});

	// On render, adjust body padding to ensure last Scroll target can reach top of screen
	var height = $('#howto').innerHeight();
	var windowHeight = $(window).height();
	var navHeight = $('nav.navbar').innerHeight();
	var siblingHeight = $('#howto').nextAll().innerHeight();


	if(height < windowHeight){
		$('body').css("padding-bottom", windowHeight-navHeight-height-siblingHeight + "px");
	}

	// On window resize, adjust body padding to ensure last Scroll target can reach top of screen
	$(window).resize(function(event){
		var height = $('#howto').innerHeight();
		var windowHeight = $(window).height();
		var navHeight = $('nav.navbar').innerHeight();
		var siblingHeight = $('#howto').nextAll().innerHeight();
		
		
		if(height < windowHeight){
			$('body').css("padding-bottom", windowHeight-navHeight-height-siblingHeight + "px");
		}
	});
	
	$('nav.navbar a, .scrollTop').click(function(event){
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash (#)
			var hash = this.hash;
			
			// Ensure no section has relevant class
			$('section').removeClass("focus");

			// Add class to target
			$(hash).addClass("focus");

			// Remove thy class after timeout
			setTimeout(function(){
				$(hash).removeClass("focus");
			}, 2000);			
			
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
			$('html, body').animate({
				scrollTop: $(hash).offset().top - 69
			}, 600, function(){
				
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;				
			});
					
			// Collapse Navbar for mobile view
			$(".navbar-collapse").collapse('hide');			
		}

	});
	$(window).scroll(function(){
		var scrollPos = $('body').scrollTop();
		if(scrollPos > 0){
			$('.navbar').addClass('show-color');
			$('.scrollTop').addClass('show-button');
		} else{
			$('.navbar').removeClass('show-color');
			$('.scrollTop').removeClass('show-button');
		}
		
	});
});
function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 4000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('.page', true);
    setVisible('#loading', false);
  });

$(document).ready(function(){
    $('#watch').click(function(){
        $('#sites').show(500);
    });
});
$(document).ready(function(){
    $('#trailer').click(function(){
        $('#videotr').show(500);
    });
});

 function myFunction() {
    var x=document.getElementById('myInput').value;
            if(x=="joker"){
                location.replace("http://cima4all.ga/joker")            
            }else if(x=="doctor strange"||x=="Doctor Strange"){
                location.replace("http://cima4all.ga/doctor-strange")     
            }else if(x=="king kong"||x=="Kong: Skull Island"||x=="kong: skull island"||x=="kong skull island"){
                location.replace("http://cima4all.ga/king-kong")     
            }else{
                location.replace("http://cima4all.ga/404")     
            }
 }
     /*autocomplete*/
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
var countries = ["joker","king kong","Kong: Skull Island","Doctor Strange","3achoui"];
/*end autocomplete*/
 