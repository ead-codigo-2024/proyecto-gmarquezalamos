let currentIndex = 0;

const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showItem(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

function nextText() {
    currentIndex = (currentIndex + 1) % totalItems; // Ciclo hacia adelante
    showItem(currentIndex);
}

function prevText() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Ciclo hacia atrás
    showItem(currentIndex);
}

// Mostrar el primer elemento al cargar
showItem(currentIndex);