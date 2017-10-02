function zoom(num) {

	var mz = document.getElementById("Modal_zoom");
	var mt = document.getElementById("Modal_title");
	var me = document.getElementById("metal");
	var pr = document.getElementById("proba");
	var ma = document.getElementById("masa");
	var arrName = ['20 dolarów St. Gaudens', '20 dolarów Liberty', '10 dolarów Liberty', '10 rubli Mikołaja II', '20 franków Francja', '20 marek Prusy', '1 funt Wielka Brytania', '20 franków Szwajcaria', '1 Dukat Austriacki'];
	var arrMetal = ['złoto', 'złoto', 'złoto', 'złoto', 'złoto', 'złoto', 'złoto', 'złoto', 'złoto'];
	var arrProba = ['900', '900', '900', '900', '900', '900', '916', '900', '986'];
	var arrMasa = ['33.43', '33.43', '16.72', '8.577', '6.45', '7.96', '7.98', '6.43', '3.442'];

	switch (num) {
		case 1:
			mz.style.backgroundImage = "url('img/1.jpg')";
			mt.innerHTML = arrName[num - 1];
			me.innerHTML = arrMetal[num - 1];
			pr.innerHTML = arrProba[num - 1];
			ma.innerHTML = arrMasa[num - 1];
			break;
		case 2:
			mz.style.backgroundImage = "url('img/2.jpg')";
			mt.innerHTML = arrName[num - 1];
			me.innerHTML = arrMetal[num - 1];
			pr.innerHTML = arrProba[num - 1];
			ma.innerHTML = arrMasa[num - 1];
			break;
		case 3:
			mz.style.backgroundImage = "url('img/3.jpg')";
			mt.innerHTML = arrName[num - 1];
			me.innerHTML = arrMetal[num - 1];
			pr.innerHTML = arrProba[num - 1];
			ma.innerHTML = arrMasa[num - 1];
			break;
		case 4:
			mz.style.backgroundImage = "url('img/4.jpg')";
			mt.innerHTML = arrName[num - 1];
			me.innerHTML = arrMetal[num - 1];
			pr.innerHTML = arrProba[num - 1];
			ma.innerHTML = arrMasa[num - 1];
			break;
		case 5:
			mz.style.backgroundImage = "url('img/5.jpg')";
			mt.innerHTML = arrName[num - 1];
			me.innerHTML = arrMetal[num - 1];
			pr.innerHTML = arrProba[num - 1];
			ma.innerHTML = arrMasa[num - 1];
			break;
		case 6:
			mz.style.backgroundImage = "url('img/6.jpg')";
			mt.innerHTML = arrName[num - 1];
			me.innerHTML = arrMetal[num - 1];
			pr.innerHTML = arrProba[num - 1];
			ma.innerHTML = arrMasa[num - 1];
			break;
		case 7:
			mz.style.backgroundImage = "url('img/7.jpg')";
			mt.innerHTML = arrName[num - 1];
			me.innerHTML = arrMetal[num - 1];
			pr.innerHTML = arrProba[num - 1];
			ma.innerHTML = arrMasa[num - 1];
			break;
		case 8:
			mz.style.backgroundImage = "url('img/8.jpg')";
			mt.innerHTML = arrName[num - 1];
			me.innerHTML = arrMetal[num - 1];
			pr.innerHTML = arrProba[num - 1];
			ma.innerHTML = arrMasa[num - 1];
			break;
		case 9:
			mz.style.backgroundImage = "url('img/9.jpg')";
			mt.innerHTML = arrName[num - 1];
			me.innerHTML = arrMetal[num - 1];
			pr.innerHTML = arrProba[num - 1];
			ma.innerHTML = arrMasa[num - 1];
			break;
	}



}

function rotate() {

	document.getElementById("awers1").style.backgroundImage = "url('img/A_Wmin/1a.jpg')";
	document.getElementById("rewers1").style.backgroundImage = "url('img/A_Wmin/1r.jpg')";

	document.getElementById("awers2").style.backgroundImage = "url('img/A_Wmin/2a.jpg')";
	document.getElementById("rewers2").style.backgroundImage = "url('img/A_Wmin/2r.jpg')";

	document.getElementById("awers3").style.backgroundImage = "url('img/A_Wmin/3a.jpg')";
	document.getElementById("rewers3").style.backgroundImage = "url('img/A_Wmin/3r.jpg')";

	document.getElementById("awers4").style.backgroundImage = "url('img/A_Wmin/4a.jpg')";
	document.getElementById("rewers4").style.backgroundImage = "url('img/A_Wmin/4r.jpg')";

	document.getElementById("awers5").style.backgroundImage = "url('img/A_Wmin/5a.jpg')";
	document.getElementById("rewers5").style.backgroundImage = "url('img/A_Wmin/5r.jpg')";

	document.getElementById("awers6").style.backgroundImage = "url('img/A_Wmin/6a.jpg')";
	document.getElementById("rewers6").style.backgroundImage = "url('img/A_Wmin/6r.jpg')";

	document.getElementById("awers7").style.backgroundImage = "url('img/A_Wmin/7a.jpg')";
	document.getElementById("rewers7").style.backgroundImage = "url('img/A_Wmin/7r.jpg')";

	document.getElementById("awers8").style.backgroundImage = "url('img/A_Wmin/8a.jpg')";
	document.getElementById("rewers8").style.backgroundImage = "url('img/A_Wmin/8r.jpg')";

	document.getElementById("awers9").style.backgroundImage = "url('img/A_Wmin/9a.jpg')";
	document.getElementById("rewers9").style.backgroundImage = "url('img/A_Wmin/9r.jpg')";
}









simpleCart({
	// array representing the format and columns of the cart,
	// see the cart columns documentation
	cartColumns: [
		{
			attr: "name",
			label: "Nazawa"
		},
		{
			view: "currency",
			attr: "price",
			label: "Cena"
		},
		{
			view: "decrement",
			label: false
		},
		{
			attr: "quantity",
			label: "Ilość"
		},
		{
			view: "increment",
			label: false
		},
		{
			view: "currency",
			attr: "total",
			label: "Cena całkowita"
		},
		{
			view: "remove",
			text: "Usun",
			label: false
		}
	],

	// "div" or "table" - builds the cart as a 
	// table or collection of divs
	cartStyle: "table",

	// how simpleCart should checkout, see the 
	// checkout reference for more info 
	checkout: {
		type: "PayPal",
		email: "you@yours.com"
	},

	// set the currency, see the currency 
	// reference for more info
	currency: "PLN",

	// collection of arbitrary data you may want to store 
	// with the cart, such as customer info
	data: {},

	// set the cart langauge 
	// (may be used for checkout)
	language: "english-us",

	// array of item fields that will not be 
	// sent to checkout
	excludeFromCheckout: [],

	// custom function to add shipping cost
	shippingCustom: 13,

	// flat rate shipping option
	shippingFlatRate: 13,

	// added shipping based on this value 
	// multiplied by the cart quantity
	shippingQuantityRate: 0,

	// added shipping based on this value 
	// multiplied by the cart subtotal
	shippingTotalRate: 0,

	// tax rate applied to cart subtotal
	taxRate: 0,

	// true if tax should be applied to shipping
	taxShipping: false,

	// event callbacks 
	beforeAdd: null,
	afterAdd: null,
	load: null,
	beforeSave: null,
	afterSave: null,
	update: null,
	ready: null,
	checkoutSuccess: null,
	checkoutFail: null,
	beforeCheckout: null,
	beforeRemove: null
});
