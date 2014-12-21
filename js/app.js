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

         $.get('ajax/match-item.php',{
              item_id: item
          }, 
          function(data){
            console.log(data);
            setTimeout(function(){
            $('#tracy-dinunzio').show();     
            $('#item-to-rate img').data('id',data.item_id);
            $('#item-to-rate img').attr('src',data.image);
            $('#item-to-rate').addClass('reset-after-rotate-right');
            $('.status').remove();
            },1200);
          });
      });  

//click right on CEO to match item
    $('#tracy-dinunzio').click(function(){
      $("#item-to-rate").removeClass('rotate-right reset-after-rotate-right rotate-left reset-after-rotate-left');
      $('#tracy-dinunzio').hide();
      $("#item-to-rate").addClass('rotate-right');
      $("#item-to-rate").find('.status').remove();

      $("#item-to-rate").append('<div class="status like">Love It!</div>');      

      var item = $('#item-to-rate img').data('id');

         $.get('ajax/match-item.php',{
              item_id: item
          }, 
          function(data){
          console.log(data);
          setTimeout(function(){
          $('#tracy-dinunzio').show(); 
          $('#item-to-rate img').data('id',data.item_id);
          $('#item-to-rate img').attr('src',data.image);
          $('#item-to-rate').addClass('reset-after-rotate-right');
          $('.status').remove();
          },1200);
        });  
    });  

//swipe left towards unhappy woman to go to next item
   $("#item-to-rate").on("swipeleft",function(){
    $(this).removeClass('rotate-right reset-after-rotate-right rotate-left reset-after-rotate-left');
    $(this).addClass('rotate-left');
    $('#item-to-rate').find('.status').remove();
    $(this).append('<div class="status dislike">Dislike!</div>');

      var item = $('#item-to-rate img').data('id');

       $.get('ajax/no-match.php',{
              item_id: item
          }, 
          function(data){
          console.log(data);
        setTimeout(function(){
        $('#girl-with-tongue').show();
        $('#item-to-rate img').data('id',data.item_id);
        $('#item-to-rate img').attr('src',data.image);
        $('#item-to-rate').addClass('reset-after-rotate-right');
        $('.status').remove();
        },900);
      });  
    });
   
//click left on unhappy woman to go to next item
   $('#girl-with-tongue').click(function(){
    $("#item-to-rate").removeClass('rotate-right reset-after-rotate-right rotate-left reset-after-rotate-left');
    $("#item-to-rate").addClass('rotate-left');
    $("#item-to-rate").find('.status').remove();
    $("#item-to-rate").append('<div class="status dislike">Dislike!</div>');

      var item = $('#item-to-rate img').data('id');

       $.get('ajax/no-match.php',{
              item_id: item
          }, 
          function(data){
          console.log(data);
        setTimeout(function(){
        $('#girl-with-tongue').show();
        $('#item-to-rate img').data('id',data.item_id);
        $('#item-to-rate img').attr('src',data.image);
        $('#item-to-rate').addClass('reset-after-rotate-right');
        $('.status').remove();
        },900);
      });  
    });

   $('#clear_all_items_from_bag').click(function(){
      $.ajax({
        type: "GET",
        url: "ajax/destroy-items.php",
        error: function() { alert("ajax error")},
        success: function(){ 
          $('#recommended_items').empty();
        }
      });
    });

   $('#show_all_items_in_bag').click(function(){
      window.location.reload();
    });


}); //close document.ready
