// Slider1 //
let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelectorAll('.slide1');
    const totalSlides = slides.length;

    // Move each slide
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    // Calculate next slide index
    currentIndex = (currentIndex + 1) % totalSlides;

    // Reset to first slide without transition after the last slide
    if (currentIndex === 0) {
        setTimeout(() => {
            slides.forEach((slide) => {
                slide.style.transition = 'none';
                slide.style.transform = 'translateX(0)';
            });

            // Restore transition
            setTimeout(() => {
                slides.forEach((slide) => {
                    slide.style.transition = '';
                });
            }, 50);
        }, 1000); // Delay reset to match transition duration
    }
}

// Automatically show the next slide every 3 seconds
setInterval(showNextSlide, 3000);


// //Slider//

let slideIndex = 0;
let slides, slideTrack, nextButton, prevButton, slideWidth, totalSlides;

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    slides = document.querySelectorAll('.slide-track .slide');
    slideTrack = document.querySelector('.slide-track');
    nextButton = document.getElementById('nextBtn');
    prevButton = document.getElementById('prevBtn');
    
    if (slides.length > 0 && slideTrack && nextButton && prevButton) {
        slideWidth = slides[0].getBoundingClientRect().width;
        totalSlides = slides.length;
        
        // Update slide track width to fit all slides
        slideTrack.style.width = `${totalSlides * slideWidth}px`;
        
        // Update slide position
        function updateSlidePosition() {
            const offset = -slideIndex * slideWidth;
            slideTrack.style.transform = `translateX(${offset}px)`;
        }
        
        updateSlidePosition();
        
        nextButton.addEventListener('click', () => {
            if (slideIndex < totalSlides - 5) { // Show 5 slides at a time
                slideIndex++;
                updateSlidePosition();
            }
        });
        
        prevButton.addEventListener('click', () => {
            if (slideIndex > 0) {
                slideIndex--;
                updateSlidePosition();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            slideWidth = slides[0].getBoundingClientRect().width;
            slideTrack.style.width = `${totalSlides * slideWidth}px`;
            updateSlidePosition();
        });
    }
});


 // <!--Search box js-->
 // Detect if we're on index.html or a product page
 const isIndexPage = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');
 const productBasePath = isIndexPage ? 'html/Products/' : '';
 
 const products = {
    "visiting cards": productBasePath + "Visitingcard.html",
 "letter heads": productBasePath + "Letterheads.html",
 "envelopes": productBasePath + "Envelopes.html",
 "books": productBasePath + "Books.html",
 "booklet": productBasePath + "Booklet.html",
 "brochure": productBasePath + "Brochure.html",
 "certificates": productBasePath + "Certificates.html",
 "pocket folders": productBasePath + "PocketFolders.html",
 "thank you cards": productBasePath + "ThankYouCards.html",
 "label & sticker": productBasePath + "LabelSticker.html",
 "pvc sticker": productBasePath + "PVCSticker.html",
 "vinyl sticker": productBasePath + "VinylSticker.html",
 "flyers": productBasePath + "Flyers.html",
 "menu card": productBasePath + "MenuCard.html",
 "poster a3": productBasePath + "PosterA3.html",
 "tent card": productBasePath + "TentCard.html",
 "calendar": productBasePath + "Calendar.html",
 "table calendar": productBasePath + "TableCalendar.html",
 "packaging box": productBasePath + "PackagingBox.html",
 "wedding invitations": productBasePath + "WeddingInvitations.html",
 "bill books": productBasePath + "BillBooks.html",
 "cash vouchers": productBasePath + "CashVouchers.html",
 "challan book": productBasePath + "ChallanBook.html",
 "pamphlet b/w": productBasePath + "PamphletBW.html",
 "notebooks": productBasePath + "Notebooks.html",
 "pen": productBasePath + "Pen.html",
 "diary": productBasePath + "Diary.html",
 "t-shirt": productBasePath + "TShirt.html",
 "caps": productBasePath + "Caps.html",
 "corporate gifts": productBasePath + "CorporateGifts.html",
 "key rings": productBasePath + "KeyRings.html",
 "shippers": productBasePath + "Shippers.html",
 "mugs": productBasePath + "Mugs.html",
 "lanyards": productBasePath + "Lanyards.html",
 "id cards": productBasePath + "IDCards.html",
 "carry bags": productBasePath + "CarryBags.html",
 "awards": productBasePath + "Awards.html",
 "stamps": productBasePath + "Stamps.html",
 "tag": productBasePath + "Tag.html",
 "flex/banner": productBasePath + "FlexBanner.html",
 "canopy": productBasePath + "Canopy.html",
 "glass frosted film": productBasePath + "GlassFrostedFilm.html",
 "glow sign board": productBasePath + "GlowSignBoard.html",
 "one way vision": productBasePath + "OneWayVision.html",
 "standy": productBasePath + "Standy.html",
 "branding vinyl": productBasePath + "BrandingVinyl.html",
 "backdrop": productBasePath + "Backdrop.html",
 "sunboard": productBasePath + "Sunboard.html",
 "acrylic vinyl board": productBasePath + "AcrylicVinylBoard.html",
 "canvas": productBasePath + "Canvas.html",
 "name plate": productBasePath + "Nameplate.html",
 "clipon": productBasePath + "Clipon.html"
 };
 
 document.getElementById('search-icon').addEventListener('click', function() {
     document.querySelector('.search-container').classList.toggle('expanded');
     document.getElementById('search-input').focus();
 });
 
 document.getElementById('search-input').addEventListener('input', function() {
     const query = this.value.toLowerCase();
     const suggestions = document.getElementById('suggestions');
     suggestions.innerHTML = '';
     
     if (query) {
         Object.keys(products).forEach(product => {
             if (product.includes(query)) {
                 const suggestion = document.createElement('div');
                 suggestion.textContent = product;
                 suggestion.addEventListener('click', function() {
                     window.location.href = products[product];
                 });
                 suggestions.appendChild(suggestion);
             }
         });
         suggestions.style.display = 'block';
     } else {
         suggestions.style.display = 'none';
     }
 });
 
 document.getElementById('search-input').addEventListener('keypress', function(e) {
     if (e.key === 'Enter') {
         const query = this.value.toLowerCase();
         const url = products[query];
         
         if (url) {
             window.location.href = url;
         } else {
             alert('Product not found');
         }
     }
 });


// Product page slider functionality
let productSlideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slides img");
    if (slides.length > 0) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        productSlideIndex++;
        if (productSlideIndex > slides.length) {
            productSlideIndex = 1;
        }
        slides[productSlideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
}

function plusSlides(n) {
    let slides = document.querySelectorAll(".slides img");
    if (slides.length > 0) {
        productSlideIndex += n;
        if (productSlideIndex > slides.length) {
            productSlideIndex = 1;
        }
        if (productSlideIndex < 1) {
            productSlideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[productSlideIndex - 1].style.display = "block";
    }
}

// Initialize slider when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize product page slider
    showSlides();
    
    // Add event listeners for slider controls
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    
    if (prevButton) {
        prevButton.addEventListener("click", function () {
            plusSlides(-1);
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener("click", function () {
            plusSlides(1);
        });
    }
});