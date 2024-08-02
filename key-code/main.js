document.addEventListener('DOMContentLoaded', () => {
    const initialMessageElement = document.querySelector('.initial-message');
    const keyMessageElement = document.querySelector('.key-message');
    const keyElement = document.querySelector('.key');
    const keycodeElement = document.querySelector('.keycode');
    const keycodeContainer = document.querySelector('.keycode-container');

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        const keyCode = event.keyCode;

        keyElement.textContent = key;
        keycodeElement.textContent = keyCode;

        initialMessageElement.style.display = 'none';
        keyMessageElement.style.display = 'block';
        keycodeContainer.style.display = 'block';

        if (event.ctrlKey || event.metaKey) {
            keyElement.textContent = `Ctrl + ${key}`;
        }
        if (event.altKey) {
            keyElement.textContent = `Alt + ${key}`;
        }
        if (event.shiftKey) {
            keyElement.textContent = `Shift + ${key}`;
        }

        storeKeyHistory(key, keyCode);
    });
});


function storeKeyHistory(key, keyCode) {
    const historyContainer = document.querySelector('.history');
    const historyItem = document.createElement('div');
    historyItem.textContent = `Key: ${key}, Code: ${keyCode}`;
    historyContainer.appendChild(historyItem);
}
