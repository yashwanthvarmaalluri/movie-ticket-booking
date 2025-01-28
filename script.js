// script.js
document.getElementById("ticketForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input
    const name = document.getElementById("name").value;
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

    // Create a downloadable file
    const blob = new Blob([ticketContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ticket_${name}.txt`; // File name
    a.click();

    // Clean up
    URL.revokeObjectURL(url);
});
