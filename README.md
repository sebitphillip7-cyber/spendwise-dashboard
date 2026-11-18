# SpendWise – JavaScript Foundation

## Project Description

SpendWise is a personal budgeting application designed to help users understand their income, expenses, and remaining balance.

This project builds on the existing SpendWise dashboard by introducing JavaScript functionality. Users can enter their monthly income, budget, and expenses and receive calculated financial results.

## JavaScript Concepts Implemented

The following JavaScript concepts were implemented:

1. **Variables:** Used to store monthly income, budgets, and different expense categories.
2. **Data Types:** Used numbers for financial calculations and strings for messages.
3. **User Input:** Used the `prompt()` function to collect financial information from users.
4. **Type Conversion:** Used `Number()` to convert user input into numeric values.
5. **Conditional Statements:** Used `if`, `else`, and validation conditions to check user input and budget results.
6. **Loops:** Used a `while` loop to request valid information until the user enters an acceptable amount.
7. **Functions:** Created reusable functions to calculate balances, calculate total expenses, validate input, and display financial summaries.
8. **Console Output:** Used `console.log()` to display financial information and calculation results.

## How Variables Are Used

Variables store important financial information in the application.

Examples include:

- `monthlyIncome` – stores monthly income.
- `monthlyBudget` – stores the monthly budget.
- `foodExpense` – stores food expenses.
- `transportExpense` – stores transport expenses.
- `rentExpense` – stores rent expenses.
- `userExpenses` – stores expenses entered by the user.

The `let` keyword is used to declare variables.

## How User Input Is Collected

The application uses JavaScript's `prompt()` function to ask users for:

- Monthly income.
- Monthly budget.
- Total expenses.

The `Number()` function converts the entered information into numbers.

A reusable validation function checks that users enter valid amounts. Invalid values are rejected and users are asked to try again.

## How Calculations Are Performed

SpendWise calculates the remaining balance by subtracting total expenses from the monthly budget.

**Formula:**

Remaining Balance = Monthly Budget - Total Expenses

Example:

85,000 - 35,000 = 50,000

The remaining balance is KSh 50,000.

The application also calculates total expenses by adding the individual expense categories.

## How Functions Help Organize the Code

Functions make the application easier to organize, understand, and maintain.

The project includes:

- `getValidAmount()` – collects and validates user input.
- `calculateBalance()` – calculates the remaining budget.
- `calculateTotalExpenses()` – adds expense categories.
- `displaySummary()` – displays the user's financial summary.

These functions help avoid repeating code and make the application reusable.

## Project Files

The project contains the following files:

- `index.html` – provides the dashboard structure.
- `style.css` – provides the dashboard styling.
- `script.js` – contains the JavaScript functionality.
- `README.md` – explains the project and its implementation.

## How to Run the Project

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a web browser.
4. Enter your financial information when prompted.
5. Open the browser Developer Tools and select Console to view the results.

## Conclusion

SpendWise demonstrates the practical application of JavaScript fundamentals, including variables, data types, user input, calculations, conditional statements, loops, and reusable functions.
