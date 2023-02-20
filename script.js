const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }

// fetch("/.netlify/functions/api-call")
fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        const app = document.getElementById("app")
        let ui, li
        ul = document.createElement("ul")
        app.appendChild(ul)

        data = data.reverse()
        data.forEach(element => {
            li = document.createElement("li")
            let date = new Date(element.receivedDate)
            
            li.innerHTML = `
                ID: <code>${element.id}</code><br>
                User: ${element.userName}<br>
                Datum: ${date.toLocaleDateString("de-DE", dateOptions)} Uhr<br>
                Defekt: ${element.data.Maschine.Code} ${element.data.Maschine.Bezeichnung} [${element.data.Dringlichkeit}] ${element.data.Defektbeschreibung}
            `
            ul.appendChild(li)
        })
    })