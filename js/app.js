$(document).ready(function() {

      $('#tracy-dinunzio').mouseover(function(){
      $('#tracy-yes-i-love-it').show();}); 
      $('#tracy-dinunzio').mouseout(function(){
      $('#tracy-yes-i-love-it').hide();});  

      $('#girl-with-tongue').mouseover(function(){
      $('#hells-no').show(); });  
      $('#girl-with-tongue').mouseout(function(){
      $('#hells-no').hide();});  
    
//swipe right towards CEO to match item
      $("#item-to-rate").on("swiperight",function(){
      $(this).removeClass('rotate-right reset-after-rotate-right rotate-left reset-after-rotate-left');
      $('#tracy-dinunzio').hide();
      $(this).addClass('rotate-right');
      $(this).find('.status').remove();
      $(this).append('<div class="status like">Love It!</div>');      

      var item = $('#item-to-rate img').data('id');

       $.post('ajax/match-item.php',{item_id: item}, 
          function(data){
            console.log(data);
            setTimeout(function(){
            $('#tracy-dinunzio').show();     
            $('#item-to-rate img').data('id',data.item_id);
            $('#item-to-rate img').attr('src',data.image);
            $('#item-to-rate').addClass('reset-after-rotate-right');
            $('.status').remove();
            },1200);
          })        
          .done(function() {
          console.log('success - item matched');
          })     
          .fail(function() {
          console.log('ajax error');
          })
      });  

//click right on CEO to match item
    $('#tracy-dinunzio').click(function(){
      $("#item-to-rate").removeClass('rotate-right reset-after-rotate-right rotate-left reset-after-rotate-left');
      $('#tracy-dinunzio').hide();
      $("#item-to-rate").addClass('rotate-right');
      $("#item-to-rate").find('.status').remove();
      $("#item-to-rate").append('<div class="status like">Love It!</div>');      

      var item = $('#item-to-rate img').data('id');

//reveal new match item
       $.post('ajax/match-item.php',{item_id: item}, 
          function(data){
            console.log(data);
            setTimeout(function(){
            $('#tracy-dinunzio').show();     
            $('#item-to-rate img').data('id',data.item_id);
            $('#item-to-rate img').attr('src',data.image);
            $('#item-to-rate').addClass('reset-after-rotate-right');
            $('.status').remove();
            },1200);
          })        
          .done(function() {
          console.log('success - item matched');
          })     
          .fail(function() {
          console.log('ajax error');
          })

//show all matched items
       $.get('ajax/show-items.php',
        function(matches){               
          for (var i=0; i<matches.length; i+=1) {
            $('.recommended-item-image').attr('src','images/matches/'+matches[i].image);
            $('.item-name').html(matches[i].name);
            $('.item-price').html('$'+matches[i].price);
            $('.item-used').html(matches[i].used);
            console.log(matches[i].name); 
            console.log(matches[i].price); 
            console.log(matches[i].used);
            console.log(matches[i].image);
            console.log(matches[i].id);                     
          }
       })     
        .done(function() {
        console.log('success - item matched');
        })     
        .fail(function() {
        console.log('ajax error');
        })

    }); //end click right on CEO

//swipe left towards unhappy woman to go to next item
   $("#item-to-rate").on("swipeleft",function(){
    $(this).removeClass('rotate-right reset-after-rotate-right rotate-left reset-after-rotate-left');
    $(this).addClass('rotate-left');
    $('#item-to-rate').find('.status').remove();
    $(this).append('<div class="status dislike">Dislike!</div>');

      var item = $('#item-to-rate img').data('id');

    $.post('ajax/no-match.php',{item_id: item}, 
     function(data){
        console.log(data);
        setTimeout(function(){
        $('#girl-with-tongue').show();
        $('#item-to-rate img').data('id',data.item_id);
        $('#item-to-rate img').attr('src',data.image);
        $('#item-to-rate').addClass('reset-after-rotate-right');
        $('.status').remove();
        },900);
      })
      .done(function() {
      console.log('success - new item selected');
      })     
      .fail(function() {
      console.log('ajax error');
      })  
  });
   
//click left on unhappy woman to go to next item
   $('#girl-with-tongue').click(function(){
    $("#item-to-rate").removeClass('rotate-right reset-after-rotate-right rotate-left reset-after-rotate-left');
    $("#item-to-rate").addClass('rotate-left');
    $("#item-to-rate").find('.status').remove();
    $("#item-to-rate").append('<div class="status dislike">Dislike!</div>');

      var item = $('#item-to-rate img').data('id');

    $.post('ajax/no-match.php',{item_id: item}, 
     function(data){
        console.log(data);
        setTimeout(function(){
        $('#girl-with-tongue').show();
        $('#item-to-rate img').data('id',data.item_id);
        $('#item-to-rate img').attr('src',data.image);
        $('#item-to-rate').addClass('reset-after-rotate-right');
        $('.status').remove();
        },900);
      })
      .done(function() {
      console.log('success - new item selected');
      })     
      .fail(function() {
      console.log('ajax error');
      })  
    });

   $('#clear-all-items-from-bag').click(function(){
      $.post( "ajax/destroy-items.php", function()  {
        console.log('success - url');
        $('#recommended-items').empty();
      })
        .done(function() {
        console.log('success - empty cart');
        })     
        .fail(function() {
        console.log('ajax error');
        })
    });

   $('#show-all-items-in-bag').click(function(){
      window.location.reload();
    });

    //user is able to select and delete item from the screen using BACKSPSACE or DELETE
    $('.recommended').click(function(){
        $('.recommended').not(this).removeClass('active');
        $(this).toggleClass('active');
    });

    $(document.body).keyup(function(event){
        if (event.keyCode == 46 || event.keyCode == 8) {
            event.preventDefault();
            $(".active").remove();
        }
    });





}); //close document.ready
