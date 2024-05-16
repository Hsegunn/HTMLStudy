function loadItems(){
    return fetch("../ShoppingMall/data/data.json")
    .then(res => res.json())
    .then(json => json.items);
}

function displayItems(items) {
    const container = document.querySelector(".items");
    container.innerHTML = items.map(item => createHTMLString(item));
}

function createHTMLString(item) {
    return `<li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_thumbnail">
        <span class="item_description">${item.type} ${item.gender} ${item.size}</span>
    </li>`;
}
function filterType(value) {
    loadItems()
        .then(items => {
            const filteredItems = items.filter(item => item.type === value);
            displayItems(filteredItems);
        })
    }
function filterColor(value) {
    loadItems()
        .then(items => {
            const filteredItems = items.filter(item => item.color === value);
            displayItems(filteredItems);
        })
    }

loadItems()
.then(items => {
    console.log(items);
    displayItems(items);
});
document.querySelector(".btn_blusColor").addEventListener("click", () => filterColor('blue'));
document.querySelector(".btn_pinkColor").addEventListener("click", () => filterColor('pink'));
document.querySelector(".btn_yellowColor").addEventListener("click", () => filterColor('yellow'));
document.querySelector(".btn_pants").addEventListener("click", () => filterType('pants'));
document.querySelector(".btn_skirt").addEventListener("click", () => filterType('skirt'));
document.querySelector(".btn_tshirt").addEventListener("click", () => filterType('tshirt'));