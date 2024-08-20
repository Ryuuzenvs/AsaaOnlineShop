// toggle class active
const navbarNav = document.querySelector(".nav-menu");

// ketika menu diklik
document.querySelector("#ham-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click diluar side bire untuk menghilangkan menu
const hamMenu = document.querySelector("#ham-menu");

document.addEventListener("click", function (e) {
  if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// toggle class active
const shopingCart = document.querySelector(".shopping-cart");

// ketika shoping cart diklik
document.querySelector("#shopping-cart").onclick = () => {
  shopingCart.classList.toggle("active");
};

// click diluar side bire untuk menghilangkan menu
const areaShoppingCart = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (!areaShoppingCart.contains(e.target) && !shopingCart.contains(e.target)) {
    shopingCart.classList.remove("active");
  }
});

// ... (kode JavaScript Anda yang sudah ada)

// Fungsi untuk memperbarui jumlah produk
function updateQuantity(productId, isIncrease) {
  // Temukan elemen yang akan diupdate
  const quantityElement = document.querySelector(
    `.shopping-cart-item[data-product-id="${productId}"] .quantity`
  );
  const currentQuantity = parseInt(quantityElement.textContent);

  // Perbarui jumlah
  let newQuantity = isIncrease ? currentQuantity + 1 : currentQuantity - 1;
  quantityElement.textContent = newQuantity;

  // Batasi jumlah minimum menjadi 0
  newQuantity = isIncrease
    ? currentQuantity + 1
    : Math.max(currentQuantity - 1, 0);
  quantityElement.textContent = newQuantity;

  // Hitung total harga semua produk
  const allProductItems = document.querySelectorAll(".shopping-cart-item");
  let total = 0;
  allProductItems.forEach((item) => {
    const quantityElement = item.querySelector(".quantity");
    const priceElement = item.querySelector(".product-price");

    // Pastikan nilai quantity dan price adalah angka
    const quantity = parseInt(quantityElement.textContent);
    const price = parseFloat(priceElement.textContent.replace("Rp ", ""));

    if (!isNaN(quantity) && !isNaN(price)) {
      total += quantity * price;
    }
  });

  // Perbarui elemen total harga
  const totalPriceElement = document.querySelector(".total-price span");
  totalPriceElement.textContent = `Rp ${total.toFixed(2)}`;
}

// Tambahkan event listener ke tombol tambah dan kurang
const decreaseButtons = document.querySelectorAll(".decrease-btn");
decreaseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.closest(".shopping-cart-item").dataset.productId;
    updateQuantity(productId, false);
  });
});

const increaseButtons = document.querySelectorAll(".increase-btn");
increaseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.closest(".shopping-cart-item").dataset.productId;
    updateQuantity(productId, true);
  });
});

const body = document.body;
const footer = document.querySelector(".footer");
const navbar = document.querySelector(".nav-container");
const hero1 = document.querySelector(".img-responsive");
const hero2 = document.querySelector(".img-responsive1");

function setDarkMode(isDark) {
  // Set properti CSS sesuai keinginan Anda
  document.body.classList.toggle("darkmode", isDark);
  if (isDark) {
    body.classList.toggle("active");
    footer.classList.toggle("active");
    navbar.classList.toggle("active");
    hero1.classList.toggle("active");
    hero2.classList.toggle("active");
    // // Ubah ke tema gelap
    // root.style.setProperty('--utama1', '#010101');
    // root.style.setProperty('--utama2', '#f0f0f0');
  } else {
    // Ubah ke tema terang
    // root.style.setProperty('--utama1', '#ff7f00');
    // root.style.setProperty('--utama2', '#333');
  }
}
