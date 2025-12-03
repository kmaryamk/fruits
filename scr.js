document.addEventListener('DOMContentLoaded', function () {
    if (!document.getElementById('products-container')) return;

    const products = [
        {name: "Яблоки", price: 120, img: "https://media.istockphoto.com/id/1391983099/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=iwhq_NKgvVrfj6yHY7vp0gBbJ8WAknI_6xONr8-Dw5g="},
        {name: "Бананы", price: 140, img: "https://avatars.mds.yandex.net/i?id=62748c6d5e1978bf7019993a38cbcd88f02dc18b-5192508-images-thumbs&n=13"},
        {name: "Манго", price: 550, img: "https://avatars.mds.yandex.net/i?id=35f95508d74f56171e5ca52486fc6c1d61c64e09-11376022-images-thumbs&n=13"},
        {name: "Киви", price: 130, img: "https://avatars.mds.yandex.net/i?id=6d02f15494d6b2935bc1452b6f480aa84a4817a6-3826599-images-thumbs&n=13"},
        {name: "Груши", price: 120, img: "https://avatars.mds.yandex.net/i?id=bcdc6a0c7912051a81b6d487a4a2165e9d497f5f-10636720-images-thumbs&n=13"},
        {name: "Мандарины", price: 330, img: "https://avatars.mds.yandex.net/i?id=a77cb5bbe88cd8c773600d037685b7e1e17e5384-7822413-images-thumbs&n=13"},
        {name: "Лимоны", price: 180, img: "https://avatars.mds.yandex.net/i?id=90392de53615ddc47b9a6d5845288c03b14d0d9e-5277319-images-thumbs&n=13"},
        {name: "Апельсины", price: 200, img: "https://avatars.mds.yandex.net/i?id=81ffa499de55cb597d6e5a191908eeb5dd0be9b7-5858897-images-thumbs&n=13"}

    ]

    const cont = document.getElementById('products-container');

    products.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-3 col-sm-6';
        col.innerHTML = `
            <div class = "card h-100">
                <img src = "${item.img}" class = "card-img-top">
                <div class = "card-body">
                    <h5 class = "card-title">${item.name}</h5>
                    <p class = "card-text">${item.price} руб./кг</p>
                </div>
            </div>
        `;
        cont.appendChild(col);
    });
});