const food = [{
    name: "Street Tacos (4)",
    price: 7,
    img: "https://www.ericajulson.com/wp-content/uploads/2017/08/Carnitas-Street-Tacos-3.jpg"
}, {
    name: "Nachos",
    price: 4.50,
    img: "https://i.ytimg.com/vi/7ngkR2ujZ2M/maxresdefault.jpg"
}, {
    name: "Burrito",
    price: 6.50,
    img: "https://cdn.moes.com/-/media/moes/menu/burritos/menu-card-burrito-homewrecker-690x320.jpg?v=1&d=20190607T141117Z&h=320&w=690&la=en&hash=2865E1D068EEB130F8517E60654ACEBE"
}, {
    name: "Taco Salad",
    price: 3.50,
    img: "https://recipes-secure-graphics.grocerywebsite.com/0_GraphicsRecipes/7951_400.jpg"
}]

let order = [];

function drawMenu() {
    let template = "";
    // loop over the food
    food.forEach(f => {
        debugger
        // add the menu html template to a template string
        template += /*html*/`
        <div class="col-3 mt-1">
            <div class="card p-1">
                <img class="card-img-top" src="${f.img}" alt="">
                <div class="card-body">
                    <h5 class="card-title">${f.name}</h5>
                    <p class="card-text">Price: $${f.price}</p>
                    <button class="btn btn-success" onclick="addFood()">Order</button>
                </div>
            </div>
        </div>
        `
    })
    // render to the document
    document.getElementById("menu").innerHTML = template
}

function addFood() {
    console.log("order button pressed")
}

















drawMenu();