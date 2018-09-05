$(document).ready(function() {
    sub_btn();
    function sub_btn(){
        $('#sub_form').on('ajax:success', function (e){
        window.location.reload()
        })
    
    }
    $.ajax({
        url: "/items"
    }).done(function(html) {
        return $("table").append(html);
    });
});
    
    
    