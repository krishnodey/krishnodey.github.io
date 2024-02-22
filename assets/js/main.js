// About Me content is the one by default shown

$('#educationContent').hide();
$('#professionalContent').hide();
$('#publicationsContent').hide();
$('#teachingContent').hide();
$('#projectContent').hide();
$('#skillsContent').hide();
$('#particularContent').hide();
$('#trainingContent').hide();


var currentUrl = window.location.href;
var myArray = currentUrl.split("#");
if (myArray.length >=2) {
	if (myArray[1] != '') {
		//console.log(myArray[1])
		clearActiveLinks();
		$('#' + myArray[1]).show();

		// Hide other contents
		clearActiveDivs();

		// Show current content
		activateDiv('#' + myArray[1]);
	}
}else{
	$('#aboutmeContent').show();
}


/* Template
$('#nameContent').hide();
*/
$('#theme').hide();
$('#lan').hide();

// Hides all the divs in the particular, unless the first one
//$('.particular-clickable').next().hide();
//$('.particular-clickable').next()[0].style.display="block";

$(document).ready(function(){

	// First time, check the theme
	if(localStorage.getItem("theme") === null){
		localStorage.theme = "light";
		if (window.matchMedia('(prefers-color-scheme: dark)').matches)
			localStorage.theme = "dark";
	}
	
	// First time, check the locale
	let userLang = navigator.language || navigator.userLanguage;
	if(localStorage.getItem("lan") === null){
		localStorage.lan = "en";
	}

	// Maybe first time or not, so load the localStorage value
	$('<link>').appendTo('head').attr({
		type: 'text/css', 
		rel: 'stylesheet',
		href: 'assets/css/light.css'
	});
	if (localStorage.theme == "dark") {
		// Handle menu
		$("link[href='assets/css/light.css']").remove();
		$('<link>').appendTo('head').attr({
			type: 'text/css', 
			rel: 'stylesheet',
			href: 'assets/css/dark.css'
		});
		$('#theme').empty().append("<i class='fa-duotone fa-lightbulb-slash'></i>");
	}
	// Done because light is the one by default
	if(localStorage.lan == "es") {
		$('#lan img').attr("src","/assets/img/es_flag.webp");
		$('#lan').addClass("es");
	}
	updateLanguage();

	// Handle 'About Me' content
	$('#aboutme').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#aboutmeContent');
		}

	});

	// Handle 'Education' content
	$('#education').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#educationContent');
		}
	});

	// Handle 'Education' content
	$('#professional').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#professionalContent');
		}
	});


	// Handle 'Publications' content
	$('#publications').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#publicationsContent');
		}
	});

	// Handle 'Teaching' content
	$('#teaching').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#teachingContent');
		}
	});

	// Handle 'Project' content
	$('#project').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#projectContent');
		}
	});
	// Handle 'Skills' content
	$('#skills').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#skillsContent');
		}
	});

	// Handle 'Skills' content
	$('#training').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#trainingContent');
		}
	});



	// Whenever you clic on a blog post, you should be redirected to that post' html
	//$('.clickable').click(function(e) {
	//	window.open($(e.currentTarget)[0].childNodes[1].innerText, '_blank').focus();
	//}); 

	// Whenever you clic on a clases particulares heading, you should toggle
	//$('.particular-clickable').click(function(e) {
	//	var e = $(e.currentTarget)[0].nextElementSibling;
	///	if (e.style.display === "none") {
	//		e.style.display = "block";
	//	}
	//	else {
	//		e.style.display = "none";
	///	}
	//});

	// Copy the citation to the clipboard
	// THIS SHOULD BE THE SAME FOR ALL THE PAPERS
	$(document).on("click", "#citation", function(){
		var text = $(this).parent().parent().next()[0].innerHTML;

		navigator.clipboard.writeText(text);

		toastr.success('Citation copied');
	});

	// Controls the URL; if it has '#blog'
	// then trigger the 'Blog' clic
	// if (((window.location).href).substring(((window.location).href).lastIndexOf('#') + 1) == 'tutorials') {
	// 	$('#tutorials').click();
	// 	$('#tutorialsContent').focus();
	// }

	//if (((window.location).href).substring(((window.location).href).lastIndexOf('#') + 1) == 'clases-particulares') {
		//$('#particular').click();
		//$('#particularContent').focus();
	//}

	// Controls the options menu
	$('#options-toggler').click(function(e) {
		if(!$(e.currentTarget).hasClass('active')) {
			$(e.currentTarget).addClass('active');
			$('#theme').show("fast");
			$('#lan').show("fast");
		}
		else {
			$(e.currentTarget).removeClass('active');
			$('#theme').hide("fast");
			$('#lan').hide("fast");
		}
	})

	// Animates the theme button + functionality
	$('#theme').click(function(e) {
		if(localStorage.theme != "dark"){

			$('#theme').empty().append("<i class='fa-duotone fa-lightbulb-slash'></i>");

			localStorage.theme = "dark"
			
			$("link[href='assets/css/light.css']").remove();
			$('<link>').appendTo('head').attr({
				type: 'text/css', 
				rel: 'stylesheet',
				href: 'assets/css/dark.css'
			});
		}
		else {

			$('#theme').empty().append("<i class='fa-duotone fa-lightbulb'></i>");

			localStorage.theme = "light"
			
			$("link[href='assets/css/dark.css']").remove();
			$('<link>').appendTo('head').attr({
				type: 'text/css', 
				rel: 'stylesheet',
				href: 'assets/css/light.css'
			});
		}
	})

	// Animates the lan button + functionality
	$('#lan').click(function(e) {
		if(!$(e.currentTarget).hasClass('es')){
			$(e.currentTarget).addClass('es');

			$('#lan img').attr("src","/assets/img/es_flag.webp");

			localStorage.lan = "es"
		}
		else {
			$(e.currentTarget).removeClass('es');

			$('#lan img').attr("src","/assets/img/en_flag.webp");

			localStorage.lan = "en"
		}

		updateLanguage();
	})

});

function updateLanguage() {
	let lang = localStorage.lan;
	$(".language *").each(function(){
		$(this).html( $(this).data(lang) );
	});
}

function clearActiveLinks() {
	$('#navbarList .nav-item .nav-link').each(function() {
		$(this).removeClass('active');
	});
}

function clearActiveDivs() {
	$('.container .content .active').each(function() {
		$(this).removeClass('active');
		$(this).hide();
	});
}

function activateLink(e) {
	$(e.target).addClass('active');
	
	// Hide left panel
	//if(e.target.id == "particular")
	//	$('#leftPanel').hide();
	//else
	//	$('#leftPanel').show();
}

function activateDiv(divId) {
	$(divId).addClass('active');
	$(divId).show();

	// Scrolls to the content
	scrollToContent(divId);
}

function scrollToContent(divId) {
	if ($(window).width() < 751) {
		$('html, body').animate({
			scrollTop: $(divId).offset().top
		}, 1);
	}
}
