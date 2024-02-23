$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos > 50) {
        $(".about-content").addClass("scrolled");
        $(".about-gambar").addClass("scrolled");
    } else {
        $(".about-content").removeClass("scrolled");
        $(".about-gambar").removeClass("scrolled");
    }
});