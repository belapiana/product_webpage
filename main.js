const productContainer = document.getElementById('product-container');
const errorMessage = document.getElementById('error-message');

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