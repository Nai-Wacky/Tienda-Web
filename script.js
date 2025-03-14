class Product {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
        this.quantity = 1;
    }
}

class Cart {
    constructor() {
        this.items = [];
    }

    addProduct(product) {
        let existingItem = this.items.find(item => item.name === product.name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push(product);
        }
        this.renderCart();
    }

    updateQuantity(index, change) {
        if (this.items[index].quantity + change > 0) {
            this.items[index].quantity += change;
        } else {
            this.items.splice(index, 1);
        }
        this.renderCart();
    }

    renderCart() {
        let cartContainer = document.getElementById('cart');
        cartContainer.innerHTML = '';
        this.items.forEach((item, index) => {
            cartContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.name}">
                    <span>${item.name} - $${item.price} x ${item.quantity} = $${item.price * item.quantity}</span>
                    <button onclick="cart.updateQuantity(${index}, 1)">+</button>
                    <button onclick="cart.updateQuantity(${index}, -1)">-</button>
                </div>
            `;
        });
    }
}

const cart = new Cart();