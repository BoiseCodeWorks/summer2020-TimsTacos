const food = [{
    id: "1sdfsg24",
    name: "Street Tacos (4)",
    price: 7,
    img: "https://www.ericajulson.com/wp-content/uploads/2017/08/Carnitas-Street-Tacos-3.jpg"
}, {
    id: "sld23we3",
    name: "Nachos",
    price: 4.50,
    img: "https://i.ytimg.com/vi/7ngkR2ujZ2M/maxresdefault.jpg"
}, {
    id: "2lh3423sd",
    name: "Burrito",
    price: 6.50,
    img: "https://cdn.moes.com/-/media/moes/menu/burritos/menu-card-burrito-homewrecker-690x320.jpg?v=1&d=20190607T141117Z&h=320&w=690&la=en&hash=2865E1D068EEB130F8517E60654ACEBE"
}, {
    id: "l2jk34236h",
    name: "Taco Salad",
    price: 3.50,
    img: "https://recipes-secure-graphics.grocerywebsite.com/0_GraphicsRecipes/7951_400.jpg"
}]

let order = [];

function drawMenu() {
    let template = "";
    // loop over the food
    food.forEach(f => {
        // add the menu html template to a template string
        template += /*html*/`
        <div class="col-3 mt-1">
            <div class="card p-1">
                <img class="card-img-top" src="${f.img}" alt="">
                <div class="card-body">
                    <h5 class="card-title">${f.name}</h5>
                    <p class="card-text">Price: $${f.price}</p>
                    <button class="btn btn-success" onclick="addFood('${f.id}')">Order</button>
                </div>
            </div>
        </div>
        `
    })
    // render to the document
    document.getElementById("menu").innerHTML = template
}

function addFood(foodId) {
    //Find the food Object from the food array
    let found = food.find(f => f.id === foodId)
    //push to orders array
    order.push(found)
    // add to total
    drawOrder()
}

function drawOrder() {
    //create list elements for each food item in orders
    let template = ''
    let total = 0
    order.forEach(f => {
        template += `<li>${f.name}</li>`
        total += f.price
    })
    //update page with list of orders
    document.getElementById("order").innerHTML = template
    // update page with total
    // NOTE 'toFixed' converts the number to a string and keeps the specified decimal places
    document.getElementById("total").innerText = "$" + total.toFixed(2);
}

function pay() {
    // order = [];
    // NOTE this clears the contents from the array by removing all indexes
    document.getElementById("success-message").innerHTML = "<h3>Thank You for your Order</h3>"

    //after a few seconds
    setTimeout(() => {
        order.length = 0;
        drawOrder();
        document.getElementById("success-message").innerHTML = ''
    }, 2000);
}

function hotsauce() {
    let foodElements = document.querySelectorAll(".card")
    foodElements.forEach(elem => {
        elem.classList.add("fa-spin")
    })
    document.getElementById("song").play();
    setTimeout(() => {
        foodElements.forEach(elem => {
            elem.classList.remove("fa-spin")
        })
        document.getElementById("song").pause();
    }, 3000);
}

let color = "primary"
function colorSwap() {
    let elems = document.querySelectorAll(`.bg-${color}`)
    elems.forEach(e => e.classList.remove("bg-" + color))
    if (color == "primary") {
        color = "secondary"
    } else {
        color = "primary"
    }
    elems.forEach(e => e.classList.add("bg-" + color))
}


setInterval(() => {
    colorSwap();
}, 1000);

drawMenu();