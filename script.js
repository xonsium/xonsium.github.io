// Function to change brackets on hover
function changeBrackets(event) {
    const link = event.target;
    if (event.type === 'mouseenter') {
        link.textContent = link.textContent.replace('[', '>').replace(']', '<');
    } else if (event.type === 'mouseleave') {
        link.textContent = link.textContent.replace('>', '[').replace('<', ']');
    }
}

// Attach event listeners to each link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', changeBrackets);
    link.addEventListener('mouseleave', changeBrackets);
});