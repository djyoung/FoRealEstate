$(function() {
    initialize();

    $("#suburb-selector a").click(function (e) {
       var suburb = e.target.innerHTML;

        if (suburb == "Newmarket") {
            get_properties(99);
        } else if (suburb == "Ponsonby") {
            get_properties(83);
        }

        $('#content').show();
    });
});

function get_properties(suburb_id) {
    updateSuburbInFor(suburb_id);
    var consumer_key = '1E1CEAEE21AC5CEF929105F5564520CA';
    var consumer_secret = '713EAA15AD958F0939E63BE7287C81D2%26';

    var query_string = "suburb=" + suburb_id;

    var url = 'https://api.trademe.co.nz/v1/Search/Property/Residential.json?' +
        'oauth_consumer_key=' + consumer_key +
        '&oauth_signature_method=PLAINTEXT&oauth_signature=' + consumer_secret +
        '&' + query_string;

    $.ajax({
        url: url
    }).done(function(data) {
        console.log(data);

        find_properties_on_map(data);
    });
};
