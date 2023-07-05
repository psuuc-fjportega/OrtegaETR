// financialacts.js

// Transaction data array
let transactions = [];

// Get elements
const transactionForm = document.getElementById('transactionForm');
const dateInput = document.getElementById('dateInput');
const descriptionInput = document.getElementById('descriptionInput');
const amountInput = document.getElementById('amountInput');
const sortSelect = document.getElementById('sortSelect');
const transactionList = document.getElementById('transactionList');
const totalIncome = document.getElementById('totalIncome');
const totalExpense = document.getElementById('totalExpense');

// Event listeners
transactionForm.addEventListener('submit', addTransaction);
sortSelect.addEventListener('change', sortTransactions);

// Load transactions from local storage
loadTransactions();

// Add transaction
function addTransaction(event) {
  event.preventDefault();

  // Validate form inputs
  if (!validateForm()) {
    return;
  }

  // Create new transaction object
  const transaction = {
    date: dateInput.value,
    description: descriptionInput.value,
    amount: parseFloat(amountInput.value)
  };

  // Add transaction to the array
  transactions.push(transaction);

  // Clear form inputs
  dateInput.value = '';
  descriptionInput.value = '';
  amountInput.value = '';

  // Update transaction list
  updateTransactionList();

  // Update account summary
  updateAccountSummary();

  // Save transactions to local storage
  saveTransactions();
}

// Validate form inputs
function validateForm() {
  // Validate date input
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateInput.value)) {
    alert('Please enter a valid date in the format YYYY-MM-DD.');
    return false;
  }

  // Validate amount input
  if (isNaN(parseFloat(amountInput.value))) {
    alert('Please enter a valid amount.');
    return false;
  }

  return true;
}

// Update transaction list
function updateTransactionList() {
  // Clear transaction list
  transactionList.innerHTML = '';

  // Sort transactions based on selected option
  const sortBy = sortSelect.value;
  transactions.sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === 'amount') {
      return a.amount - b.amount;
    } else if (sortBy === 'description') {
      return a.description.localeCompare(b.description);
    }
  });

  // Populate transaction list
  transactions.forEach((transaction) => {
    const listItem = document.createElement('li');
    listItem.classList.add('transaction-item');
    listItem.innerHTML = `
      <span class="transaction-date">${transaction.date}</span>
      <span class="transaction-description">${transaction.description}</span>
      <span class="transaction-amount">$${transaction.amount.toFixed(2)}</span>
      <button class="edit-button btn btn-primary btn-sm" data-index="${transactions.indexOf(
      transaction
    )}">Edit</button>
      <button class="delete-button btn btn-danger btn-sm" data-index="${transactions.indexOf(
      transaction
    )}">Delete</button>
    `;
    transactionList.appendChild(listItem);
  });

  // Add event listeners for edit and delete buttons
  const editButtons = document.getElementsByClassName('edit-button');
  const deleteButtons = document.getElementsByClassName('delete-button');
  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener('click', editTransaction);
    deleteButtons[i].addEventListener('click', deleteTransaction);
  }
}

// Sort transactions
function sortTransactions() {
  updateTransactionList();
}

// Edit transaction
function editTransaction(event) {
  const index = event.target.getAttribute('data-index');
  const transaction = transactions[index];

  // Set form inputs to transaction values
  dateInput.value = transaction.date;
  descriptionInput.value = transaction.description;
  amountInput.value = transaction.amount;

  // Remove transaction from array
  transactions.splice(index, 1);

  // Update transaction list
  updateTransactionList();

  // Update account summary
  updateAccountSummary();

  // Save transactions to local storage
  saveTransactions();
}

// Delete transaction
function deleteTransaction(event) {
  const index = event.target.getAttribute('data-index');

  // Remove transaction from array
  transactions.splice(index, 1);

  // Update transaction list
  updateTransactionList();

  // Update account summary
  updateAccountSummary();

  // Save transactions to local storage
  saveTransactions();
}

// Update account summary
function updateAccountSummary() {
  let income = 0;
  let expense = 0;

  // Calculate total income and expense
  transactions.forEach((transaction) => {
    if (transaction.amount > 0) {
      income += transaction.amount;
    } else {
      expense += Math.abs(transaction.amount);
    }
  });

  // Update summary values
  totalIncome.textContent = `$${income.toFixed(2)}`;
  totalExpense.textContent = `$${expense.toFixed(2)}`;
}

// Save transactions to local storage
function saveTransactions() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Load transactions from local storage
function loadTransactions() {
  const savedTransactions = localStorage.getItem('transactions');
  if (savedTransactions) {
    transactions = JSON.parse(savedTransactions);
    updateTransactionList();
    updateAccountSummary();
  }
}