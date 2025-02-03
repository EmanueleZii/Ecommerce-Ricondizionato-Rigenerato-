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
      url: 'img/xbox-one-s-12-1.jpg',
      category: 'console',
      price: 199.99,
    },
    {
      name: 'Pc Gaming',
      url: 'img/pc-gaming1.jpg',
      category: 'PcGaming',
      price: 799.99,
    },
    {
        name: 'Pc Gaming',
        url: 'img/pc-gaming2.jpg',
        category: 'PcGaming',
        price: 699.99,
      },
      {
        name: 'Pc Gaming',
        url: 'img/pc-gaming3.jpg',
        category: 'PcGaming',
        price: 899.99,
      },
      {
        name: 'Pc Gaming',
        url: 'img/pcgaming4.jpg',
        category: 'PcGaming',
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

  //Select Dom Elements
  const productWrapper = document.getElementById('products-wrapper');
  const checkboxes = document.querySelectorAll('.check');
  const filterContainer = document.getElementById('filters-container');
  const inputSearch = document.getElementById('search');
  const CartCount = document.getElementById('cart-count');

  // Init cart item count
let cartItemCount = 0;

// Init product element array
const productElements = [];

//loop over products and create element
products.forEach((product)=>{
    const productElement  = document.createElement('div');

    productElement.className = 'item space-y-2';
    productElement.innerHTML = ` 
                <!-- Contenitore immagine -->
                <p class="text-center font-bold">${product.name.toLocaleString()}</p>
                <div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl">
                    <img src="${product.url}" alt="${product.name}" class="w-full h-full object-cover">
                </div>
                <p class="text-center font-bold">Price: ${product.price.toLocaleString()}$ </p>
                <!-- Pulsante posizionato sotto -->
                <button class="w-full bg-blue-500 text-white font-bold px-6 py-2 rounded-lg transition duration-300 hover:bg-blue-600 cursor-pointer">
                    Buy Now!
                </button>';`;

                productElements.push(productElement);
                productWrapper.appendChild(productElement);
});
