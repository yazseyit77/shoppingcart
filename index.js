let carts = document.querySelectorAll(".add-cart");

let products = [
  {
    name: "casio1",
    tag: "casio1",
    price: 15,
    inCart: 0,
  },
  {
    name: "casio1",
    tag: "casio1",
    price: 15,
    inCart: 0,
  },
  {
    name: "casio2",
    tag: "casio2",
    price: 15,
    inCart: 0,
  },
  {
    name: "casio3",
    tag: "casio3",
    price: 15,
    inCart: 0,
  },
  {
    name: "casio4",
    tag: "casio4",
    price: 15,
    inCart: 0,
  },
  {
    name: "casio5",
    tag: "casio5",
    price: 15,
    inCart: 0,
  },
  {
    name: "casio6",
    tag: "casio6",
    price: 15,
    inCart: 0,
  },
  {
    name: "casio7",
    tag: "casio7",
    price: 15,
    inCart: 0,
  },
  {
    name: "casio8",
    tag: "casio8",
    price: 15,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", (e) => {
    e.preventDefault();
    cartNumbers(products[i]);
  });
}

function onloadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  console.log(product);
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  console.log(product.inCart);
  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onloadCartNumbers();
