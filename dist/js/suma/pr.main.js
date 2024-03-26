let apiKey = null;

function showApiKeyPrompt() {
  apiKey = prompt(
    "Masukkan kunci API CRUD CRUD Anda (biarkan kosong untuk menggunakan default):"
  );
  if (apiKey === null || apiKey.trim() === "") {
    apiKey = "37bc4776acb04d39b066dfd601b72172"; 
  }
  document.getElementById("product-form").style.display = "block";
}

function getApiUrl() {
  return "https://crudcrud.com/api/" + apiKey + "/products";
}

document
  .getElementById("product-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const productName = document
      .getElementById("productName")
      .value.trim();
    const productSize = document.getElementById("productSize").value;
    const productGender = document.getElementById("productGender").value;
    const productType = document.getElementById("productType").value;
    const productPrice = parseFloat(
      document.getElementById("productPrice").value.trim()
    );

    if (productName && !isNaN(productPrice)) {
      const newProduct = {
        name: productName,
        size: productSize,
        gender: productGender,
        type: productType,
        price: productPrice,
      };

      fetch(getApiUrl(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Produk berhasil ditambahkan!");
          document.getElementById("productName").value = "";
          document.getElementById("productPrice").value = "";
        })
        .catch((error) => console.error("Kesalahan menambahkan produk:", error));
    } else {
      alert("Masukkan informasi produk yang valid.");
    }
  });