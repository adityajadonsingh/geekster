function getRandomTime() {
    return Math.floor(Math.random() * 5000) + 2000;
}

function getRandomOrderId() {
    return Math.floor(Math.random() * 1000) + 100;
}

document.getElementById('order-button').addEventListener('click', function () {
    const selectedItems = [];
    document.querySelectorAll('.food-checkbox').forEach(checkbox => {
        if (checkbox.checked) {
            selectedItems.push(checkbox.value);
        }
    });

    if (selectedItems.length === 0) {
        alert('Please select at least one item.');
        return;
    }

    const orderButton = document.getElementById('order-button');
    const foodImage = document.getElementById('food-image');
    const orderIdElement = document.getElementById('order-id');
    const orderIdValueElement = document.getElementById('order-id-value');

    orderButton.disabled = true;
    foodImage.style.display = 'none';
    orderIdElement.style.display = 'none';

    new Promise((resolve) => {
        setTimeout(resolve, getRandomTime());
    }).then(() => {
        const orderId = getRandomOrderId();
        orderIdValueElement.textContent = orderId;
        orderIdElement.style.display = 'block';

        const foodToShow = selectedItems[Math.floor(Math.random() * selectedItems.length)];
        let foodImageUrl = '';

        if (foodToShow === 'Burger') {
            foodImageUrl = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60';
        } else if (foodToShow === 'Fries') {
            foodImageUrl = 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60';
        } else if (foodToShow === 'Drink') {
            foodImageUrl = 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60';
        } else {
            foodImageUrl = 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60';
        }

        foodImage.src = foodImageUrl;
        foodImage.style.display = 'block';
        orderButton.disabled = false;
    });
});
