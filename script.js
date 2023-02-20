const app = document.getElementById("app")

fetch("/.netlify/functions/api-call")
    .then((response) => response.json())
    .then((data) => {
        console.log(data.data)
    })