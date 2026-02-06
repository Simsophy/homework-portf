const texts = ["Web Developer", "AI & Arduino Enthusiast", "Full Stack Developer"];
let count = 0;
let index = 0;

function typeWriter() {
    // Loop through the texts
    if (count === texts.length) count = 0;
    const currentText = texts[count];
    
    // Add one letter at a time
    const letter = currentText.slice(0, index + 1);
    document.querySelector('#typing-text span').textContent = letter;
    index++;

    // If full text is typed
    if (index === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
            typeWriter();
        }, 1500); // Pause after full text
    } else {
        setTimeout(typeWriter, 200); // Type next letter
    }
}

// Start typing effect
document.addEventListener('DOMContentLoaded', typeWriter);

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
