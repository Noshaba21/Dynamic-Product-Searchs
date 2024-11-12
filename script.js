const products = [{
    name: "Laptop",
    inStock: true
},
{
    name: "Smartphone",
    inStock: false
},
{
    name: "Headphones",
    inStock: true
},
{
    name: "Monitor",
    inStock: true
},
{
    name: "Keyboard",
    inStock: false
},
{
    name: "Mouse",
    inStock: true
},
{
    name: "Tablet",
    inStock: false
},
{
    name: "USB Drive",
    inStock: true
},
{
    name: "Power Bank",
    inStock: false
},
{
    name: "Bluetooth Speaker",
    inStock: true
},
{
    name: "Charger",
    inStock: false
},
{
    name: "Webcam",
    inStock: true
},
{
    name: "Hard Disk",
    inStock: false
},
{
    name: "Smartwatch",
    inStock: true
},
{
    name: "Graphics Card",
    inStock: false
},
{
    name: "Router",
    inStock: true
},
{
    name: "Flashlight",
    inStock: false
},
{
    name: "Microphone",
    inStock: true
},
{
    name: "Tripod",
    inStock: false
},
{
    name: "VR Headset",
    inStock: true
},
{
    name: "Drone",
    inStock: false
},
{
    name: "Smart Thermostat",
    inStock: true
},
{
    name: "Gaming Console",
    inStock: false
},
{
    name: "Electric Kettle",
    inStock: true
}
];

const displayProducts = (query = "") => {
const productContainer = document.getElementById("productContainer");
productContainer.innerHTML = ""; 

const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
);

filteredProducts.forEach(product => {
    const productButton = document.createElement("button");
    productButton.className = "product-button";

    const regex = new RegExp(`(${query})`, "i");
    const highlightedName = product.name.replace(regex, `<span class="highlight">$1</span>`);

    productButton.innerHTML = `${highlightedName} 
    <span class="stock-status ${product.inStock ? "stock-in" : "stock-out"}">
      ${product.inStock ? "In Stock" : "Out of Stock"}
    </span>`;

    if (!product.inStock) {
        productButton.classList.add("out-of-stock");
        productButton.disabled = true;
    }

    productContainer.appendChild(productButton);
});

if (filteredProducts.length === 0) {
    productContainer.innerHTML = "<p>No products found</p>";
}
};
document.getElementById("searchButton").addEventListener("click", () => {
const query = document.getElementById("searchInput").value;
displayProducts(query);
});
document.getElementById("searchInput").addEventListener("keyup", (e) => {
const query = e.target.value;
displayProducts(query);
});
displayProducts();
  