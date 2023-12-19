$(document).ready(function () {
    $('#get-pokemon-button').on('click', function() {
        $.get('https://pokeapi.co/api/v2/pokemon/', function(data, status) {
            console.log(data);
            var string = "";
            string += "<table class='table table-success table-bordered align-middle'>";
            $.each(data.results, function(index, value) {
                string += "<tr class='fw-bold font-monospace text-center'><td><a class='text-decoration-none' href='"+value.url+"'>"+ value.name+"</td><td><button class='hide-button btn btn-primary'>Hide</button></td></tr>";
            });
            string += "</table>";

            $('#poke-list').html(string);

            if(status){
                $('.hide-button').on('click', function() {
                    $(this).parent().parent().hide();
                });
            }
        });
    });
});