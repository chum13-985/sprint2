// Get the button elements by their text content
let viewButton = itemDiv.querySelector("button:contains('View')");
let purchaseButton = itemDiv.querySelector("button:contains('Purchase')");
let deleteButton = itemDiv.querySelector("button:contains('Delete')");

// Add event listeners to the button elements
viewButton.addEventListener("click", function() {
    // Display the item details in a modal
    // You can use the Bootstrap documentation to learn how to use the modal component
});

purchaseButton.addEventListener("click", function() {
    // Ask the user if they want to buy the item
    let confirmPurchase = confirm("Are you sure you want to buy this item?");
    // If they confirm
    if (confirmPurchase) {
        // Display a success message
        alert("You have successfully purchased this item!");
        // Remove the item from the items array
        items.splice(i, 1);
        // Update the display
        displayItems();
    }
});

deleteButton.addEventListener("click", function() {
    // Ask the user if they want to delete the item
    let confirmDelete = confirm("Are you sure you want to delete this item?");
    // If they confirm
    if (confirmDelete) {
        // Remove the item from the items array
        items.splice(i, 1);
        // Update the display
        displayItems();
    }
});
