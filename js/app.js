$(document).ready(function(){
  alert('load')
    $("#item-to-rate").click(function() {
  alert('click');
});

}); 

$(document).ready(function(){

    $("#item-to-rate").on("swiperight",function(){
      console.log('swiperight');
      $(this).removeClass('rotate-right reset-after-rotate-right rotate-left reset-after-rotate-left');
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
        $('#item-to-rate img').data('id',data.item_id);
        $('#item-to-rate img').attr('src',data.image);
        $('#item-to-rate').addClass('reset-after-rotate-right');
        $('.status').remove();
        window.location.reload();
        },900);
      });


    });  

   $("#item-to-rate").on("swipeleft",function(){
    $(this).removeClass('rotate-right reset-after-rotate-right rotate-left reset-after-rotate-left');
    $(this).addClass('rotate-left');
    $('#item-to-rate').find('.status').remove();
    $(this).append('<div class="status dislike">Hell\'s No!</div>');

    setTimeout(function(){
    $('#item-to-rate').addClass('reset-after-rotate-left');
    $('.status').remove();
    window.location.reload();  
    },900);
   

  });
});


