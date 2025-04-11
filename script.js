// script.js

// Light/Dark Mode Toggle const toggleBtn = document.createElement("button"); toggleBtn.textContent = "Toggle Theme"; toggleBtn.style.position = "fixed"; toggleBtn.style.top = "20px"; toggleBtn.style.right = "20px"; toggleBtn.style.padding = "10px 20px"; toggleBtn.style.background = "#00f0ff"; toggleBtn.style.color = "#000"; toggleBtn.style.border = "none"; toggleBtn.style.borderRadius = "10px"; toggleBtn.style.cursor = "pointer"; toggleBtn.style.zIndex = "1000"; document.body.appendChild(toggleBtn);

let darkMode = true; toggleBtn.addEventListener("click", () => { darkMode = !darkMode; document.body.style.background = darkMode ? "linear-gradient(to right, #0f2027, #203a43, #2c5364)" : "linear-gradient(to right, #ffffff, #e3f2fd, #bbdefb)"; document.body.style.color = darkMode ? "#f0f0f0" : "#000"; toggleBtn.style.background = darkMode ? "#00f0ff" : "#000"; toggleBtn.style.color = darkMode ? "#000" : "#fff"; });

// Scroll Progress Indicator const scrollBar = document.createElement("div"); scrollBar.style.position = "fixed"; scrollBar.style.top = "0"; scrollBar.style.left = "0"; scrollBar.style.height = "5px"; scrollBar.style.background = "#00f0ff"; scrollBar.style.zIndex = "1000"; document.body.appendChild(scrollBar);

window.addEventListener("scroll", () => { const scrollTop = document.documentElement.scrollTop; const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; const scrollPercent = (scrollTop / scrollHeight) * 100; scrollBar.style.width = ${scrollPercent}%; });

// Smooth Fade Effects on Load window.onload = () => { document.querySelectorAll("section").forEach((section, index) => { section.style.opacity = 0; section.style.transform = "translateY(30px)"; setTimeout(() => { section.style.transition = "all 0.8s ease-in-out"; section.style.opacity = 1; section.style.transform = "translateY(0)"; }, 300 * index); }); };
