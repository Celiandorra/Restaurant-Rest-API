# 🍽️ Restaurant REST API

## Overview

This project is a **RESTful API** that serves restaurant data including:
- 🏷️ Name
- ⭐ Rating
- 💵 Price Range
- 📝 Number of Reviews
- 📍 Address

Users can query the API with various **filters** and **categories** to discover restaurants that match specific criteria. This project was developed as part of the **Web Services Course**.

---

## 🌐 Live Demo

-  **Hosted on Vercel:**  
  [https://restaurant-rest-api-two.vercel.app/](https://restaurant-rest-api-two.vercel.app/)

---

##  Features

-  RESTful architecture
-  Filtering by name, category, rating, price, etc.
-  JSON response format
-  Status codes for success and error handling
-  Modular and clean structure for maintainability

---

##  Documentation

- **Project Report:**  
  [Overleaf Report](https://www.overleaf.com/read/vdmtkcrwvxmg#720e9e)

- **Presentation Slides:**  
  [Overleaf Slides](https://www.overleaf.com/read/qtfzqmcdngws#0ae18e)

- **Google Drive (Source Files, Data, etc.):**  
  [Project Drive Folder](https://drive.google.com/drive/folders/1j3JypfTG28rAndtkRtnxbGGqD-1WSCYl?usp=sharing)

---

## Technologies Used

- **Node.js / Express.js** – for building the REST API
- **Vercel** – for deployment
- **JSON** – for API responses
- **Overleaf** – for documentation & slides

---

## 🚀 Getting Started (Local Development)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/restaurant-rest-api.git
   cd restaurant-rest-api
    ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **API available at:**

   ```
   http://localhost:3000/api/restaurants
   ```

---

## 🔍 Example Endpoints

* `/api/restaurants` – List all restaurants
* `/api/restaurants?category=Italian` – Filter by category
* `/api/restaurants?minRating=4` – Filter by rating
* `/api/restaurants?price=2` – Filter by price range

---

