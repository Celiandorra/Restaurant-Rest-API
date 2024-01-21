function changeColor(clickedButtonId) {
  // Get all buttons with the common classes
  var buttons = document.querySelectorAll('.th-btn.tab-btn');

  // Loop through all buttons
  buttons.forEach(function(button) {
    // Check if the button is the clicked one
    if (button.id === clickedButtonId) {
      // Change class to 'th-btn tab-btn active'
      button.classList.add('active');
    } else {
      // Change class to 'th-btn tab-btn' for other buttons
      button.classList.remove('active');
    }
  });
}




let showAllOptions = () => {
  //check user
  checkLogin();

  // posts
  let wrapper = document.getElementById("RestaurantWrapper");

  wrapper.innerHTML = "";

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

let registerUser = () => {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const pword = document.getElementById("pword").value;

  // Make a POST request to your server
  fetch("users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, pword }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("User registered successfully:", data);
      alert("Registered successfulluy ! Please login now !");

      // Optionally, redirect to a success page or update the UI
    })
    .catch((error) => {
      console.error("Error registering user:", error);
      alert("Error registering !");
      // Handle errors, show an error message
    });
};

let loginUser = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Make a POST request to your server
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("User logged in successfully:", data);
      localStorage.setItem("CURRENT_USER", username);
      alert("Logged in successfulluy !");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error logging in user:", error);
      alert("Error logging in ! Please check your info !");
      // Handle errors, show an error message
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

// add favorite restaurants
function addToFavorites(restaurantId) {
  Url = "http://localhost:3000/restaurants/favorites";

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

function checkLogin() {
  if (localStorage.getItem("CURRENT_USER") == null) {
    document.getElementById("buttonlogin").hidden = false;
    document.getElementById("buttonuser").hidden = true;
  } else {
    document.getElementById("buttonlogin").hidden = true;
    document.getElementById("buttonuser").hidden = false;
  }
}
