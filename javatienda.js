// Selecciona el botón del carrito y el contenedor de productos del carrito
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

// Añade un evento de clic al botón del carrito para mostrar/ocultar el contenedor de productos del carrito
btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */

// Selecciona elementos del DOM relacionados con la manipulación del carrito
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');
const productsList = document.querySelector('.container-items');
const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');
const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

// Array para almacenar los productos del carrito
let allProducts = [];

// Evento de clic en la lista de productos
productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;

        // Información del producto a agregar al carrito
        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };

        // Verifica si el producto ya está en el carrito
        const exists = allProducts.some(product => product.title === infoProduct.title);

        if (exists) {
            // Si el producto ya existe, actualiza la cantidad
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            // Si el producto no existe, agrégalo al array
            allProducts = [...allProducts, infoProduct];
        }

        // Muestra la información actualizada en el HTML
        showHTML();
    }
});

// Evento de clic en el carrito para eliminar productos
rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        // Filtra los productos eliminando el seleccionado
        allProducts = allProducts.filter(product => product.title !== title);

        // Muestra la información actualizada en el HTML
        showHTML();
    }
});

// Función para mostrar la información del carrito en el HTML
const showHTML = () => {
    if (!allProducts.length) {
        // Si no hay productos, muestra un mensaje de carrito vacío
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        // Si hay productos, muestra la información del carrito
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }

    // Limpia el contenido actual en el HTML
    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    // Itera sobre todos los productos y crea elementos en el HTML
    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

        rowProduct.append(containerProduct);

        // Calcula el total y la cantidad total de productos
        total = total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
    });

    // Actualiza los valores en el HTML
    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
};

// Función para redireccionar a la página de registro de compra
function redireccionar() {
    window.location.href = 'registrocompra.html';
}

// Función para redireccionar a la página de inicio
function redireccionar2() {
    window.location.href = 'index.html';
}
