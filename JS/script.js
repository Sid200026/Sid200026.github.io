var myFullpage = new fullpage('#fullpage', {
    menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',
    sectionsColor: ['#181818', '#4BBFC3', '#7BAABE', '#ccddff'],
    css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,
	controlArrows: true,
	verticalCentered: true,
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},
	sectionSelector: '.section',
	slideSelector: '.slide',
	lazyLoading: true,
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
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