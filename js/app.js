const fetchGif = async () => {
    const gifContainer = document.querySelector(".gifContainer");
    const myKey = "Ik2y6SA8vp6BDUyFHAH8wOjGYHI8hptc";
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${myKey}`;
    gifContainer.innerHTML = "";
    gifContainer.setAttribute("aria-busy", true);

    try {
        const response = await fetch(url);
        const resolved = await response.json();
        const iframe = document.createElement("iframe");

        iframe.src = resolved.data.embed_url;
        iframe.width = resolved.data.images.original.width;
        iframe.height = resolved.data.images.original.height;
        iframe.setAttribute("allowFullScreen", "");
        gifContainer.removeAttribute("aria-busy");
        gifContainer.append(iframe);
    } catch (e) {
        gifContainer.setAttribute("aria-busy", false);
        gifContainer.append(`Error retrieving gif.`);
    }
};

getGif.addEventListener("click", () => {
    fetchGif();
});
