document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,  // Duration of animation
        once: true,      // Whether animation should happen only once - while scrolling down
    });
    console.log("Timeline ready with animations!");
});
