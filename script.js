document.getElementById("ticketForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const numTickets = document.getElementById("num_tickets").value;

    // Generate ticket content
    const ticketContent = `
------------------------------
MOVIE TICKET
------------------------------
Name: ${name}
Number of Tickets: ${numTickets}
Date: ${new Date().toLocaleString()}
------------------------------
Thank you for booking with us!
Enjoy the movie!
------------------------------
`;

    // Display the ticket on the UI
    document.getElementById("ticketDetails").textContent = ticketContent;
    document.getElementById("ticketDisplay").classList.remove("hidden");

    // Add functionality to download the ticket
    document.getElementById("downloadTicket").addEventListener("click", () => {
        const blob = new Blob([ticketContent], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `ticket_${name}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    });

    // Add functionality to send the ticket via email
    document.getElementById("emailTicket").addEventListener("click", () => {
        alert(`The ticket will be sent to ${email}. (Email functionality not implemented in this example.)`);
    });
});
