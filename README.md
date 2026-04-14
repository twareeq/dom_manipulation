# dom_manipulation

🚀 Features
Dynamic Table Rendering: Automatically generates an HTML table from a JavaScript data array. No hardcoded rows.

Real-time Filtering: Users can filter transactions based on a minimum amount threshold.

Live Totals: A dynamic summary line that calculates and displays the total value of currently filtered transactions.

Zero Dependencies: 100% Vanilla JS, HTML5, and CSS3.

🛠️ Technical Implementation
Task 1: Dynamic Rendering
The application parses a transaction array and uses document.createElement or template literals to inject rows into the <tbody>. This ensures the UI stays in sync with the data source.

Task 2: Filtering Logic
Utilizes an Event Listener on the filter button to trigger a function that compares user input against the transaction values, toggling visibility or re-rendering the list accordingly.

Task 3: Aggregation
Every time the filter is applied, a reducer function calculates the sum of the visible transactions and updates the summary node in the DOM.

📁 Project Structure
Plaintext
├── index.html   # The structure of the application
├── style.css    # Custom styling for the table and UI
└── script.js    # Logic for rendering, filtering, and total calculation
💻 How to Run
Clone this repository:

Bash
git clone https://github.com/YourUsername/transaction-filter-app.git
Open index.html in any modern web browser.

<img width="1679" height="970" alt="Screenshot 2026-04-14 at 12 15 36 PM" src="https://github.com/user-attachments/assets/1b2a1ae9-77e8-4844-8a35-f04f003c809f" />
