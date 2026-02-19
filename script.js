function recommendMovie() {
    const genre = document.getElementById('genre').value;
    const mood = document.getElementById('mood').value;

    let recommendation = "";

    if (genre === "action" && mood === "exciting") {
        recommendation = "🔥 Try **Mad Max: Fury Road**!";
    } else if (genre === "comedy" && mood === "fun") {
        recommendation = "🤣 Watch **Superbad**!";
    } else if (genre === "romance" && mood === "deep") {
        recommendation = "💘 How about **The Notebook**?";
    } else if (genre === "sci-fi" && mood === "deep") {
        recommendation = "🧠 Check out **Interstellar**!";
    } else {
        recommendation = "🎥 Try **Inception** — it’s great!";
    }

    document.getElementById('result').innerText = recommendation;
}
