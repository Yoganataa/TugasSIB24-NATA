async function fetchProductData() {
  const response = await fetch(
    "https://crudcrud.com/api/37bc4776acb04d39b066dfd601b72172/products"
  );
  const data = await response.json();
  const tableBody = document.querySelector("#product-table tbody");
  tableBody.innerHTML = "";

  data.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                      <td>${product.name}</td>
                      <td>${product.size}</td>
                      <td>${product.gender}</td>
                      <td>${product.type}</td>
                      <td>${product.price}</td>
                  `;
    tableBody.appendChild(row);
  });
}
fetchProductData();
