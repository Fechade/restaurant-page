function Contact() {
    const Contact = document.createElement("div"); 
    Contact.classList.add("Contact");
    Contact.id = "tabs-3"

    Contact.innerHTML = `
        <h1>
        Contact
        </h1>
        <div class="contact">
        </div>
    `;

    return Contact;
}

export default Contact; 