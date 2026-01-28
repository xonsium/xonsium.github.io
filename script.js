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

document.getElementById("year").textContent = new Date().getFullYear();

function updateClock() {
    const now = new Date();

    // Convert to UTC then add 6 hours
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const bdTime = new Date(utc + (6 * 60 * 60 * 1000));

    let hours = bdTime.getHours();
    const minutes = bdTime.getMinutes().toString().padStart(2, "0");
    const seconds = bdTime.getSeconds().toString().padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    document.getElementById("clock").textContent =
        `(UTC +6) ${hours}:${minutes}:${seconds} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();