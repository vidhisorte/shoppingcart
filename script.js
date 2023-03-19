var product_total_amt = document.getElementById("product_total_amt");
var shipping_charge = document.getElementById("shipping_charge");
var total_cart_amt = document.getElementById("total_cart_amt");
var discountCode = document.getElementById("discount_code1");

const decreaseNumber = (incdec, itemprice, pid) => {
  var pricee = parseInt(document.getElementById(pid).innerHTML);
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);
  console.log(itemprice.innerHTML);
  // console.log(itemval.value);
  if (itemval.value <= 0) {
    itemval.value = 0;
    alert("Quantity can't be negative!");
  } else {
    itemval.value = parseInt(itemval.value) - 1;
    itemval.style.background = "#fff";
    itemval.style.color = "#000";
    itemprice.innerHTML = parseInt(itemprice.innerHTML) - pricee;
    product_total_amt.innerHTML =
      parseInt(product_total_amt.innerHTML) - pricee;

    total_cart_amt.innerHTML =
      parseInt(product_total_amt.innerHTML) +
      parseInt(shipping_charge.innerHTML);
    if (parseInt(product_total_amt.innerHTML) == 0) {
      total_cart_amt.innerHTML = "0.00";
    }
  }
};
const increaseNumber = (incdec, itemprice, pid) => {
  var pricee = parseInt(document.getElementById(pid).innerHTML);
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);
  // console.log(itemval.value);
  if (itemval.value >= 5) {
    itemval.value = 5;
    alert("Maximum quantity allowed is 5!");
    itemval.style.background = "red";
    itemval.style.color = "#fff";
  } else {
    itemval.value = parseInt(itemval.value) + 1;
    itemprice.innerHTML = parseInt(itemprice.innerHTML) + pricee;
    product_total_amt.innerHTML =
      parseInt(product_total_amt.innerHTML) + pricee;
    total_cart_amt.innerHTML =
      parseInt(product_total_amt.innerHTML) +
      parseInt(shipping_charge.innerHTML);
  }
};
const discount_code = () => {
  let totalamtcurr = parseInt(total_cart_amt.innerHTML);
  let error_trw = document.getElementById("error_trw");
  if (discountCode.value === "pict123") {
    let newtotalamt = totalamtcurr - 100;
    if (newtotalamt < 0) {
      newtotalamt = 0;
    }
    total_cart_amt.innerHTML = newtotalamt;
    error_trw.innerHTML = "Coupon applied!";
  } else {
    error_trw.innerHTML = "Invalid code! Try 'pict123'";
  }
};
