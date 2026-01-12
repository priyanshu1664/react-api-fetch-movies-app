<<<<<<< HEAD
# react-api-fetch-movies-app
=======
# 🎬 Fetch Movies App

A simple **React CRUD application** that allows users to **add, fetch, edit, and delete movies** using **Firebase Realtime Database**. The app follows clean React patterns and is deployed on **Netlify**.

---

## 🚀 Live Demo

👉 Deployed on Netlify (add your URL here)

```
https://your-site-name.netlify.app
```

---

## 📌 Features

- ✅ Fetch movies from Firebase
- ➕ Add new movies
- ✏️ Edit existing movies
- 🗑 Delete movies
- ⏳ Loading spinner while fetching data
- ❌ Error handling for failed requests
- 🎨 Black & Gold themed UI (movie-style)
- 📱 Responsive design

---

## 🛠 Tech Stack

- **Frontend:** React (Hooks)
- **State Management:** useState, useEffect, useCallback
- **Backend:** Firebase Realtime Database
- **Styling:** CSS Modules
- **Deployment:** Netlify

---

## 📂 Project Structure

```
fetch-movies/
│
├── src/
│   ├── components/
│   │   ├── AddMovie.js
│   │   ├── EditMovie.js
│   │   ├── Movie.js
│   │   ├── MoviesList.js
│   │   └── LoadingSpinner.js
│   │
│   ├── UI/
│   │   └── Header.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── public/
│   └── _redirects
│
├── package.json
└── README.md
```

---

## 🔥 Firebase Configuration

This app uses **Firebase Realtime Database**.

Example endpoint:

```
https://fetch-http-22524-default-rtdb.firebaseio.com/movies.json
```

## 🧪 Sample Movie Data

```js
{
  title: "Inception",
  openingText: "A skilled thief enters dreams to steal secrets.",
  releaseDate: "2010-07-16"
}
```

---

## ✏️ CRUD Operations Explained

### ➕ Add Movie

- Uses **POST** request
- Adds movie to Firebase

### 📥 Fetch Movies

- Uses **GET** request
- Loads all movies on app load

### ✏️ Edit Movie

- Uses **PATCH** request
- Updates only modified fields

### 🗑 Delete Movie

- Uses **DELETE** request
- Removes movie by ID

---

## 🌍 Deploying on Netlify

### Build Settings

**Create React App**

| Setting           | Value           |
| ----------------- | --------------- |
| Build Command     | `npm run build` |
| Publish Directory | `build`         |

### Redirects (for routing)

Create `public/_redirects`

```
/*    /index.html   200
```

---

## 🎯 Interview Highlights

- Uses **React Hooks** effectively
- Clean component separation
- Firebase CRUD integration
- Optimistic UI updates
- Real-world deployment on Netlify

---

## 🧑‍💻 Author

**Priyanshu Singh**

---

## ⭐ Future Improvements

- Search & filter movies
- Movie ratings
- Confirmation modal before delete
- Authentication
- Pagination

---

## 📜 License

This project is for **learning and demonstration purposes**.
>>>>>>> 0c97926 (Fetch Movies app ready for deploy)
