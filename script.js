document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = e.target.name.value;
    let email = e.target.email.value;
    let message = e.target.message.value;

    // Regular Expression for validating email
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!name || !email || !message) {
        alert("All fields are required.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // If everything is fine, show success message
    alert("Thank you for contacting us, " + name + "! We will get back to you soon.");
    e.target.reset(); // Reset form after successful submission
});
