// Funktion, um ein Produkt in den Warenkorb hinzuzufügen
function addToCart(productName, productPrice) {
    // Warenkorb aus dem LocalStorage laden
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Produkt zum Warenkorb hinzufügen
    cart.push({ name: productName, price: productPrice });

    // Warenkorb im LocalStorage speichern
    localStorage.setItem('cart', JSON.stringify(cart));

    // Benachrichtigung anzeigen
    alert(`${productName} wurde zum Warenkorb hinzugefügt!`);
}
// Funktion, um den Warenkorb auf der Warenkorb-Seite anzuzeigen
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    let total = 0;

    // Warenkorb-Elemente zurücksetzen
    cartItemsDiv.innerHTML = '';

    // Produkte aus dem Warenkorb anzeigen
    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <span>${item.name} - ${item.price.toFixed(2)}€</span>
            <button onclick="removeFromCart(${index})">Entfernen</button>
        `;
        cartItemsDiv.appendChild(cartItemDiv);
        total += item.price;
    });

    // Gesamtpreis anzeigen
    cartTotalDiv.innerText = `Gesamt: ${total.toFixed(2)}€`;
}

// Funktion, um ein Produkt aus dem Warenkorb zu entfernen
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Produkt entfernen
    localStorage.setItem('cart', JSON.stringify(cart)); // Warenkorb aktualisieren
    displayCart(); // Warenkorb neu anzeigen
}

// Beim Laden der Warenkorb-Seite Warenkorb anzeigen
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cart-items')) {
        displayCart();
    }
});
// Funktion, um den Kauf abzuschließen
function completePurchase() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        alert('Der Warenkorb ist leer. Bitte fügen Sie Produkte hinzu.');
        return;
    }

    // Kauf abschließen: Warenkorb leeren
    localStorage.removeItem('cart'); // LocalStorage zurücksetzen
    alert('Vielen Dank für Ihren Einkauf! Ihre Bestellung wurde erfolgreich abgeschlossen.');

    // Warenkorb aktualisieren
    displayCart();
}

// Event-Listener für den Kauf-Button
document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('buy-button');
    if (buyButton) {
        buyButton.addEventListener('click', completePurchase);
    }
});
// Wechseln der Tabs
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');

    document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
    document.querySelector(`.tab-button[onclick="switchTab('${tabId}')"]`).classList.add('active');
}

// Thumbnail-Click-Funktion
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
        document.getElementById('main-image').src = this.src;
    });
});
const productOptions = {
    darts: ["22g", "24g", "26g"],
    flights: ["Rot", "Blau", "Schwarz"],
    shafts: ["Kurz", "Mittel", "Lang"]
};

function loadOptions(productType) {
    const dropdown = document.getElementById('options');
    dropdown.innerHTML = ""; 

  
    productOptions[productType].forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        dropdown.appendChild(optionElement);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    loadOptions('darts'); 
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("support-form");
    const confirmation = document.getElementById("confirmation");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        
        console.log("Betreff:", subject);
        console.log("Nachricht:", message);

       
        confirmation.classList.remove("hidden");

       
        form.reset();
    });
});
