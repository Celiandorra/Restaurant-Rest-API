let wrapper = document.getElementById("RestaurantWrapper");

let restoArray = [];

const url = "https://worldwide-restaurants.p.rapidapi.com/search";
const options = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "d67eafc11fmshe60f53b8d928453p119210jsn17042e8cc041",
    "X-RapidAPI-Host": "worldwide-restaurants.p.rapidapi.com",
  },
  body: new URLSearchParams({
    language: "en_US",
    location_id: "297704",
    currency: "USD",
    offset: "0",
  }),
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    restoArray = data.results.data;

    for (let index = 0; index < restoArray.length; index++) {
      const el = restoArray[index];

      let resto = `
      <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat3">
      <div class="th-product product-grid">
        <div class="product-img">
          <img
            src="${el.photo.images.medium.url}"
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
            >${el.dietary_restrictions[0].name}</a
          >
          <h3 class="product-title">
            <a href="shop-details.html">${el.name}</a>
          </h3>
          <span class="price">${el.price}</span>
          <div class="woocommerce-product-rating">
            <span class="count">(${el.num_reviews})</span>
            <div
              class="star-rating"
              role="img"
              aria-label="Rated 5.00 out of 5"
            >
              <span
                >Rated <strong class="rating">${el.rating}</strong> out of 5 based
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
