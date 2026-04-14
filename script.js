const transactions = [
  {
    bookingDate: "2026-04-01",
    description: "Cash Deposit",
    details: "KHAMA LATHU YOUTH",
    reference: "FT26091119W4\\MOB",
    debit: 0,
    credit: 407500.00,
    balance: 8395591.85
  },
  {
    bookingDate: "2026-04-02",
    description: "Cash Deposit",
    details: "MABISO MEN",
    reference: "FT26091BT81N\\MHC",
    debit: 0,
    credit: 1000000.00,
    balance: 9395591.85
  },
  {
    bookingDate: "2026-04-03",
    description: "Cash Deposit",
    details: "TUPOCHELE WOMEN",
    reference: "FT26091GFJLX\\MHC",
    debit: 0,
    credit: 210000.00,
    balance: 9605591.85
  },
  {
    bookingDate: "2026-04-02",
    description: "Online Banking Transfer",
    details: "FTR TO 8603",
    reference: "FT26092DR7PS\\FDH",
    debit: 9000000.00,
    credit: 0,
    balance: 8203341.85
  },
  {
    bookingDate: "2026-04-02",
    description: "Agent Deposit",
    details: "MBULURA CLUB",
    reference: "FT26092BYWV5\\FDH",
    debit: 0,
    credit: 354000.00,
    balance: 16590341.85
  },
  {
    bookingDate: "2026-04-02",
    description: "Transfer",
    details: "MISPOST",
    reference: "FT26092XKKF4\\NAM",
    debit: 100000.00,
    credit: 0,
    balance: 16567891.85
  },
  {
    bookingDate: "2026-04-04",
    description: "Online Banking Transfer",
    details: "FTR TO 8603",
    reference: "FT26094D3944\\FDH",
    debit: 16000000.00,
    credit: 0,
    balance: 837891.85
  },
  {
    bookingDate: "2026-04-04",
    description: "Mobile Banking Transfer",
    details: "VERAH MAKE KANYIKA",
    reference: "FT26094P2TN6\\FDH",
    debit: 0,
    credit: 119000.00,
    balance: 2258891.85
  },
  {
    bookingDate: "2026-04-07",
    description: "Agent Deposit",
    details: "THANDIZO PASTERS ENEYA",
    reference: "FT260974TB0P\\FDH",
    debit: 0,
    credit: 790550.00,
    balance: 5944241.85
  },
  {
    bookingDate: "2026-04-07",
    description: "Online Banking Transfer",
    details: "FTR TO 8603",
    reference: "FT260970WR4P\\FDH",
    debit: 9000000.00,
    credit: 0,
    balance: 4067898.71
  },
  {
    bookingDate: "2026-04-07",
    description: "Transfer In",
    details: "KABANGO IDAH",
    reference: "FT2609766KZV\\FDH",
    debit: 0,
    credit: 185245.86,
    balance: 11838698.71
  },
  {
    bookingDate: "2026-04-07",
    description: "Agent Deposit",
    details: "YUSUF",
    reference: "FT26097SPQZ3\\FDH",
    debit: 0,
    credit: 666379.00,
    balance: 2438327.71
  }
];

const keys = ["bookingDate", "description", "details", "reference", 
    "debit", "credit", "balance"];

const resetButton = document.querySelector(".btn1");
const filterButton = document.querySelector(".btn2");

function createTable(arrName) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const hRow = document.createElement("tr");
    
    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(hRow);

    keys.forEach((k) => {
        const th = document.createElement("th");
        th.innerText = k;
        hRow.appendChild(th);
    })

    for (let i = 0; i < arrName.length; i++) {
        const tr = document.createElement("tr");
        tbody.appendChild(tr);

        keys.forEach((k) => {
            const td = document.createElement("td");
            td.innerText = k === "debit" || k === "credit" || k === "balance" 
            ? arrName[i][k].toLocaleString() 
            : arrName[i][k];
            tr.appendChild(td);
        })
    }

    return table;
}

function appendTable(tName) {
    document.querySelector("#tableSection").appendChild(tName);
}

function clearTable() {
    document.querySelector("#tableSection").innerHTML = "";
}

function calculateSum(arrayName) {
    const total = arrayName.reduce((sum, t) => sum + t.credit, 0);
    return document.querySelector("#totalAmount").innerText = `MWK ${total.toLocaleString()}`;
}

function filterTransactions(min, max, minDate, maxDate, arr) {
    const results = arr.filter(
        (t) => 
            t.credit > min && 
            t.credit <= max && 
            t.bookingDate >= minDate && 
            t.bookingDate <= maxDate,
    );
    console.log(results);
    return results;
}


resetButton.addEventListener("click", () => {
    clearTable();
    calculateSum(transactions);
    appendTable(createTable(transactions));

    document.querySelector("input[name='minAmount']").value = '';
    document.querySelector("input[name='maxAmount']").value = '';
    document.querySelector("input[name='minDate']").value = '';
    document.querySelector("input[name='maxDate']").value = '';
});

filterButton.addEventListener("click", () => {
    const minAmount = Number(document.querySelector("input[name='minAmount']").value);
    const maxAmount = Number(document.querySelector("input[name='maxAmount']").value) || Infinity;
    const minDate = document.querySelector("input[name='minDate']").value || "1999-01-01";
    const maxDate = document.querySelector("input[name='maxDate']").value || "2027-01-01";

    // console.log(`${minAmount} & ${maxAmount} ${minDate} & ${maxDate}`);

    
    clearTable();
    const filteredArray = filterTransactions(minAmount, maxAmount, minDate, maxDate, transactions);
    calculateSum(filteredArray);
    appendTable(createTable(filteredArray));
});

 appendTable(createTable(transactions));
 calculateSum(transactions);



