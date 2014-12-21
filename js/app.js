$(document).ready(function(){

      $('#tracy-dinunzio').mouseover(function(){
      $('#tracy-yes-i-love-it').show();
      }); 

      $('#tracy-dinunzio').mouseout(function(){
      $('#tracy-yes-i-love-it').hide();
      });  

      $('#girl-with-tongue').mouseover(function(){
      $('#hells-no').show();
      });  

      $('#girl-with-tongue').mouseout(function(){
      $('#hells-no').hide();
      });  

      $('#clear_all_items_from_bag').show();
    
// on swiperight  
    $("#item-to-rate").on("swiperight",function(){
      $(this).removeClass('rotate-right reset-after-rotate-right rotate-left reset-after-rotate-left');
      $('#tracy-dinunzio').hide();
      $(this).addClass('rotate-right');
      $(this).find('.status').remove();

      $(this).append('<div class="status like">Love It!</div>');      

       var item = $('#item-to-rate img').data('id');
       var match = $('#item-to-rate img').data('match');

       $.get('ajax/match-item.php',{
            item_id: item,
            match_id: match
         }, function(data){
          console.log(data);

        setTimeout(function(){
        $('#tracy-dinunzio').show();     
        $('#item-to-rate img').data('id',data.item_id);
        $('#item-to-rate img').attr('src',data.image);
        $('#item-to-rate').addClass('reset-after-rotate-right');
        $('.status').remove();
        },1200);
      });
        setTimeout(function(){
        },1000);    
    });  

// on click right
    $('#tracy-dinunzio').click(function(){
      $("#item-to-rate").removeClass('rotate-right reset-after-rotate-right rotate-left reset-after-rotate-left');
      $('#tracy-dinunzio').hide();
      $("#item-to-rate").addClass('rotate-right');
      $("#item-to-rate").find('.status').remove();

      $("#item-to-rate").append('<div class="status like">Love It!</div>');      

       var item = $('#item-to-rate img').data('id');
       var match = $('#item-to-rate img').data('id');

      console.log('item:'+item+' '+'match'+match);

       $.get('ajax/match-item.php',{
            item_id: item,
            match_id: match
         }, function(data){
          console.log(data);

        setTimeout(function(){
        $('#tracy-dinunzio').show(); 
        $('#item-to-rate img').data('id',data.item_id);
        $('#item-to-rate img').attr('src',data.image);
        $('#item-to-rate').addClass('reset-after-rotate-right');
        $('.status').remove();
        },1200);
      });  

       // var recommended_name = ('#recommended_item_name').html();
       // var recommended_color = ('#recommended_item_color').html();
       // var recommended_price = ('#recommended_item_price').html();
       // var recommended_used = ('#recommended_item_used').html();
       // var recommended_image = ('#recommended_item_image').html();
//refresh cart

      $.ajax({
        type: "GET",
        url: "ajax/refresh-cart.php",
        data: {name: recommended_name,
              color: recommended_color,
              price: recommended_price,
              used: recommended_used,
              image: recommended_image
        },
        error: function(xhr, statusText) { alert("Error: "+statusText); },
        success: function(){ 
          alert('success');
          $('#recommended_items').css('background','black');
          $('#recommended_items img').attr('src',data.recommended_image);
        }
      });

    });


// on swipeleft
   $("#item-to-rate").on("swipeleft",function(){
    $(this).removeClass('rotate-right reset-after-rotate-right rotate-left reset-after-rotate-left');
    $(this).addClass('rotate-left');
    $('#item-to-rate').find('.status').remove();
    $(this).append('<div class="status dislike">Dislike!</div>');

       var item = $('#item-to-rate img').data('id');
       var match = $('#item-to-rate img').data('match');

       $.get('ajax/match-item.php',{
            item_id: item,
            match_id: match
         }, function(data){
          console.log(data);

        setTimeout(function(){
        $('#girl-with-tongue').show();
        $('#item-to-rate img').data('id',data.item_id);
        $('#item-to-rate img').attr('src',data.image);
        $('#item-to-rate').addClass('reset-after-rotate-right');
        $('.status').remove();
        },900);
      });
        setTimeout(function(){
        },1000);    
    });
   
// onclick left
   $('#girl-with-tongue').click(function(){
    // $('#girl-with-tongue').hide(); 
    $("#item-to-rate").removeClass('rotate-right reset-after-rotate-right rotate-left reset-after-rotate-left');
    $("#item-to-rate").addClass('rotate-left');
    $("#item-to-rate").find('.status').remove();
    $("#item-to-rate").append('<div class="status dislike">Dislike!</div>');

       var item = $('#item-to-rate img').data('id');
       var match = $('#item-to-rate img').data('match');

       $.get('ajax/match-item.php',{
            item_id: item,
            match_id: match
         }, function(data){
          console.log(data);

        setTimeout(function(){
        $('#girl-with-tongue').show(); 
        $('#item-to-rate img').data('id',data.item_id);
        $('#item-to-rate img').attr('src',data.image);
        $('#item-to-rate').addClass('reset-after-rotate-right');
        $('.status').remove();
        },900);
      });
        setTimeout(function(){
        },1000);    
    });

   $('#clear_all_items_from_bag').click(function(){
      $.ajax({
        type: "GET",
        url: "ajax/destroy-items.php",
        error: function(xhr, statusText) { alert("Error: "+statusText); },
        success: function(){ 
          $('#recommended_items').empty();
        }
      });
    });

   $('#show_all_items_in_bag').click(function(){
      window.location.reload();
    });


});
