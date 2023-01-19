const getGif = document.querySelector("#getGif");
const gifContainer = document.querySelector(".gifContainer");
const myKey = "Ik2y6SA8vp6BDUyFHAH8wOjGYHI8hptc";
const iframeOptions = {
    
} 

getGif.addEventListener("click", () => {
    gifContainer.innerHTML = "";
    gifContainer.setAttribute("aria-busy", true);
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${myKey}`)
    .then((response) => response.json())
    .then((response) => {
        const iframe = document.createElement("iframe");
        iframe.src = response.data.embed_url;
        iframe.width = response.data.images.original.width;
        iframe.height = response.data.images.original.height;
        iframe.setAttribute("allowFullScreen", "");
        gifContainer.removeAttribute("aria-busy");
        gifContainer.append(iframe);
    })
    .catch((error) => console.log(error))
})

