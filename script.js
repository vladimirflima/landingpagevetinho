document.getElementById('developer-info').addEventListener('click', function() {
    var contactInfo = document.getElementById('contact-info');
    contactInfo.style.display = contactInfo.style.display === 'none' ? 'block' : 'none';
});


document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});
