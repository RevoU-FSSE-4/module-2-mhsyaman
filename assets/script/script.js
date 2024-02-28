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

// carousel slide
$(document).ready(function(){
    var slides = $(".carousel-slide");
    var totalSlides = slides.length;
    var currentSlide = 0;
    var slideWidth = $(".features-carousel").width(); // Lebar carousel
    var totalTranslate = 0; // Total pergeseran
    var maxTranslate = -(totalSlides - 3) * slideWidth; // Pergeseran maksimum ke kiri

    // Mengatur lebar slide agar sesuai dengan persyaratan
    slides.css("width", slideWidth / 3);

    // Fungsi untuk menggeser ke slide berikutnya
    function nextSlide() {
        if (currentSlide < totalSlides - 3) {
            totalTranslate -= slideWidth;
            $(".features-carousel").css("transform", "translateX(" + totalTranslate + "px)");
            currentSlide++;

            // Ambil gambar pertama dan pindahkan ke akhir
            var firstSlide = $(".carousel-slide:first-child");
            $(".features-carousel").append(firstSlide.clone());
            firstSlide.remove();
        }
    }

    // Fungsi untuk menggeser ke slide sebelumnya (tidak disertakan dalam contoh ini)
    function prevSlide() {
        // Implementasikan fungsi prevSlide() jika diperlukan
    }

    // Menggeser ke slide berikutnya saat tombol panah kanan ditekan
    $(".next-slide").click(function(){
        nextSlide();
    });

    // Menggeser ke slide sebelumnya saat tombol panah kiri ditekan (tidak disertakan dalam contoh ini)
    $(".prev-slide").click(function(){
        // Implementasikan fungsi prevSlide() jika diperlukan
    });
});



