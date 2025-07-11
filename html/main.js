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
 const products = {
    "visiting cards": "html/Products/Visitingcard.html",
 "letter heads": "html/Products/Letterheads.html",
 "envelopes": "html/Products/Envelopes.html",
 "books": "html/Products/Books.html",
 "booklet": "html/Products/Booklet.html",
 "brochure": "html/Products/Brochure.html",
 "certificates": "html/Products/Certificates.html",
 "pocket folders": "html/Products/PocketFolders.html",
 "thank you cards": "html/Products/ThankYouCards.html",
 "label & sticker": "html/Products/LabelSticker.html",
 "pvc sticker": "html/Products/PVCSticker.html",
 "vinyl sticker": "html/Products/VinylSticker.html",
 "flyers": "html/Products/Flyers.html",
 "menu card": "html/Products/MenuCard.html",
 "poster a3": "html/Products/PosterA3.html",
 "tent card": "html/Products/TentCard.html",
 "calendar": "html/Products/Calendar.html",
 "table calendar": "html/Products/TableCalendar.html",
 "packaging box": "html/Products/PackagingBox.html",
 "wedding invitations": "html/Products/WeddingInvitations.html",
 "bill books": "html/Products/BillBooks.html",
 "cash vouchers": "html/Products/CashVouchers.html",
 "challan book": "html/Products/ChallanBook.html",
 "pamphlet b/w": "html/Products/PamphletBW.html",
 "notebooks": "html/Products/Notebooks.html",
 "pen": "html/Products/Pen.html",
 "diary": "html/Products/Diary.html",
 "t-shirt": "html/Products/TShirt.html",
 "caps": "html/Products/Caps.html",
 "corporate gifts": "html/Products/CorporateGifts.html",
 "key rings": "html/Products/KeyRings.html",
 "shippers": "html/Products/Shippers.html",
 "mugs": "html/Products/Mugs.html",
 "lanyards": "html/Products/Lanyards.html",
 "id cards": "html/Products/IDCards.html",
 "carry bags": "html/Products/CarryBags.html",
 "awards": "html/Products/Awards.html",
 "stamps": "html/Products/Stamps.html",
 "tag": "html/Products/Tag.html",
 "flex/banner": "html/Products/FlexBanner.html",
 "canopy": "html/Products/Canopy.html",
 "glass frosted film": "html/Products/GlassFrostedFilm.html",
 "glow sign board": "html/Products/GlowSignBoard.html",
 "one way vision": "html/Products/OneWayVision.html",
 "standy": "html/Products/Standy.html",
 "branding vinyl": "html/Products/BrandingVinyl.html",
 "backdrop": "html/Products/Backdrop.html",
 "sunboard": "html/Products/Sunboard.html",
 "acrylic vinyl board": "html/Products/AcrylicVinylBoard.html",
 "canvas": "html/Products/Canvas.html",
 "name plate": "html/Products/Nameplate.html",
 "clipon": "html/Products/Clipon.html"
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