document.getElementById("ticketForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input
    const name = document.getElementById("name").value;
    const numTickets = document.getElementById("num_tickets").value;

    // Generate ticket content
    const ticketContent = `
MOVIE TICKET
------------------------------
Title : Daaku Maharaj

Name: ${name.toUpperCase()}

Number of Tickets: ${numTickets}

Date: 01/31/2025 9:00 PM
------------------------------
Thank you for booking with us!
Enjoy the movie!
------------------------------
`;

    // Display the ticket on the UI
    document.getElementById("ticketDetails").textContent = ticketContent;
    document.getElementById("ticketDisplay").classList.remove("hidden");

    // Add functionality to download the ticket as PDF
    document.getElementById("downloadTicket").addEventListener("click", () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.setFont("courier", "normal");
        doc.text(ticketContent, 10, 10);
        doc.save(`ticket_${name}.pdf`);
    });

    // Add functionality to send the ticket via email using EmailJS
    
});
