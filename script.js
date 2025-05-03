 // Load user preference on page load
 document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
});

// Theme toggle function
document.getElementById("themeBtn").addEventListener("click", () => {
    const body = document.body;
    body.classList.toggle("dark");

    // Save theme preference
    const theme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);

    // Trigger animation
    body.classList.add("animate-bg");
    setTimeout(() => {
        body.classList.remove("animate-bg");
    }, 1000);
});