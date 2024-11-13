var cart = [];

function addToCart(productName, productPrice) {
    var existingProduct = null;

    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === productName) {
            existingProduct = cart[i];
            break;
        }
    }

    if (!existingProduct) {
        cart.push({ name: productName, price: productPrice });
        alert("Product added to Cart: " + productName);
        updateCartDisplay();
    } else {
        alert(productName + " is already in the cart.");
    }
}

function updateCartDisplay() {
    var cartContainer = document.getElementById('cart-items');
    var totalElement = document.getElementById('total');
    
    cartContainer.innerHTML = '';
    var totalPrice = 0;

    for (var i = 0; i < cart.length; i++) {
        var item = document.createElement('div');
        item.textContent = cart[i].name + ' - ₹' + cart[i].price;
        cartContainer.appendChild(item);
        totalPrice += cart[i].price;
    }
    
    totalElement.textContent = 'Total: ₹' + totalPrice;
}

var checkoutBtn = document.getElementById('checkout-btn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
        alert('Thank you for your order!');
        cart = [];
        updateCartDisplay();
    });
}