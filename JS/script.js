var myFullpage = new fullpage('#fullpage', {
	anchors:['intro', 'about', 'projects', 'contact'],
	navigationTooltips: ['Intoduction', 'About Me', 'Projects', 'Contact'],
	css3: true,
	scrollingSpeed: 700,
	// navigation: true,
	// slidesNavigation: true,
	responsiveHeight: 330,
	dragAndMove: false,
	controlArrows: false,
	lazyLoading: true,

	//events
	// onLeave: function(origin, destination, direction){},
	// afterLoad: function(origin, destination, direction){},
	// afterRender: function(){},
	// afterResize: function(width, height){},
	// afterReBuild: function(){},
	// afterResponsive: function(isResponsive){},
	// afterSlideLoad: function(section, origin, destination, direction){},
	// onSlideLeave: function(section, origin, destination, direction){}
});

// var i = 0;
// var txt = 'Hello I\'m Siddharth Singha Roy.';
// var speed = 80;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementsByClassName("typed")[0].innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// i1 = 0;
// var txt1 = 'I am a full stack web developer.';
// var speed2 = 80;

// function typeWriter1() {
//   if (i1 < txt1.length) {
//     document.getElementsByClassName("typed1")[0].innerHTML += txt1.charAt(i1);
//     i1++;
//     setTimeout(typeWriter1, speed2);
//   }
// }
// typeWriter()
// typeWriter1()

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

jQuery('.Count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 6000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});
