document.getElementById("ticketForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input from
    const name = document.getElementById("name").value;
    const numTickets = document.getElementById("num_tickets").value;

    // Generate ticket content
    const ticketContent = `
<span style="font-size: 25px; font-weight: bold;">MOVIE TICKET</span>
------------------------------
<span style="font-size: 15px;">
Title : Daaku Maharaj

Name: ${name.toUpperCase()}

Number of Tickets: ${numTickets}

Date: 01/31/2025 9:00 PM
</span>
------------------------------

Thank you for booking with us!
Enjoy the movie!

<span style="font-size: 12px; font-style: italic;">
** Movie ticket is non-refundable **<br>
** Please carry a valid ID proof **<br>
** Movie time and title are subject to change **
</span>
`;

    // Display the ticket on the UI
    document.getElementById("ticketDetails").innerHTML = ticketContent;
    document.getElementById("ticketDisplay").classList.remove("hidden");

    // Function to remove HTML tags for PDF
    function stripHTMLTags(html) {
        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || "";
    }

    // Add functionality to download the ticket as PDF
    document.getElementById("downloadTicket").addEventListener("click", () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.setFont("courier", "normal");

        // Convert the HTML content to plain text for PDF
        const plainTextTicket = stripHTMLTags(ticketContent);

        doc.text(plainTextTicket, 10, 10);
        doc.save(`ticket_${name}.pdf`);
    });

    // Add functionality to send the ticket via email using EmailJS (if needed)
});