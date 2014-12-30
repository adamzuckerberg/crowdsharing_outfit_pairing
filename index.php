<?php
require("inc/config.php");
?>
<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PearSorbet | CrowdPaired Styles </title>
    <link rel="shortcut icon" href="http://www.tradesy-outfits.com/images/favicon.ico" />
    <link rel="stylesheet" href="css/foundation.min.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
    <script src="js/vendor/modernizr.js"></script>
  </head>
  <body>
    <nav class="top-bar" data-topbar role="navigation">
      <ul class="title-area">
        <li class="name">
          <h1 id="tradesy">PEAR SORBET</h1>
        </li>
      </ul>
    </nav>
    <h2 class="tagline show-for-medium-up">BECAUSE EVERYONE LOVES SHOPPING WITH A FRIEND</h2>
    <div class=row>
      <div class="small-5 medium-5 large-5 columns item-to-match-section border" id="primary-item">
        <h4 class="show-for-medium-up item-to-match-headline">Item to Match</h4>
        <img id="primary-item-image" src="images/items/brooks-brothers-coat-navy-1147498.jpg" alt="Brooks Brothers Coat Navy" data-primary='1'>
        <p class="show-for-medium-up primary-item-name">Brooks Brothers Double Breasted Pea Coat</p>
        <p class="show-for-medium-up primary-item-price">$175.50</p>
        <p class="show-for-medium-up primary-item-condition">New</p>
        <a href="#" style="color:white;font-weight:400;" data-reveal-id="add-item-modal" class="radius small button">ADD ITEM</a>
      </div>
      <div class="small-push-12 medium-7 large-7 columns tradesy-personal-shopper-tool-section">
        <h4 class="show-for-medium-up item-to-match-headline">Does This Item Match?</h4>
          <div id="girl-with-tongue" class="small-3 medium-3 large-3 columns border">
            <img src="images/unlike-woman.jpg" alt="Professional Woman with Tongue Out">
            <h5 id="hells-no">Hells No!</h5>
          </div>
          <div id="item-to-rate" class="small-2 medium-2 large-2 columns border">
            <img src="images/matches/louis-vuitton-shoulder-bag-1236231.jpg" alt="Louis Vuitton Shoulder Bag" data-id='1'>
          </div>
          <div id="tracy-dinunzio" class="small-3 medium-3 large-3 columns border">
            <img src="images/tracy-dinunzio.jpg" alt="Tracy Dinunzio, CEO">
            <h5 id="tracy-yes-i-love-it">Yes, I Love It!</h5>
          </div>
      </div>
    </div>
    <div class="row">
      <div class="large-12 show-for-medium-up"></div>
    </div>
    <h2 class="show-for-medium-up personal-shopper-headline">CREATE THE PERFECT OUTFIT WITH THESE ITEMS</h2>
    <h2 class="show-for-medium-up personal-shopper-tagline">ALL ITEMS WERE PERSONALLY SELECTED BY OUR IN-HOUSE FASHION EXPERTS</h2>
    <div class="row" id="recommended-items">
        <div class="small button show-for-medium-up" id="show-all-items-in-bag">SHOW ITEMS</div>
        <div class="small button alert show-for-medium-up" id="clear-all-items-from-bag">EMPTY BAG</div>
      <div class="small-12 medium-12 large-12 columns border">
        <div class="row show-for-medium-up" id="ajax-items">
        </div>
      </div>
    <div id="add-item-modal" class="reveal-modal" data-reveal>
      <h2>Add a New Item</h2>
      <div id="form-messages"></div>
      <form name="ajax-form-new-item" id="ajax-form-new-item" method="post" action="ajax/new-item.php" enctype="multipart/form-data">
        <div class="row">
          <div class="large-12 columns">
            <label>NAME
              <input type="text" name="primary_name" id="primary_name" required/>
            </label>
          </div>
        </div>
        <div class="row">
          <div class="large-4 columns">
            <label>COLOR
              <input type="text" name="primary_color" id="primary_color" required/>
            </label>
          </div>
          <div class="large-4 columns">
            <label>SELLING PRICE
              <input type="text" placeholder="0.00" name="primary_price" id="primary_price" required/>
            </label> 
          </div>
          <div class="large-4 columns">
            <label>CONDITION
              <select name="primary_condition" id="primary_condition" required>
                <option value="New">New</option>
                <option value="Like New">Like New</option>
                <option value="Gently Used">Gently Used</option>
              </select>
            </label>
          </div>
        </div>
        <div class="row">
          <div class="large-6 columns upload-input">
            <label>UPLOAD IMAGE
              <input type="file" name="primary_image" id="primary_image" placeholder="image.jpg" /><br>
            </label> 
          </div>      
        </div>
        <div class="row">
          <div class="large-3 columns">
              <button class="radius button" type="submit" id="new-item-submit">Add Item</button>
          </div>
          <div class="large-9 columns"></div>
        </div>
      <form>
     <a class="close-reveal-modal">&#215;</a>
    </div>
    <div class="row"></div>
      <script src="js/vendor/jquery.js"></script>
      <script src="js/foundation.min.js"></script>
      <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
      <script src="js/jquery.form.min.js"></script>
      <script src="js/app.js"></script>
      <script>
        $(document).foundation();
      </script>
  </body>
  <footer class="row">
    <div class="large-12 columns">
      <div class="row">
        <div class="large-6 columns">
        </div>
        <div class="large-6 columns">
          <ul class="inline-list right">
          </ul>
        </div>
      </div>
    </div>
  </footer>
</html>
