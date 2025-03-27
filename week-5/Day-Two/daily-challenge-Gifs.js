const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gif-form");
const searchInput = document.getElementById("search-input");
const gifContainer = document.getElementById("gif-container");
const deleteAllBtn = document.getElementById("delete-all-btn");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const searchTerm = searchInput.value.trim();
    if (!searchTerm) return;

    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${searchTerm}&api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const gifUrl = data.data.images.original.url;

        appendGif(gifUrl);
    } catch (error) {
        console.error("Error fetching GIF:", error);
    }
});

// func to create && append a GIF 
function appendGif(url) {
    const gifWrapper = document.createElement("div");
    gifWrapper.classList.add("gif-wrapper");

    const gifImg = document.createElement("img");
    gifImg.src = url;
    gifImg.alt = "random GIF";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => gifWrapper.remove());

    gifWrapper.appendChild(gifImg);
    gifWrapper.appendChild(deleteBtn);
    gifContainer.appendChild(gifWrapper);
}

// deleting all
deleteAllBtn.addEventListener("click", () => {
    gifContainer.innerHTML = "";
});
