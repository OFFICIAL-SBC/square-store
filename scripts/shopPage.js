const gridContainer = document.querySelector('.picture-container__grid');


function addCardItem(imageSrc, title, price, colors) {
    //Create the article
    const cardItem = document.createElement('article');
    cardItem.classList.add('picture-container-grid__card-item');

    //Create the img and the figure
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = title;
    figure.appendChild(img);

    // Create the title
    const h3 = document.createElement('h3');
    h3.textContent = title;

    // Create the price
    const priceElement = document.createElement('p');
    priceElement.classList.add('card-item__price');
    priceElement.textContent = price;

    // create the colors
    const colorsContainer = document.createElement('div');
    colorsContainer.classList.add('card-item__colors');

    colors.forEach(colorClass => {
        const colorItem = document.createElement('div');
        colorItem.classList.add('card-item__color-item');

        // If it is a color with an inner circle
        if (colorClass.includes('inner-circle')) {
            const innerCircle = document.createElement('div');
            innerCircle.classList.add(...colorClass.split(' '));
            colorItem.appendChild(innerCircle);
        } else {
            colorItem.classList.add(colorClass);
        }

        colorsContainer.appendChild(colorItem);
    });

    // Build the article with all its elements
    cardItem.appendChild(figure);
    cardItem.appendChild(h3);
    cardItem.appendChild(priceElement);
    cardItem.appendChild(colorsContainer);
    gridContainer.appendChild(cardItem);
}

// Add multiples cards dynamically
const items = [
    {
        imageSrc: './assets/img/women_1.png',
        title: 'Rounded Red Hat',
        price: '$95.50',
        colors: ['card-item__color-item--inner-circle card-item__color-item--yellow-color','card-item__color-item--black-color']
    },
    {
        imageSrc: './assets/img/women_2.png',
        title: 'Linen-blend Shirt',
        price: '$17.00',
        colors: ['card-item__color-item--inner-circle card-item__color-item--blue-cream-color','card-item__color-item--light-pink-color']
    },
    {
        imageSrc: './assets/img/women_3.png',
        title: 'Long-sleeve Coat',
        price: '$106.00',
        colors: ['card-item__color-item--inner-circle card-item__color-item--lavender-color','card-item__color-item--light-green-color']
    },
    {
        imageSrc: './assets/img/women_4.png',
        title: 'Boxy Denim Hat',
        price: '$25.00',
        colors: ['card-item__color-item--inner-circle card-item__color-item--light-blue-color','card-item__color-item--dark-blue-color']
    },
    {
        imageSrc: './assets/img/women_5.png',
        title: 'Linen Plain Top',
        price: '$25.00',
        colors: ['card-item__color-item--inner-circle card-item__color-item--light-green-color']
    },
    {
        imageSrc: './assets/img/women_6.png',
        title: 'Oversized T-shirt',
        price: '$11.00',
        colors: ['card-item__color-item--inner-circle card-item__color-item--light-pink-color','card-item__color-item--purple-color','card-item__color-item--white-color']
    },
    {
        imageSrc: './assets/img/women_7.png',
        title: 'Polarized Sunglasses',
        price: '$18.00',
        colors: ['card-item__color-item--inner-circle card-item__color-item--black-color','card-item__color-item--brown-color']
    },
    {
        imageSrc: './assets/img/women_8.png',
        title: 'Rockstar Jacket',
        price: '$22.00',
        colors: ['card-item__color-item--inner-circle card-item__color-item--purple-color','card-item__color-item--lighter-blue-color']
    },
    {
        imageSrc: './assets/img/women_9.png',
        title: 'Rounded Red Hat',
        price: '$95.50',
        colors: ['card-item__color-item--inner-circle card-item__color-item--dark-blue-color','card-item__color-item--black-color','card-item__color-item--light-blue-color']
    }
];

// Iterate over the data
items.forEach(item => {
    addCardItem(item.imageSrc, item.title, item.price, item.colors);
});