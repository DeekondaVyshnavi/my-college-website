document.addEventListener('DOMContentLoaded', function() {
    // update footer year
    var yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

function sendWhatsApp() {
    var name = document.getElementById('userName').value;
    var phoneNumber = '919000120472';
    var message = 'Hello! My name is ' + (name ? name : 'a student') + '. I want to apply to BITS Narsampet.';
    var url = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    window.open(url, '_blank');
}

function submitLead(event) {
    event.preventDefault();
    var form = document.getElementById('leadForm');
    var name = form.elements['name'].value;
    var email = form.elements['email'].value;
    var program = form.elements['program'].value;

    if (!name || !email) {
        alert('Please fill in your name and email.');
        return;
    }

    // Using mailto for demonstration; a real implementation would POST to a server
    var subject = 'New Admission Inquiry';
    var body = 'Name: ' + name + '\nEmail: ' + email + '\nProgram: ' + program;
    window.location.href = 'mailto:deekondavyshnavi141@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    // optionally clear the form
    form.reset();
}
