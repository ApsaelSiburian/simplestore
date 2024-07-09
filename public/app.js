document.addEventListener('DOMContentLoaded', function() {
    const cartCountElement = document.querySelector('.cart-count');
    let cartCount = loadCartCount();

    // Update the cart count display
    cartCountElement.textContent = cartCount;

    console.log('Initial cart count:', cartCount); // Log initial cart count

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
            saveCartCount(cartCount);
            console.log('Cart count after adding an item:', cartCount); // Log cart count after adding an item
        });
    });
});

function saveCartCount(count) {
    localStorage.setItem('cartCount', count);
    console.log('Saved cart count to localStorage:', count); // Log saved cart count
}

function loadCartCount() {
    const count = localStorage.getItem('cartCount');
    console.log('Loaded cart count from localStorage:', count); // Log loaded cart count
    return count ? parseInt(count, 10) : 0;
}
