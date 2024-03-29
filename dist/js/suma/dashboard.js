      // Fetch data from API
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          const productList = document.getElementById("product-list");

          // Iterate through each product in the API response
          data.forEach((product) => {
            // Create card element
            const card = document.createElement("div");
            card.classList.add(
              "col-md-3",
              "col-6",
              "mb-4",
              "d-flex",
              "justify-content-center"
            );

            // Construct card HTML
            card.innerHTML = `
                  <div class="card">
        <div class="image-container">
          <div class="first">
            <div class="d-flex justify-content-between align-items-center">
              <span class="discount">-25%</span>
              <span class="wishlist"><i class="fa fa-heart-o"></i></span>
            </div>
          </div>

          <img
            src="${product.image}"
            class="img-fluid rounded thumbnail-image"
          />
        </div>

        <div class="product-detail-container p-2">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="dress-name">${product.title}</h5>

            <div class="d-flex flex-column mb-2">
              <span class="new-price">$${product.price}</span>
              <small class="old-price text-right"><i class="fa fa-shopping-bag" aria-hidden="true">${product.rating.count}</i></small>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items-center pt-1">
            <div class="color-select d-flex">
              <input type="button" name="grey" class="btx creme" />
              <input type="button" name="red" class="btx red ml-2" />
              <input type="button" name="blue" class="btx blue ml-2" />
            </div>

            <div class="d-flex">
              <span class="item-size mr-2 btx" type="button">S</span>
              <span class="item-size mr-2 btx" type="button">M</span>
              <span class="item-size btx" type="button">L</span>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items-center pt-1">
            <div>
              <i class="fa fa-star-o rating-star"></i>
              <span class="rating-number">${product.rating.rate}</span>
            </div>

            <span class="buy">Beli <i class="fa fa-cart-plus" aria-hidden="true"></i></span>
          </div>
        </div>
      </div>
          `;

            // Append card to product list
            productList.appendChild(card);
          });
        });