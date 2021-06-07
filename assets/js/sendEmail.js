function send(contactForm) {
    emailjs.send("gmail", "service_1b7fsmk", {
         "from_name": contactForm.contact-name.value,
         "from_email": contactForm.contact-email.value,
         "project_request": contactForm.contact-project.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page

}