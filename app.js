const result = document.getElementById("result");

window.addEventListener("load", async() => {

    const response = await fetch("orders.json");

    const data = await response.json();

    console.log(data);

    let output = "";

    data.map(order => {

        
    })
})