const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: "Fluffy buttermilk pancakes served with maple syrup and a side of fresh berries. Perfect for a hearty breakfast.",
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: "A classic double cheeseburger with lettuce, tomato, pickles, and our special sauce, served with crispy fries.",
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: "A giant chocolate milkshake topped with whipped cream, chocolate chips, and a cherry on top.",
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: "Two eggs any style, bacon, sausage, hash browns, and toast. A true country-style breakfast.",
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: "Juicy burger topped with a fried egg, cheddar cheese, lettuce, tomato, and spicy mayo.",
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: "Creamy vanilla milkshake blended with Oreo cookies and topped with whipped cream and cookie crumbles.",
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: "Scrambled eggs loaded with crispy bacon, cheddar cheese, and chives, served with toast.",
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: "Grilled cheese sandwich with American cheese, served with tomato soup and a pickle spear.",
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: "A comforting vanilla milkshake with a hint of cinnamon, topped with whipped cream and sprinkles.",
  },
];

const sectionCenter = document.querySelector('.section-center')

window.addEventListener('DOMContentLoaded', ()=>{
  let displayMenu = menu.map((item)=>{

    return ` <article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title}>
            <div class="item-info">

              <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}$</h4>
              </header>
              <p>${item.desc}</p>
            </div>
           </article>`;
  });
    displayMenu = displayMenu.join('')
      sectionCenter.innerHTML = displayMenu

})