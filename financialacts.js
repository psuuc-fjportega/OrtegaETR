var transactions = [];
var editIndex = -1;

function addTransaction() {
  var dateInput = document.getElementById("dateInput").value;
  var descriptionInput = document.getElementById("descriptionInput").value;
  var amountInput = parseFloat(document.getElementById("amountInput").value);

  if (isNaN(amountInput)) {
    alert("Please enter a valid amount for the transaction.");
    return;
  }

  var transaction = {
    date: dateInput,
    description: descriptionInput,
    amount: amountInput
  };

  if (dateInput && descriptionInput && amountInput) {
    transactions.splice(editIndex, 0, transaction);
  } else {
    transactions.push(transaction);
  }

  updateTransactionList();
  updateAccountSummary();
  clearInputFields();
}

function updateTransactionList() {
  var transactionList = document.getElementById("transactionList");
  transactionList.innerHTML = "";

  transactions.forEach(function(transaction) {
    var listItem = document.createElement("li");
    listItem.classList.add("transaction-item");
    listItem.innerHTML = `
      <span class="transaction-date">${transaction.date}</span>
      <span class="transaction-description">${transaction.description}</span>
      <span class="transaction-amount">${formatCurrency(transaction.amount)}</span>
      <button class="delete-btn" onclick="deleteTransaction(${transactions.indexOf(transaction)})">
        <i class="fa fa-trash"></i> Delete
      </button>
      <button class="edit-btn" onclick="editTransaction(${transactions.indexOf(transaction)})">
        <i class="fa fa-edit"></i> Edit
      </button>
    `;

    transactionList.appendChild(listItem);
  });
}

function updateAccountSummary() {
  var totalIncome = 0;
  var totalExpense = 0;

  transactions.forEach(function(transaction) {
    if (transaction.amount > 0) {
      totalIncome += transaction.amount;
    } else {
      totalExpense += Math.abs(transaction.amount);
    }
  });

  document.getElementById("totalIncome").textContent = formatCurrency(totalIncome);
  document.getElementById("totalExpense").textContent = formatCurrency(totalExpense);
}

function clearInputFields() {
  document.getElementById("dateInput").value = "";
  document.getElementById("descriptionInput").value = "";
  document.getElementById("amountInput").value = "";
}

function deleteTransaction(index) {
  transactions.splice(index, 1);
  updateTransactionList();
  updateAccountSummary();
}

function editTransaction(index) {
  var transaction = transactions[index];
  editIndex = index;

  document.getElementById("dateInput").value = transaction.date;
  document.getElementById("descriptionInput").value = transaction.description;
  document.getElementById("amountInput").value = transaction.amount;

  transactions.splice(index, 1);

  updateTransactionList();
  updateAccountSummary();
}

function formatCurrency(amount) {
  return amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

document.getElementById("addTransactionBtn").addEventListener("click", addTransaction);
