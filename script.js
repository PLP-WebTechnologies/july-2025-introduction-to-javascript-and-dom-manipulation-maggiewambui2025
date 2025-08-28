// 🎯 Part 1: JavaScript Basics (variables, conditionals, input/output)
function welcomeCustomer() {
  const name = document.getElementById("customerName").value;

  if (name.trim() === "") {
    document.getElementById("welcomeMsg").textContent = "Please enter your name.";
  } else {
    document.getElementById("welcomeMsg").textContent = `Welcome to Peggy Baby Shop, ${name}!`;
  }
}

// ❤️ Part 2: Custom Functions

// Function 1: Calculate total price
function calculateTotal(price, qty) {
  return price * qty;
}

// Function 2: Display total price
function displayTotal() {
  const price = parseFloat(document.getElementById("itemPrice").value);
  const qty = parseInt(document.getElementById("itemQty").value);

  if (isNaN(price) || isNaN(qty)) {
    document.getElementById("totalOutput").textContent = "Please enter valid numbers.";
    return;
  }

  const total = calculateTotal(price, qty);
  document.getElementById("totalOutput").textContent = `Total: Ksh ${total}`;
}

// 🔁 Part 3: Loops

// Example using a for loop
function listProducts() {
  const products = ["Diapers", "Baby Oil", "Baby Wipes", "Pacifiers", "Baby Lotion"];
  const list = document.getElementById("productList");
  list.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const li = document.createElement("li");
    li.textContent = products[i];
    list.appendChild(li);
  }
}

// Example using a while loop (not rendered, just logs)
function simulateCountdown() {
  let count = 5;
  while (count > 0) {
    console.log(`Countdown: ${count}`);
    count--;
  }
}

// 🌐 Part 4: DOM Manipulation

// Toggle visibility of a special offer message
function toggleOffer() {
  const offer = document.getElementById("offerText");
  if (offer.style.display === "none") {
    offer.style.display = "block";
  } else {
    offer.style.display = "none";
  }
}

// DOM interaction #2: Real-time logging
document.getElementById("customerName").addEventListener("input", function () {
  console.log(`Typing: ${this.value}`);
});

// DOM interaction #3: Create and add a thank you note dynamically
const thanksNote = document.createElement("p");
thanksNote.textContent = "🍼 Thank you for shopping with Peggy Baby Shop!";
document.body.appendChild(thanksNote);
