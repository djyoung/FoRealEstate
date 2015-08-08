var consumer_key = '1E1CEAEE21AC5CEF929105F5564520CA';
var consumer_secret = '713EAA15AD958F0939E63BE7287C81D2%26';

var suburb_id = "99";
var query_string = "suburb=" + suburb_id;
var url = 'https://api.trademe.co.nz/v1/Search/Property/Residential.json?' +
    'oauth_consumer_key=' + consumer_key +
    '&oauth_signature_method=PLAINTEXT&oauth_signature=' + consumer_secret +
    '&' + query_string;

var req = new XMLHttpRequest();
req.open("GET", url);
req.send();

console.log(req.status);
console.log(req.response);