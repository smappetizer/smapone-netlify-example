const app = document.getElementById("app")
fetch("/.netlify/functions/api-call")
    .then((response) => response.json())
    .then((data) => {
        data.forEach(item => {
            console.log(item)
        })
    })