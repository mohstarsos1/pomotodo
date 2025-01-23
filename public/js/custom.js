let themeChanger = document.getElementById("themeChanger");
let currentTheme = localStorage.getItem("themeMode") || "light";
document.documentElement.setAttribute("data-bs-theme", currentTheme);

themeChanger.addEventListener("click", () => {
    let newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("themeMode", newTheme);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    currentTheme = newTheme;
});
