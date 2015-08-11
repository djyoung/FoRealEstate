//Suburb data is calculated on residential property sales from the previous 3 months
function suburb_price(num_sales, median_price, cv_difference, trademe_suburb_id) {
    this.num_sales = num_sales;
    this.median_price = median_price;
    this.cv_difference = cv_difference;
    this.trademe_suburb_id = trademe_suburb_id;
}


//TO DO: Have this read in data from the csv file and automatically from Trademe suburb
var newMarket = new suburb_price(10,581250,22,99);
var freemansBay = new suburb_price(25,1220000,16,88);
var herneBay = new suburb_price(16,1430000,11,84);
var kingsland = new suburb_price(16,724500,29,123);
var parnell = new suburb_price(56,994000,10,41);
var pointChevalier = new suburb_price(35,1052000,11,85);
var ponsonby = new suburb_price(35,1520000,13,83);
var sandringham = new suburb_price(63,736500,19,128);
var westmere = new suburb_price(14,1155500,8,109);
var edenTerrace = new suburb_price(30,378500,20,135);

var suburb_data = [newMarket,freemansBay,herneBay,kingsland,parnell,pointChevalier,ponsonby,sandringham,westmere,edenTerrace];

function updateSuburbInFor(suburb_id){
    eraseAll();
    var result = $.grep(suburb_data, function(e){ return e.trademe_suburb_id == suburb_id; })[0];
    $("#num_sales").append("<li>" +result.num_sales + "</li>");
    $("#cv_price").append("<li>" +result.median_price + "</li>");
    $("#cv_difference").append("<li>" +result.cv_difference + "</li>");
};

function eraseAll(){
    $("#num_sales").empty();
    $("#cv_price").empty();
    $("#cv_difference").empty();
}