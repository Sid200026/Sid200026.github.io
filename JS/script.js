var myFullpage = new fullpage("#fullpage", {
    anchors: ["intro", "about", "projects", "contact"],
    navigationTooltips: ["Intoduction", "About Me", "Projects", "Contact"],
    css3: !0,
    scrollingSpeed: 700,
    responsiveHeight: 330,
    dragAndMove: !1,
    controlArrows: !1,
    lazyLoading: !0
});
jQuery(document).ready(function() {
    jQuery(".skillbar").each(function() {
        jQuery(this).find(".skillbar-bar").animate({
            width: jQuery(this).attr("data-percent")
        }, 6e3)
    })
}), jQuery(".Count").each(function() {
    var t = $(this);
    jQuery({
        Counter: 0
    }).animate({
        Counter: t.text()
    }, {
        duration: 6e3,
        easing: "swing",
        step: function() {
            t.text(Math.ceil(this.Counter))
        }
    })
});