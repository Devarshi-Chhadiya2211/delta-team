document.addEventListener("DOMContentLoaded", () => {
    // Toggle Dropdown Menu
    const viewAllBtn = document.querySelector('.view-all-btn');
    const viewAllDropdown = document.getElementById('viewAllDropdown');

    if (viewAllBtn && viewAllDropdown) {
        viewAllBtn.addEventListener('click', () => {
            viewAllDropdown.style.display = viewAllDropdown.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Product Card Animation
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.1}s`;
        card.style.animationFillMode = 'forwards';
    });

    // Button Click Events
    document.querySelectorAll(".btn").forEach((button) => {
        button.addEventListener("click", (e) => {
            const buttonText = e.target.textContent;
            const routes = {
                "Shop Now": "/shop",
                "Photo Albums": "/photo-albums",
                "Layflat Photo Albums": "/layflat-photo-albums",
            };
            if (routes[buttonText]) {
                window.location.href = routes[buttonText];
            }
        });
    });

    // Social Icons Hover Effect
    const socialIcons = document.querySelectorAll(".social-icons img");
    socialIcons.forEach(icon => {
        icon.addEventListener("mouseover", () => icon.style.filter = "brightness(1.2)");
        icon.addEventListener("mouseout", () => icon.style.filter = "brightness(1)");
    });

    // Visiting Card Dropdown
    const visitingCardBtn = document.getElementById("visitingCardBtn");
    const visitingCardDropdown = document.getElementById("visitingCardDropdown");

    if (visitingCardBtn && visitingCardDropdown) {
        visitingCardBtn.addEventListener("click", () => {
            visitingCardDropdown.classList.toggle("hidden");
        });

        window.addEventListener("click", (e) => {
            if (!visitingCardDropdown.contains(e.target) && e.target !== visitingCardBtn) {
                visitingCardDropdown.classList.add("hidden");
            }
        });
    }

    // Stationery Section Toggle
    const stationeryBtn = document.getElementById('stationery-btn');
    const stationeryContent = document.getElementById('stationery-content');

    if (stationeryBtn && stationeryContent) {
        stationeryBtn.addEventListener('click', (e) => {
            e.preventDefault();
            stationeryContent.classList.toggle('visible');
        });
    }

    // Cart Modal Logic
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeBtn = document.getElementById('close-btn');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceSpan = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    let cartItems = [];
    let totalPrice = 0;

    if (cartIcon && cartModal && closeBtn && cartItemsList && totalPriceSpan && checkoutBtn) {
        cartIcon.addEventListener('click', () => {
            cartModal.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });

        addToCartButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const productName = e.target.getAttribute('data-product');
                const productPrice = parseFloat(e.target.getAttribute('data-price'));

                cartItems.push({ productName, productPrice });
                totalPrice += productPrice;

                updateCart();
            });
        });

        function updateCart() {
            cartItemsList.innerHTML = '';
            cartItems.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.productName} - $${item.productPrice.toFixed(2)}`;
                cartItemsList.appendChild(listItem);
            });
            totalPriceSpan.textContent = totalPrice.toFixed(2);
        }

        checkoutBtn.addEventListener('click', () => {
            alert('Proceeding to checkout!');
            // Add checkout logic here
        });
    }
});
