document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#shift-table tbody");
    const startDate = new Date("2024-01-01");
    const today = new Date();
    const rows = 365;

    let currentDateRow = null;

    for (let i = 0; i < rows; i++) {
        const row = document.createElement("tr");
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);

        const dateCell = document.createElement("td");
        dateCell.textContent = date.toLocaleDateString("en-GB", { day: '2-digit', month: '2-digit', year: '2-digit' });
        row.appendChild(dateCell);

        const startTimeCell = document.createElement("td");
        startTimeCell.textContent = "";
        row.appendChild(startTimeCell);

        const finishTimeCell = document.createElement("td");
        finishTimeCell.textContent = "";
        row.appendChild(finishTimeCell);

        const notesCell = document.createElement("td");
        notesCell.textContent = "";
        row.appendChild(notesCell);

        if (date.toDateString() === today.toDateString()) {
            row.classList.add("current-date");
            currentDateRow = row;
        }

        tableBody.appendChild(row);
    }

    if (currentDateRow) {
        currentDateRow.scrollIntoView({ behavior: "smooth", block: "start" });
    }
});
