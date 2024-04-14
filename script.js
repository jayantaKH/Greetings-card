// Array of predefined greetings
const greetings = [
    "Wishing you a joyous Bihu, dear {name}!",
    "May this Bihu bring happiness and prosperity to you, {name}!",
    "Warmest wishes on Bihu, {name}! Enjoy the festivities!",
    "Happy Bihu, {name}! May this year be filled with success and joy!",
    "Sending you heartfelt Bihu greetings, {name}! Have a wonderful celebration!",
    "Wishing you and your family a blessed Bihu, {name}!",
    "Happy Bihu! May the new year bring you peace, love, and prosperity, {name}!",
    "May the spirit of Bihu fill your heart with joy and love, {name}!",
    "On this auspicious occasion of Bihu, I wish you all the best, {name}!",
    "ৰঙালী বিহুৰ হিয়াভৰা শুভেচ্ছা জনাইছো। ৰঙালীৰ দৰেই ৰঙীন হওঁক আপোনাৰ জীৱন।, {name}!"
];

document.getElementById('greetingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var greetingMessage = document.getElementById('greetingMessage');
    
    // Selecting a random greeting from the array
    var randomIndex = Math.floor(Math.random() * greetings.length);
    var randomGreeting = greetings[randomIndex];
    
    // Replacing {name} placeholder with user's name
    var formattedGreeting = randomGreeting.replace("{name}", name);
    
    // Displaying the generated greeting
    greetingMessage.innerHTML = `<p>${formattedGreeting}</p>`;
});
document.getElementById('shareButton').addEventListener('click', function () {
    var url = window.location.href;
    navigator.clipboard.writeText(url)
        .then(() => alert('Link copied to clipboard'))
        .catch(err => console.error('Could not copy link: ', err));
});

