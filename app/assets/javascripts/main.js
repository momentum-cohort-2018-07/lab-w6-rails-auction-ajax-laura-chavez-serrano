$(document).ready(function() {
    sub_btn();
    function sub_btn(){
        $('#sub_form').on('ajax:success', function (e){
        window.location.reload()
    })
    
    }
    $.ajax({
        url: "/test"
      }).done(function(html) {
        return $("#results").append(html);
      });
    });
    
    
    