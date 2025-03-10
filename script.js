document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.product-item button');
    const cartItems = document.querySelector('.cart-items');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productItem = this.closest('.product-item');
            const productName = productItem.querySelector('h3').innerText;
            const productPrice = productItem.querySelector('p').innerText;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${productName} - ${productPrice}</p>
            `;
            cartItems.appendChild(cartItem);
        });
    });

    // Checkout button functionality
    const checkoutButton = document.querySelector('.checkout');
    checkoutButton.addEventListener('click', function() {
        alert('Thank you for your purchase!');
        cartItems.innerHTML = ''; // Clear the cart
    });
});