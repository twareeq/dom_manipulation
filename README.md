# 💸 Vanilla JS Transaction Filter APP

A sleek, framework-free transaction management tool. This project focuses on **Raw DOM Manipulation** and efficient data handling using only vanilla HTML5, CSS3, and JavaScript.

---

## 🎯 Project Goals
The objective of this project was to build a functional data dashboard without the "magic" of React or other libraries, ensuring a deep understanding of how the browser handles data and UI updates.

### 🚀 Key Features

* **Dynamic Data Injection:** The transaction table is built entirely via JavaScript. No hardcoded `<tr>` tags—the JS parses the data and constructs the UI on the fly.
* **Threshold Filtering:** An interactive filter that allows users to set a minimum amount. The table updates instantly to show only relevant financial data.
* **Live Aggregation:** A dynamic "Total" indicator that recalculates the sum of only the *visible* transactions every time the filter is adjusted.

---

## 🛠️ The "No-Framework" Tasks

### Task 1: Dynamic Table Rendering
Used JavaScript to iterate through the transaction array and dynamically append rows to the DOM. This ensures that as the data grows, the UI scales automatically.

### Task 2: Data Filtering
Implemented an event-driven filtering system. When the user inputs a minimum value, the script compares it against the dataset and selectively renders the matching transactions.

### Task 3: Real-time Calculation
Integrated a calculation engine that listens for filter changes. It sums up the `amount` values of the filtered results to provide an accurate, real-time total.

---

## 📂 Project Structure
```text
.
├── index.html   # Semantic HTML5 structure
├── style.css    # Custom layout and table styling
└── script.js    # Core logic (Rendering, Filtering, Calculation)

Bash
git clone https://github.com/YourUsername/transaction-filter-app.git
Open index.html in any modern web browser.
```
<img width="1679" height="970" alt="Screenshot 2026-04-14 at 12 15 36 PM" src="https://github.com/user-attachments/assets/1b2a1ae9-77e8-4844-8a35-f04f003c809f" />
