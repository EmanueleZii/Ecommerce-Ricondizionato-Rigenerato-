const products = [
    {
      name: 'Sony Playstation 5',
      url: 'img/pc-gaming1.jpg',
      category: 'console',
      price: 499.99,
    },
    {
      name: 'ps4',
      url: 'img/ps4.jpg',
      category: 'console',
      price: 299.99,
    },
    {
      name: 'xbox one',
      url: 'img/xboxone-940x940.jpg',
      category: 'console',
      price: 349.99,
    },
    {
      name: 'xbox one s',
      url: 'img/XboxOneS.png',
      category: 'console',
      price: 199.99,
    },
    {
      name: 'Pc Gaming',
      url: 'img/pc-gaming1.jpg',
      category: 'pcgaming',
      price: 799.99,
    },
    {
        name: 'Pc Gaming',
        url: 'img/pc-gaming2.jpg',
        category: 'pcgaming',
        price: 699.99,
      },
      {
        name: 'Pc Gaming',
        url: 'img/pc-gaming3.jpg',
        category: 'pcgaming',
        price: 899.99,
      },
      {
        name: 'Pc Gaming',
        url: 'img/pcgaming4.png',
        category: 'pcgaming',
        price: 699.99,
      },
      {
        name: 'Thinkpad E14',
        url: 'img/ThinkPad E14.JPG',
        category: 'laptop',
        price: 499.99,
      },
      {
        name: 'Thinkpad x13s',
        url: 'img/lenovo-thinkpad-x13s.jpg',
        category: 'laptop',
        price: 499.99,
      },
      {
        name: 'Thinkpad E16 Gen',
        url: 'img/lenovo_21jn0040us_16_thinkpad_e16_gen.jpg',
        category: 'laptop',
        price: 499.99,
      },
      {
        name: 'Macbook pro 2016',
        url: 'img/16-macbook-pro-8.jpg',
        category: 'apple',
        price: 799.99,
      },
      {
        name: 'Macbook Pro 14-inch',
        url: 'img/img-MacBook-Pro-Retina-14-Inch.jpg',
        category: 'apple',
        price: 899.99,
      },
      {
        name: 'Macbook Pro M2',
        url: 'img/MacbookPro-m2.jpg',
        category: 'apple',
        price: 899.99,
      },
      {
        name: 'Macbook 2016',
        url: 'img/MacBook-2016.jpg',
        category: 'apple',
        price: 699.99,
      },
      {
        name: 'GoPro Hero 11',
        url: 'img/GoPro_HERO11.jpg',
        category: 'cameras',
        price: 599.99,
      },
      {
        name: 'GoPro Hero 8',
        url: 'img/GoPro-HERO8.jpeg',
        category: 'cameras',
        price: 399.99,
      },
      {
        name: 'GoPro',
        url: 'img/gp-chdhx-111-cn_01.jpg',
        category: 'cameras',
        price: 399.99,
      },
  ];

// Get DOM elements
const productsWrapper = document.getElementById('products-wrapper');
const checkboxes = document.querySelectorAll('.check');
const filtersContainer = document.getElementById('filters-container');
const searchInput = document.getElementById('search');
const cartButton = document.getElementById('cart-button');
const cartCount = document.getElementById('cart-count');

// Initialize cart item count
let cartItemCount = 0;

// Initialize products
const productElements = [];

// Loop over the products and create the product elements
products.forEach((product) => {
  const productElement = createProductElement(product);
  productElements.push(productElement);
  productsWrapper.appendChild(productElement);
});

// Add filter event listeners
filtersContainer.addEventListener('change', filterProducts);
searchInput.addEventListener('input', filterProducts);

// Create product element
function createProductElement(product) {
  const productElement = document.createElement('div');

  productElement.className = 'item space-y-2';

  productElement.innerHTML = `<div
  class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl"
>
  <img
    src="${product.url}"
    alt="${product.name}"
    class="w-full h-full object-cover"
  />
  <button class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0"
    >Add To Cart</button
  >
</div>
<p class="text-xl">${product.name}</p>
<strong>$${product.price.toLocaleString()}</strong>`;

  productElement
    .querySelector('.status')
    .addEventListener('click', updateCart);

  return productElement;
}

// Toggle add/remove from cart
function updateCart(e) {
  const statusEl = e.target;

  if (statusEl.classList.contains('added')) {
    // Remove from cart
    statusEl.classList.remove('added');
    statusEl.innerText = 'Add To Cart';
    statusEl.classList.remove('bg-red-600');
    statusEl.classList.add('bg-gray-800');

    cartItemCount--;
  } else {
    // Add to cart
    statusEl.classList.add('added');
    statusEl.innerText = 'Remove From Cart';
    statusEl.classList.remove('bg-gray-800');
    statusEl.classList.add('bg-red-600');

    cartItemCount++;
  }

  // Update cart item count
  cartCount.innerText = cartItemCount.toString();
}

// Filter products by search or checkbox
function filterProducts() {
  // Get search term
  const searchTerm = searchInput.value.trim().toLowerCase();
  // Get checked categories
  const checkedCategories = Array.from(checkboxes)
    .filter((check) => check.checked)
    .map((check) => check.id);

  // Loop over products and check for matches
  productElements.forEach((productElement, index) => {
    const product = products[index];

    // Check to see if product matches the search or checked items
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);
    const isInCheckedCategory =
      checkedCategories.length === 0 ||
      checkedCategories.includes(product.category);

    // Show or hide product based on matches
    if (matchesSearchTerm && isInCheckedCategory) {
      productElement.classList.remove('hidden');
    } else {
      productElement.classList.add('hidden');
    }
  });
}
