# 🎬 Movie Recommender Quiz

## Overview
The **Movie Recommender Quiz** is a simple, interactive web app that suggests movies based on the genre and mood you choose.  
It’s built using **HTML, CSS, and JavaScript** and runs directly in your mobile or desktop browser — no apps, no databases, no CSVs needed.  

This project demonstrates **front-end web development skills**, **user interaction**, and **conditional logic** in a practical, recruiter-friendly way.  

---

## 🛠️ How It Works
1. Choose a **genre**: Action, Comedy, Romance, or Sci-Fi  
2. Choose a **mood**: Fun, Deep, or Exciting  
3. Tap **“Get Recommendation”**  
4. The quiz instantly shows a movie recommendation based on your choices  

All logic is handled inside the **embedded JavaScript**, which reads the selected options and outputs a personalized recommendation.  

---

## 💻 Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Movie Recommender Quiz</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
      background: #f0f0f0;
    }
    select, button {
      margin: 10px;
      padding: 10px;
      font-size: 18px;
    }
    #result {
      font-size: 20px;
      margin-top: 20px;
      color: #333;
    }
  </style>
</head>
<body>

  <h1>🎬 Movie Recommender</h1>

  <label>Choose Genre:</label>
  <select id="genre">
      <option value="action">Action</option>
      <option value="comedy">Comedy</option>
      <option value="romance">Romance</option>
      <option value="sci-fi">Sci‑Fi</option>
  </select>

  <label>Choose Mood:</label>
  <select id="mood">
      <option value="fun">Fun</option>
      <option value="deep">Deep</option>
      <option value="exciting">Exciting</option>
  </select>

  <button onclick="recommendMovie()">Get Recommendation</button>

  <p id="result"></p>

  <script>
    function recommendMovie() {
      const genre = document.getElementById('genre').value;
      const mood = document.getElementById('mood').value;

      let recommendation = "";

      if (genre === "action" && mood === "exciting") {
          recommendation = "Try Mad Max: Fury Road!";
      } else if (genre === "comedy" && mood === "fun") {
          recommendation = "Watch Superbad!";
      } else if (genre === "romance" && mood === "deep") {
          recommendation = "How about The Notebook?";
      } else if (genre === "sci-fi" && mood === "deep") {
          recommendation = "Check out Interstellar!";
      } else {
          recommendation = "Try Inception — it’s great!";
      }

      document.getElementById('result').innerText = recommendation;
    }
  </script>

</body>
</html>
