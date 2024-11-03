// Setting up constants

const productContainer = document.getElementById('product-container');
const errorMessage = document.getElementById('error-message');

// Task 3: Display Product Details dynamically 

function displayProducts(products) { // Creating function to display products
    products.forEach(product => {
        const productDiv = document.createElement('div'); 
        productDiv.classList.add('product');

        // Displayinh product information in the appropriate div
        productDiv.innerHTML =  ` 
            <h2>${product.name}</h2>
            <h3>${product.company}</h3>
            <p>Price: $${product.price}</p>
            <img src="${product.image}"/>
        `;

        productContainer.appendChild(productDiv); // Appending div
    });
}

// Task 2: Fetch Products from the API Using Fetch and Promises
fetch('https://www.course-api.com/javascript-store-products') // Fetch data from the API
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok'); // Check if response is ok and display error if not
        }
        return response.json(); // Parse the JSON from the response
    })
    .then(data => {
        displayProducts(data); // Call the function displayProducts from task 3
    })
    // Task 4: Handle errors gracefully
    .catch(error => {
        errorMessage.textContent = "Failed to load products. Please try again later.";
        errorMessage.style.display = 'block';
        console.error('There was a problem with the fetch operation:', error);
    });

   