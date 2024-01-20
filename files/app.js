let showAllOptions = () => {
  let wrapper = document.getElementById("RestaurantWrapper");

  let restoArray = [];

  url = "http://localhost:3000/restaurants";

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      restoArray = data;

      for (let index = 0; index < restoArray.length; index++) {
        const el = restoArray[index];

        let resto = `
      <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat3">
      <div class="th-product product-grid" style="height:25em" >
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
};

// ! vegan OPTION CODE

let showVeganOptions = () => {
  let wrapper = document.getElementById("RestaurantWrapper");

  wrapper.innerHTML = "";

  let restoArray = [];

  url = "http://localhost:3000/restaurants/vegan";

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      restoArray = data;

      for (let index = 0; index < restoArray.length; index++) {
        const el = restoArray[index];

        let resto = `
      <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat3">
      <div class="th-product product-grid" style="height:25em;" >
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
         
          <h3 class="product-title">
            <a href="shop-details.html">${el.restaurant_name}</a>
          </h3>
          <span class="price">${el.price_range}</span>
          <div class="woocommerce-product-rating">
            <span class="count">(${el.num_reviews})</span>
            <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5">
              <span
                >Rated <strong class="rating">${el.restaurant_rating}</strong> out of 5 based
                on <span class="rating">${el.num_reviews}</span> customer rating
                </span>
            </div>
          </div>
        
          <div class="product-content">
           ${el.restaurant_address}
          </div>
          <div class="product-content">
          Delivery? ${el.delivery}
          </div>
          
        </div>
      </div>
    </div>
          `;
        wrapper.innerHTML += resto;
      }
    });
};

// ! vegetarian OPTION CODE

let showVegetarianOptions = () => {
  let wrapper = document.getElementById("RestaurantWrapper");

  wrapper.innerHTML = "";

  let restoArray = [];

  url = "http://localhost:3000/restaurants/vegetarian";

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      restoArray = data;

      for (let index = 0; index < restoArray.length; index++) {
        const el = restoArray[index];

        let resto = `
      <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat3">
      <div class="th-product product-grid" style="height:25em;" >
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
};

// ! halal OPTION CODE

let showHalalOptions = () => {
  let wrapper = document.getElementById("RestaurantWrapper");

  wrapper.innerHTML = "";

  let restoArray = [];

  url = "http://localhost:3000/restaurants/halal";

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      restoArray = data;

      for (let index = 0; index < restoArray.length; index++) {
        const el = restoArray[index];

        let resto = `
      <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat3">
      <div class="th-product product-grid" style="height:25em;" >
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
};

// ! gluten free OPTION CODE

let showGlutenFreeOptions = () => {
  let wrapper = document.getElementById("RestaurantWrapper");

  wrapper.innerHTML = "";

  let restoArray = [];

  url = "http://localhost:3000/restaurants/glutenfree";

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      restoArray = data;

      for (let index = 0; index < restoArray.length; index++) {
        const el = restoArray[index];

        let resto = `
      <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat3">
      <div class="th-product product-grid" style="height:25em;" >
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
};

// ! lactose free OPTION CODE

let showLactoseFreeOptions = () => {
  let wrapper = document.getElementById("RestaurantWrapper");

  wrapper.innerHTML = "";

  let restoArray = [];

  url = "http://localhost:3000/restaurants/lactosefree";

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      restoArray = data;

      for (let index = 0; index < restoArray.length; index++) {
        const el = restoArray[index];

        let resto = `
      <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat3">
      <div class="th-product product-grid" style="height:25em;" >
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
};

// ! Asian OPTION CODE

let showAsianOptions = () => {
  let wrapper = document.getElementById("RestaurantWrapper");

  wrapper.innerHTML = "";

  let restoArray = [];

  url = "http://localhost:3000/restaurants/asian";

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      restoArray = data;

      for (let index = 0; index < restoArray.length; index++) {
        const el = restoArray[index];

        let resto = `
      <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat3">
      <div class="th-product product-grid" style="height:25em;" >
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
};

// ! Mediterranean OPTION CODE

let showMediterraneanOptions = () => {
  console.log("itsa me Mario");
  let wrapper = document.getElementById("RestaurantWrapper");

  wrapper.innerHTML = "";

  let restoArray = [];

  url = "http://localhost:3000/restaurants/mediterranean";

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      restoArray = data;

      for (let index = 0; index < restoArray.length; index++) {
        const el = restoArray[index];

        let resto = `
      <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat3">
      <div class="th-product product-grid" style="height:25em;" >
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
};

// ! Palestinian OPTION CODE

let showPalestinianOptions = () => {
  let wrapper = document.getElementById("RestaurantWrapper");

  wrapper.innerHTML = "";

  let restoArray = [];

  url = "http://localhost:3000/restaurants/palestinian";

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      restoArray = data;

      for (let index = 0; index < restoArray.length; index++) {
        const el = restoArray[index];

        let resto = `
      <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat3">
      <div class="th-product product-grid" style="height:25em;" >
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
};

// ! American OPTION CODE

let showAmericanOptions = () => {
  let wrapper = document.getElementById("RestaurantWrapper");

  wrapper.innerHTML = "";

  let restoArray = [];

  url = "http://localhost:3000/restaurants/american";

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      restoArray = data;

      for (let index = 0; index < restoArray.length; index++) {
        const el = restoArray[index];

        let resto = `
      <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat3">
      <div class="th-product product-grid" style="height:25em;" >
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
};

// ! Tunisian OPTION CODE

let showTunisianOptions = () => {
  let wrapper = document.getElementById("RestaurantWrapper");

  wrapper.innerHTML = "";

  let restoArray = [];

  url = "http://localhost:3000/restaurants/tunisian";

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      restoArray = data;

      for (let index = 0; index < restoArray.length; index++) {
        const el = restoArray[index];

        let resto = `
      <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat3">
      <div class="th-product product-grid" style="height:25em;" >
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
};

// ! Mexiacan OPTION CODE

let showMexicanOptions = () => {
  let wrapper = document.getElementById("RestaurantWrapper");

  wrapper.innerHTML = "";

  let restoArray = [];

  url = "http://localhost:3000/restaurants/mexican";

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      restoArray = data;

      for (let index = 0; index < restoArray.length; index++) {
        const el = restoArray[index];

        let resto = `
      <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat3">
      <div class="th-product product-grid" style="height:25em;" >
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
};

// ! Italian OPTION CODE

let showItalianOptions = () => {
  let wrapper = document.getElementById("RestaurantWrapper");

  wrapper.innerHTML = "";

  let restoArray = [];

  url = "http://localhost:3000/restaurants/italian";

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      restoArray = data;

      for (let index = 0; index < restoArray.length; index++) {
        const el = restoArray[index];

        let resto = `
      <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat3">
      <div class="th-product product-grid" style="height:25em;" >
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
};

// ! Seafood OPTION CODE

let showSeafoodOptions = () => {
  let wrapper = document.getElementById("RestaurantWrapper");

  wrapper.innerHTML = "";

  let restoArray = [];

  url = "http://localhost:3000/restaurants/seafood";

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      restoArray = data;

      for (let index = 0; index < restoArray.length; index++) {
        const el = restoArray[index];

        let resto = `
      <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat3">
      <div class="th-product product-grid" style="height:25em;" >
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
};

// add favorite restaurants
function addToFavorites(restaurantId) {
  // Replace 'your-api-endpoint' with the actual API endpoint URL
  const apiUrl = "http://localhost:3000/restaurants/favorites";

  // Find the restaurant in the restaurants array by its ID
  const restaurantToAdd = restaurants.find(
    (restaurant) => restaurant.id === restaurantId
  );

  // Check if the restaurant was found
  if (restaurantToAdd) {
    // Check if the restaurant is not already in the favorites array
    if (!favorites.some((favorite) => favorite.id === restaurantId)) {
      // Make a POST request to add the restaurant to favorites
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurantToAdd),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to add restaurant to favorites.");
          }
          return response.json();
        })
        .then((data) => {
          favorites.push(data); // Assuming the API returns the added restaurant data
          console.log(`Added ${restaurantToAdd.name} to favorites.`);
        })
        .catch((error) => {
          console.error(error.message);
        });
    } else {
      console.log(`${restaurantToAdd.name} is already in favorites.`);
    }
  } else {
    console.log(`Restaurant with ID ${restaurantId} not found.`);
  }
}
