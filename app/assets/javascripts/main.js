$(document).ready(function() {
    sub_btn();
    function sub_btn(){
        $('#sub_form').on('ajax:success', function (e){
        window.location.reload()
        })
    
    }
    $.ajax({
        url: "/items.json"
    }).done(function(html) { 
        // for loop html for each one append to td element for highest bid

        console.log(JSON.stringify(html)); 
    });
    
});
    
    
    