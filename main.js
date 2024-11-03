// Setting up constants

const productContainer = document.getElementById('product-container');
const errorMessage = document.getElementById('error-message');

// Task 2: 
fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayProducts(data);
    })
    .catch(error => {
        errorMessage.textContent = "Failed to load products. Please try again later.";
        errorMessage.style.display = 'block';
        console.error('There was a problem with the fetch operation:', error);
    });

    function displayProducts(products) {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
    
            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <h3>${product.company}</h3>
                <p>Price: $${product.price}</p>
                <img src="${product.image}"/>
            `;
    
            productContainer.appendChild(productDiv);
        });
    }