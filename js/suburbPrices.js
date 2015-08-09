//Suburb data is calculated on residential property sales from the previous 3 months
function suburb_price(num_sales, median_price, cv_difference) {
    this.num_sales = num_sales;
    this.median_price = median_price;
    this.cv_difference = cv_difference;
}

var newMarket = new suburb_price(10,581250,22);
var freemansBay = new suburb_price(25,1220000,16);
var herneBay = new suburb_price(16,1430000,11);
var kingsland = new suburb_price(16,724500,29);
var parnell = new suburb_price(56,994000,10);
var pointChevalier = new suburb_price(35,1052000,11);
var ponsonby = new suburb_price(35,1520000,13);
var sandringham = new suburb_price(63,736500,19);
var westmere = new suburb_price(14,1155500,8);
var edenTerrace = new suburb_price(30,378500,20);

var suburb_data = [newMarket,freemansBay,herneBay,kingsland,parnell,pointChevalier,ponsonby,sandringham,westmere,edenTerrace];
