$(document).ready(function(){
    
    printHoroscope();
   
function printHoroscope(){
    $.ajax({
        type: 'GET',
        url: "viewHoroscope.php", 
    })
    .done(function(data){
        
        $('#displayHoroscope').html(data); 
       
    })

    }


saveHoroscope = function() {
    var birthDate = $('#birthDate').val();
    if(birthDate !== "") { 
    $.ajax({
        type: 'POST',
        url: "addHoroscope.php",
        data: {
            birthDate: birthDate
            }
    })
    .done(function(data){
        
        printHoroscope();
    })
    }
        
    }

      
updateHoroscope = function() {
    var birthDate = $('#birthDate').val();
    if(birthDate !== "") { 
    $.ajax({
        type: 'PUT',
        url: "updateHoroscope.php",
        data: {
            birthDate: birthDate
            }
    })
    .done(function(data){
        printHoroscope();
    })
    }

    }
            
deleteHoroscope = function() {
    var birthDate = $('#birthDate').val();
    $.ajax({
        type: 'DELETE',
        url: "deleteHoroscope.php",
        data: {
            birthDate: birthDate
            }
    })
    .done(function(data){
        $('#displayHoroscope').remove();
    })

    }

    });

