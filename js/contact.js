document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("ContactForm");

    if (!form) {
        console.log("Contact form not found.");
        return;
    }
    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const phone = document.getElementById("phone-number").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const { data, error } = await window.db.from("ContactForm")
            .insert([
                {
                    first_name: firstName,
                    last_name: lastName,
                    phone: phone,
                    email: email,
                    subject: subject,
                    message: message
                }
            ]);

        if (error) {
            console.error(error);
            // alert("Something went wrong!");
            Toastify({
                text: " Something went wrong. Please try again.",
                duration: 4000,
                gravity: "top",
                position: "right",
                close: true,
                style: {
                    background: "#ef4444"
                }
            }).showToast();
            return;
        }

        // alert("Message Sent Successfully!");
        Toastify({
            text: " Message sent successfully!",
            duration: 4000,
            gravity: "top",
            position: "right",
            close: true,
            stopOnFocus: true,
            style: {
                background: "#67fd67",
                color: "#111827",
                borderRadius: "10px"
            }
        }).showToast();

        form.reset();

    });

});