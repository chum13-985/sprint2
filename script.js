<script>
              // Declare a global array to store the items
              let items = [];
    
              // Get the form elements by their ids
              let addForm = document.getElementById("add-form");
              let name = document.getElementById("name");
              let price = document.getElementById("price");
              let description = document.getElementById("description");
              let image = document.getElementById("image");
              let category = document.getElementById("category");
              let submit = document.getElementById("submit");
    
              let createForm = document.getElementById("create-form");
              let newName = document.getElementById("new-name");
              let newPrice = document.getElementById("new-price");
              let newDescription = document.getElementById("new-description");
              let newImage = document.getElementById("new-image");
              let newCategory = document.getElementById("new-category");
              let createSubmit = document.getElementById("create-submit");
    
              // Get the div element for displaying items by its id
              let itemsDiv = document.getElementById("items");
    
              // Add an event listener to the submit button of the add form
              submit.addEventListener("click", function(event) {
                  // Prevent the default action of the button
                  event.preventDefault();
    
                  // Get the values of the input fields
                  let itemName = name.value;
                  let itemPrice = price.value;
                  let itemDescription = description.value;
                  let itemImage = image.files[0];
                  let itemCategory = category.value;
    
                  // Create an object to store the item details
                  let item = {
                      name: itemName,
                      price: itemPrice,
                      description: itemDescription,
                      image: itemImage,
                      category: itemCategory
                  };
    
                  // Push the item object to the items array
                  items.push(item);
    
                  // Clear the input fields
                  name.value = "";
                  price.value = "";
                  description.value = "";
                  image.value = "";
                  category.value = "Electronics";
    
                  // Display a success message
                  alert("Item added successfully!");
    
                  // Call the displayItems function to update the items div
                  displayItems();
              });
    
              // Add an event listener to the submit button of the create form
              createSubmit.addEventListener("click", function(event) {
                // Prevent the default action of the button
                event.preventDefault();
    
                // Get the values of the input fields
                let newItemName = newName.value;
                let newItemPrice = newPrice.value;
                let newItemDescription = newDescription.value;
                let newItemImage = newImage.files[0];
                let newItemCategory = newCategory.value;
    
                // Create an object to store the new item details
                let newItem = {
                    name: newItemName,
                    price: newItemPrice,
                    description: newItemDescription,
                    image: newItemImage,
                    category: newItemCategory
                };
    
                // Push the new item object to the items array
                items.push(newItem);
    
                // Clear the input fields
                newName.value = "";
                newPrice.value = "";
                newDescription.value = "";
                newImage.value = "";
                newCategory.value = "Electronics";
    
                // Display a success message
                alert("New item created successfully!");
    
                // Call the displayItems function to update the items div
                displayItems();
            });
    
              // Define a function to display the items in the items div
        function displayItems() {
            // Clear the previous content of the items div
            itemsDiv.innerHTML = "";

            // Loop through the items array and create HTML elements for each item
            for (let i=0; i<items.length; i++) {
                // Create a div element for each item and assign it a class of "item"
                let itemDiv = document.createElement("div");
                itemDiv.className = "item";

                // Create an img element for the item image and append it to the item div
                let itemImage = document.createElement("img");
                itemImage.src = URL.createObjectURL(items[i].image);
                itemDiv.appendChild(itemImage);

                // Create a h4 element for the item name and append it to the item div
                let itemName = document.createElement("h4");
                itemName.textContent = items[i].name;
                itemDiv.appendChild(itemName);

                // Create a p element for the item price and append it to the item div
                let itemPrice = document.createElement("p");
                itemPrice.textContent = "Price: ₹" + items[i].price;
                itemDiv.appendChild(itemPrice);

                // Create a p element for the item description and append it to the item div
                let itemDescription = document.createElement("p");
                itemDescription.textContent = "Description: " + items[i].description;
                itemDiv.appendChild(itemDescription);

                // Create a p element for the item category and append it to the item div
                let itemCategory = document.createElement("p");
                itemCategory.textContent = "Category: " + items[i].category;
                itemDiv.appendChild(itemCategory);

                // Create a div element for the buttons and assign it a class of "btn-group"
                let buttonDiv = document.createElement("div");
                buttonDiv.className = "btn-group";

                // Create a button element for the view action and append it to the button div
                let viewButton = document.createElement("button");
                viewButton.className = "btn btn-info";
                viewButton.textContent = "View";
                buttonDiv.appendChild(viewButton);

                // Create a button element for the purchase action and append it to the button div
                let purchaseButton = document.createElement("button");
                purchaseButton.className = "btn btn-success";
                purchaseButton.textContent = "Purchase";
                buttonDiv.appendChild(purchaseButton);

                // Create a button element for the delete action and append it to the button div
                let deleteButton = document.createElement("button");
                deleteButton.className = "btn btn-danger";
                deleteButton.textContent = "Delete";
                buttonDiv.appendChild(deleteButton);

                // Append the button div to the item div
                itemDiv.appendChild(buttonDiv);

                // Append the item div to the items div
                itemsDiv.appendChild(itemDiv);
            }
        }

        // Define a function to initialize the map
        function initMap() {
            // Create an object to store the map options
            let mapOptions = {
              center: {lat: 26.7161, lng: 88.4269}, // Jalpaiguri coordinates
              zoom: 15
            };

            // Create a new map object and assign it to the map div
            let map = new google.maps.Map(document.getElementById('map'), mapOptions);

            // Create a new marker object and assign it to the map
            let marker = new google.maps.Marker({
              position: {lat: 26.7161, lng: 88.4269}, // Jalpaiguri coordinates
              map: map,
              title: 'Website Template'
            });
        }
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

    </script>