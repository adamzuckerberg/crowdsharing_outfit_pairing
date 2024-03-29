/*global $:false */
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
          show_all_items();
          })     
          .fail(function() {
          console.log('ajax error');
          });

        //show all matched items
         $.get('ajax/show-items.php',
          function(matches){ 
            var ajaxHTML = '';
            for (var i=0; i<matches.length; i+=1) {
              ajaxHTML += '<div class="recommended-item-with-button">';
              ajaxHTML +='<img class="recommended-item-image" src="images/matches/'+matches[i].image+'" alt="">';
              ajaxHTML += '<p class="item-name attributes">'+matches[i].name+'</p>';
              ajaxHTML += '<p class="item-price attributes">$'+(parseFloat(matches[i].price)).toFixed(2)+'</p>';
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
          });

      }); //end swipe right on CEO

//click right on CEO to match item
    $('#tracy-dinunzio').click(function(){
      $("#item-to-rate").removeClass('rotate-right reset-after-rotate-right rotate-left reset-after-rotate-left');
      $('#tracy-dinunzio').hide();
      $("#item-to-rate").addClass('rotate-right');
      $("#item-to-rate").find('.status').remove();
      $("#item-to-rate").append('<div class="status like">Love It!</div>');      

      //reveal new match item
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
          show_all_items();
          })     
          .fail(function() {
          console.log('ajax error');
          });

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
       })     
        .done(function() {
        console.log('success - item matched');
        show_all_items();
        })     
        .fail(function() {
        console.log('ajax error');
        });

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
      show_all_items();
      })     
      .fail(function() {
      console.log('ajax error');
      });
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
      show_all_items();
      })     
      .fail(function() {
      console.log('ajax error');
      });  
    });

   $('#clear-all-items-from-bag').click(function(){
      var primaryId = $('#primary-item-image').data('primary');
      $.post( "ajax/destroy-items.php",{primary_item_id: primaryId}, 
        function(){
        $('#ajax-items div').remove(); 
      })
        .done(function() {
        console.log('success - empty cart');
        })     
        .fail(function() {
        console.log('ajax error');
        });
    });

//form validation
    $('#primary_name').blur(function() {
      if ($(this).parents('div').hasClass('error')) {
       $(this).parents('div').children('.error').show();
       $('#new-item-submit').attr('disabled','disabled');
      } 
    });
    $('#primary_name').focus(function() {
      if ($(this).parents('div').hasClass('error')) {
       $(this).parents('div').children('.error').hide();
       $('#new-item-submit').removeAttr('disabled');
      }  
    });

    $('#primary_color').blur(function() {
      if ($(this).parents('div').hasClass('error')) {
       $(this).parents('div').children('.error').show();
       $('#new-item-submit').attr('disabled','disabled');
      } 
    });
    $('#primary_color').focus(function() {
      if ($(this).parents('div').hasClass('error')) {
       $(this).parents('div').children('.error').hide();
       $('#new-item-submit').removeAttr('disabled');
      } 
    });

    $('#primary_price').blur(function() {
      if ($(this).parents('div').hasClass('error')) {
       $(this).parents('div').children('.error').show();
       $('#new-item-submit').attr('disabled','disabled');
      } 
    });
    $('#primary_price').focus(function() {
      if ($(this).parents('div').hasClass('error')) {
       $(this).parents('div').children('.error').hide();
       $('#new-item-submit').removeAttr('disabled');
      } 
    });

    $('#primary_image').mouseover(function() {
      if ($(this).parents('div').hasClass('error')) {
       $(this).parents('div').children('.error').show();
       $('#new-item-submit').attr('disabled','disabled');
      } 
    });
    $('#primary_image').mouseout(function() {
      if ($(this).parents('div').hasClass('error')) {
       $(this).parents('div').children('.error').hide();
       $('#new-item-submit').removeAttr('disabled');
      } 
    });

//submit form with image upload
    $('#ajax-form-new-item').submit(function(){
      if ($('#ajax-form-new-item div.error').length > 0) {
        $('#new-item-submit').attr('disabled','disabled');
        return false;
      }

      $(this).ajaxSubmit({
          success: function(data) {
            $('.reveal-modal').foundation('reveal', 'close');
            $('#primary-item-image').data('primary',data.item_id);
            $('#primary-item-image').attr('src',data.image);
            $('.primary-item-name').html(data.item_name);
            $('.primary-item-price').html('$'+data.item_price);
            $('.primary-item-condition').html(data.item_condition);
            $('#primary-item-image').addClass('reset-after-rotate-left-primary-item');
            show_all_items();
          },
          error: function() {
          }
      });
      return false;
    });

//click primary item to reveal next item
    $('#primary-item-image').click(function(){
      $("#primary-item-image").removeClass('reset-after-rotate-left-primary-item rotate-left-primary-item');
      $("#primary-item-image").addClass('rotate-left-primary-item');     

      var primaryId = $('#primary-item-image').data('primary');
      console.log(primaryId);
      
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
            show_all_items();
            },500);
          })        
          .done(function() {
          console.log('success - item matched');
          })     
          .fail(function() {
          console.log('ajax error');
          });

    }); //end click primary item

  function show_all_items() {
      $('.recommended-item-with-button').remove();
       var primaryId = $('#primary-item-image').data('primary');
       $.post('ajax/show-items.php',{primary_item_id: primaryId},
          function(matches){ 
          console.log(matches);
          var ajaxHTML = '';
          for (var i=0; i<matches.length; i+=1) {
            ajaxHTML += '<div class="recommended-item-with-button">';
            ajaxHTML +='<img class="recommended-item-image" src="images/matches/'+matches[i].image+'" alt="">';
            ajaxHTML += '<p class="item-name attributes">'+matches[i].name+'</p>';
            ajaxHTML += '<p class="item-price attributes">$'+(parseFloat(matches[i].price)).toFixed(2)+'</p>';
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
        });
  }

    $('#show-all-items-in-bag').click( function() {
        show_all_items();
    });

}); //close document.ready
