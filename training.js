// new Swipe(slider, {
//     speed: 600,
//     auto: 3000,
//     continuous: true
//   })


trainingDiv1();
trainingDiv2();

function trainingDiv1 () {
    var newDiv = document.createElement('div');
    newDiv.style.backgroundImage = 'url(' + '//images.unsplash.com/photo-1441644599508-24ae08965c5c?w=1275' + ')';
    newDiv.innerHTML = '<h1>' + 'the text is placed' + '</h1>' +
                       '<h2>' + 'on layers that are' + '</h2>' +
                       '<h3>' + 'translated on the z-axis' + '</h3>';

    var swipeWrap = document.querySelector('.swipe-wrap');
    swipeWrap.appendChild(newDiv);

    // Update active slide
    updateActiveSlide(newDiv);

}
function trainingDiv2() {
    var newDiv = document.createElement('div');
    newDiv.style.backgroundImage = 'url(' + '//images.unsplash.com/photo-1439792675105-701e6a4ab6f0?w=1275' + ')';
    newDiv.innerHTML = '<h1>' + 'the script' + '</h1>' +
                       '<h2>' + 'does not have to know' + '</h2>' +
                       '<h3>' + 'anything about the layers' + '</h3>';

    var swipeWrap = document.querySelector('.swipe-wrap');
    swipeWrap.appendChild(newDiv);

    // Update active slide
    updateActiveSlide(newDiv);
    
}

document.getElementById('submitBtn').addEventListener('click', function() {
    var bgImageUrl = document.getElementById('backgroundImageURL').value;
    var h1Text = document.getElementById('h1Text').value;
    var h2Text = document.getElementById('h2Text').value;
    var h3Text = document.getElementById('h3Text').value;

    var newDiv = document.createElement('div');
    newDiv.style.backgroundImage = 'url(' + bgImageUrl + ')';
    newDiv.innerHTML = '<h1>' + h1Text + '</h1>' +
                       '<h2>' + h2Text + '</h2>' +
                       '<h3>' + h3Text + '</h3>';

    var swipeWrap = document.querySelector('.swipe-wrap');
    swipeWrap.appendChild(newDiv);

    // Update active slide
    updateActiveSlide(newDiv);
});

function updateActiveSlide(newActiveSlide) {
    var slides = document.querySelectorAll('.swipe-wrap > div');
    slides.forEach(function(slide) {
        slide.classList.remove('active');
    });
    newActiveSlide.classList.add('active');
}

function nextSlide() {
    var slides = document.querySelectorAll('.swipe-wrap > div');
    var activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    var nextIndex = (activeIndex + 1) % slides.length;

    slides[activeIndex].classList.remove('active');
    slides[nextIndex].classList.add('active');
}


setInterval(nextSlide, 3000); // Change slides every 3 seconds

// new Swipe(slider, {
//     speed: 600,
//     auto: 3000,
//     continuous: true
//   })