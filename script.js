// Product database (fake data)
const products = [
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "T-Shirt", price: 800 },
    { id: 3, name: "Watch", price: 2500 },
    { id: 4, name: "Headphones", price: 1500 }
];

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Show products on homepage
function displayProducts() {
    const list = document.getElementById("product-list");
    if (!list) return;

    products.forEach(product => {
        list.innerHTML += `
            <div class="card">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

// Add to cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Added to cart!");
}

// Update cart count in header
function updateCartCount() {
    const count = document.getElementById("cart-count");
    if (count) count.innerText = cart.length;
}

// Display cart items
function displayCart() {
    const container = document.getElementById("cart-items");
    if (!container) return;

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        container.innerHTML += `
            <div class="cart-item">
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

// Remove item from cart
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

displayProducts();
displayCart();
updateCartCount();
