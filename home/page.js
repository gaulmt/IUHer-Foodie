function showTab(tabId) {
    document.getElementById("infor").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("desc").style.display = "none";
    if (tabId === "info") {
        document.getElementById("infor").style.display = "flex";
    } else if (tabId === "menu") {
        document.getElementById("menu").style.display = "block";
    } else if (tabId === "desc") {
        document.getElementById("desc").style.display = "block";
    }
    document.querySelectorAll(".page-container-select-button")
        .forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}
