
// ========================================
// SPENDWISE - JAVASCRIPT FOUNDATION
// ========================================

console.log("Welcome to SpendWise!");
console.log("JavaScript is working successfully.");

// ========================================
// 1. STORE APPLICATION DATA
// ========================================

// Monthly financial information
let monthlyIncome = 120000;
let monthlyBudget = 85000;

// Expense categories
let foodExpense = 8500;
let transportExpense = 4000;
let rentExpense = 12000;
let entertainmentExpense = 3500;
let savings = 5000;
let utilitiesExpense = 2000;

// Display stored financial information
console.log("===== SPENDWISE FINANCIAL DATA =====");

console.log("Monthly Income: KSh " + monthlyIncome);
console.log("Monthly Budget: KSh " + monthlyBudget);

console.log("Food: KSh " + foodExpense);
console.log("Transport: KSh " + transportExpense);
console.log("Rent: KSh " + rentExpense);
console.log("Entertainment: KSh " + entertainmentExpense);
console.log("Savings: KSh " + savings);
console.log("Utilities: KSh " + utilitiesExpense);

// ========================================
// 2. COLLECT AND VALIDATE USER INPUT
// ========================================

// Reusable function for collecting valid amounts
function getValidAmount(message, allowZero = false) {

    while (true) {

        let input = prompt(message);

        // Stop if the user cancels
        if (input === null) {
            return null;
        }

        let amount = Number(input);

        if (
            input.trim() !== "" &&
            Number.isFinite(amount) &&
            (allowZero ? amount >= 0 : amount > 0)
        ) {
            return amount;
        }

        alert("Please enter a valid " +
            (allowZero ? "non-negative" : "positive") +
            " number.");
    }
}

// Collect information from the user
let userIncome = getValidAmount(
    "Enter your monthly income (KSh):"
);

let userBudget = userIncome === null ? null :
    getValidAmount("Enter your monthly budget (KSh):");

let userExpenses = userBudget === null ? null :
    getValidAmount("Enter your total expenses (KSh):", true);

// ========================================
// 3. BUDGET CALCULATION FUNCTION
// ========================================

function calculateBalance(budget, expenses) {

    return budget - expenses;

}

// ========================================
// 4. TOTAL EXPENSES FUNCTION
// ========================================

function calculateTotalExpenses(
    food,
    transport,
    rent,
    entertainment,
    utilities
) {

    return food + transport + rent +
        entertainment + utilities;

}

// ========================================
// 5. DISPLAY FINANCIAL SUMMARY FUNCTION
// ========================================

function displaySummary(income, budget, expenses) {

    let remainingBalance = calculateBalance(budget, expenses);

    console.log("===== SPENDWISE FINANCIAL SUMMARY =====");

    console.log("Monthly Income: KSh " + income);
    console.log("Monthly Budget: KSh " + budget);
    console.log("Total Expenses: KSh " + expenses);
    console.log("Remaining Balance: KSh " + remainingBalance);

    if (remainingBalance < 0) {
        console.log("Warning: You have exceeded your budget!");
    } else {
        console.log("Good job! You are within your budget.");
    }
}

// ========================================
// 6. RUN THE APPLICATION
// ========================================

if (
    userIncome !== null &&
    userBudget !== null &&
    userExpenses !== null
) {

    console.log("===== USER BUDGET INFORMATION =====");

    console.log("Your Income: KSh " + userIncome);
    console.log("Your Budget: KSh " + userBudget);
    console.log("Your Expenses: KSh " + userExpenses);

    // Calculate expenses from stored categories
    let totalCategoryExpenses = calculateTotalExpenses(
        foodExpense,
        transportExpense,
        rentExpense,
        entertainmentExpense,
        utilitiesExpense
    );

    console.log(
        "Total Category Expenses: KSh " + totalCategoryExpenses
    );

    // Display the financial summary
    displaySummary(userIncome, userBudget, userExpenses);

} else {

    console.log("SpendWise stopped because input was cancelled.");
}
