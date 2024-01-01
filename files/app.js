let wrapper = document.getElementById("RestaurantWrapper");

let restoArray = [];


url = "http://localhost:3000/restaurants";

fetch(url,{
  method: "GET",
  headers: {
    'Accept':'application/json',
    'Access-Control-Allow-Origin':'*',
    "Content-Type": "application/json",
  },  
})
  .then((response) => response.json())
  .then((data) => {
    restoArray = data;

    for (let index = 0; index < restoArray.length ; index++) {
      const el = restoArray[index];

      let resto = `
      <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat3">
      <div class="th-product product-grid">
        <div class="product-img">
          <img
            src="${el.image_url}"
            alt="Product Image"
          />
          <span class="product-tag">Hot</span>
          <div class="actions">
            <a href="#QuickView" class="icon-btn popup-content"
              ><i class="far fa-eye"></i
            ></a>
            <a href="cart.html" class="icon-btn"
              ><i class="far fa-cart-plus"></i
            ></a>
            <a href="wishlist.html" class="icon-btn"
              ><i class="far fa-heart"></i
            ></a>
          </div>
        </div>
        <div class="product-content">
          <a href="shop-details.html" class="product-category"
            >Vegetarian?${el.vegetarian_friendly}</a
          >
          <h3 class="product-title">
            <a href="shop-details.html">${el.restaurant_name}</a>
          </h3>
          <span class="price">${el.price_range}</span>
          <div class="woocommerce-product-rating">
            <span class="count">(${el.num_reviews})</span>
            <div
              class="star-rating"
              role="img"
              aria-label="Rated 5.00 out of 5"
            >
              <span
                >Rated <strong class="rating">${el.restaurant_rating}</strong> out of 5 based
                on <span class="rating">${el.num_reviews}</span> customer rating</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
          `;
      wrapper.innerHTML += resto;
    }
  });