const products = [
    { id: 1, name: 'Product-1', price: 100 },
    { id: 2, name: 'Product-2', price: 200 },
    { id: 3, name: 'Product-3', price: 300 },
  ];
  
  const productListElement = document.getElementById('product-list');
  const cartListElement = document.getElementById('cart-list');
  const totalPriceElement = document.getElementById('total-price');
  
  let cart = [];
  
  function updateCart() {
    cartListElement.innerHTML = cart.length
      ? cart.map(item => `
        <div class="cart-item flex">
          <div class="text-bold">${item.name}</div> <div>${item.quantity} × ${item.price}</div>
        </div>
      `).join('')
      : 'No Product added to the cart';
  
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalPriceElement.textContent = total;
    updateQuantityButtons();
  }
  
  function addProductToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    updateCart();
  }
  
  function removeProductFromCart(productId) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
      cartItem.quantity -= 1;
      if (cartItem.quantity === 0) {
        cart = cart.filter(item => item.id !== productId);
      }
    }
    updateCart();
  }
  
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <div>${product.name}</div>
      <div>${product.price}</div>
      <div class="quantity">
        <button onclick="removeProductFromCart(${product.id})" disabled>-</button>
        <span id="quantity-${product.id}">0</span>
        <button onclick="addProductToCart(${product.id})">+</button>
      </div>
    `;
    productListElement.appendChild(productElement);
  });
  
  function updateQuantityButtons() {
    products.forEach(product => {
      const cartItem = cart.find(item => item.id === product.id);
      const quantity = cartItem ? cartItem.quantity : 0;
      document.getElementById(`quantity-${product.id}`).textContent = quantity;
      document.querySelector(`button[onclick="removeProductFromCart(${product.id})"]`).disabled = quantity === 0;
    });
  }
  
  updateCart();
  