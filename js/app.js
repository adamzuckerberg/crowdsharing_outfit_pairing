$(document).ready(function() {

      $('#tracy-dinunzio').mouseover(function(){
      $('#tracy-yes-i-love-it').show();}); 
      $('#tracy-dinunzio').mouseout(function(){
      $('#tracy-yes-i-love-it').hide();});  

      $('#girl-with-tongue').mouseover(function(){
      $('#hells-no').show(); });  
      $('#girl-with-tongue').mouseout(function(){
      $('#hells-no').hide();});  

      $('.recommended-item-with-image').mouseover(function() {
        alert('fhsdfa');
      });
    
//swipe right towards CEO to match item
      $("#item-to-rate").on("swiperight",function(){
      $(this).removeClass('rotate-right reset-after-rotate-right rotate-left reset-after-rotate-left');
      $('#tracy-dinunzio').hide();
      $(this).addClass('rotate-right');
      $(this).find('.status').remove();
      $(this).append('<div class="status like">Love It!</div>');      

      var item = $('#item-to-rate img').data('id');
      var primaryId = $('#primary-item-image').data('primary');

       $.post('ajax/match-item.php',{match_item_id: item, primary_item_id: primaryId}, 
          function(data){
            console.log(data);
            setTimeout(function(){
            $('#tracy-dinunzio').show();     
            $('#item-to-rate img').data('id',data.match_item_id);
            $('#item-to-rate img').attr('src',data.image);
            $('#item-to-rate').addClass('reset-after-rotate-right');
            $('.status').remove();
            $('#recommended-items').show(); 
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
            var ajaxHTML = '';
            for (var i=0; i<matches.length; i+=1) {
              ajaxHTML += '<div class="recommended-item-with-button">';
              ajaxHTML +='<img class="recommended-item-image" src="images/matches/'+matches[i].image+'" alt="">';
              ajaxHTML += '<p class="item-name attributes">'+matches[i].name+'</p>';
              ajaxHTML += '<p class="item-price attributes">$'+matches[i].price+'</p>';
              ajaxHTML += '<p class="item-used attributes">'+matches[i].used+'</p>';
              ajaxHTML +='<a href="http://www.tradesy.com" class="button add-to-bag">ADD TO BAG</a>'; 
              ajaxHTML += '</div>';
            }
            $('#clear-all-items-from-bag').show();
            $('#ajax-items')[0].innerHTML = ajaxHTML;
            // $('#ajax-items').html(ajaxHTML);
         })     
          .done(function() {
          console.log('success - item matched');
          })     
          .fail(function() {
          console.log('ajax error');
          })

      }); //end swipe right on CEO

//click right on CEO to match item
    $('#tracy-dinunzio').click(function(){
      $("#item-to-rate").removeClass('rotate-right reset-after-rotate-right rotate-left reset-after-rotate-left');
      $('#tracy-dinunzio').hide();
      $("#item-to-rate").addClass('rotate-right');
      $("#item-to-rate").find('.status').remove();
      $("#item-to-rate").append('<div class="status like">Love It!</div>');      

      var item = $('#item-to-rate img').data('id');
      var primaryId = $('#primary-item-image').data('primary');

//reveal new match item
       $.post('ajax/match-item.php',{match_item_id: item, primary_item_id: primaryId}, 
          function(data){
            console.log(data);
            setTimeout(function(){
            $('#tracy-dinunzio').show();     
            $('#item-to-rate img').data('id',data.match_item_id);
            $('#item-to-rate img').attr('src',data.image);
            $('#item-to-rate').addClass('reset-after-rotate-right');
            $('.status').remove();
            $('#recommended-items').show(); 
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
          var ajaxHTML = '';
          for (var i=0; i<matches.length; i+=1) {
            ajaxHTML += '<div class="recommended-item-with-button">';
            ajaxHTML +='<img class="recommended-item-image" src="images/matches/'+matches[i].image+'" alt="">';
            ajaxHTML += '<p class="item-name attributes">'+matches[i].name+'</p>';
            ajaxHTML += '<p class="item-price attributes">$'+matches[i].price+'</p>';
            ajaxHTML += '<p class="item-used attributes">'+matches[i].used+'</p>';
            ajaxHTML +='<a href="http://www.tradesy.com" class="button add-to-bag">ADD TO BAG</a>'; 
            ajaxHTML += '</div>';
          }
          ajaxHTML += '';
          $('#clear-all-items-from-bag').show();
          $('#ajax-items')[0].innerHTML = ajaxHTML;
          // $('#ajax-items').html(ajaxHTML);
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
        $('#recommended-items').show();       
      })
        .done(function() {
        console.log('success - empty cart');
        })     
        .fail(function() {
        console.log('ajax error');
        })
    });

    //user is able to select and delete item from the screen using BACKSPSACE or DELETE
    // $('.recommended-item-with-image').click(function(){
    //     $('.recommended-item-with-button').not(this).removeClass('active');
    //     $(this).toggleClass('active');
    // });

    $(document.body).keyup(function(event){
        if (event.keyCode == 46 || event.keyCode == 8) {
            event.preventDefault();
            $(".active").remove();
        }
    });


    var form = $('#ajax-form-new-item');
    var formMessages = $('#form-messages');

    $('#ajax-form-new-item').submit( function(event){
      event.preventDefault();
      var formData = $(form).serialize();

      $.ajax({
        type: 'POST',
        url: 'ajax/new-item.php', 
        data: formData
      })
      .done(function(response) {
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');
      $(formMessages).text(response);
      $('#primary_name').val('');
      $('#primary_price').val('');
      $('#primary_color').val('');
      $('#primary_condition').val('');
      $('#primary_image').val(''); 
      $('#add-item-modal').dialog('close');    
      })
      .fail(function(data) {
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');
      if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
      } else {
          $(formMessages).text('Oops! An error occured and your message could not be sent.');
          }
        }); 
      });

//click primary item to reveal next item
    $('#primary-item-image').click(function(){
      $("#primary-item-image").removeClass('reset-after-rotate-left-primary-item rotate-left-primary-item');
      $("#primary-item-image").addClass('rotate-left-primary-item');     

      var primaryId = $('#primary-item-image').data('primary');

//reveal new match item
       $.post('ajax/show-new-primary-item.php',{primary_item_id: primaryId}, 
          function(data){
            console.log(data);
            setTimeout(function(){   
            $('#primary-item-image').data('primary',data.primary_item_id);
            $('#primary-item-image').attr('src',data.image);
            $('.primary-item-name').html(data.item_name);
            $('.primary-item-price').html('$'+data.item_price);
            $('.primary-item-condition').html(data.item_condition);
            $('#primary-item-image').addClass('reset-after-rotate-left-primary-item');
            },500);
          })        
          .done(function() {
          console.log('success - item matched');
          })     
          .fail(function() {
          console.log('ajax error');
          })

    }); //end click primary item

}); //close document.ready
