<?php
require("inc/config.php");
?>
<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PearSorbet | Style CrowdPairing </title>
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
          <h1 id="tradesy"><span class="logo-first-letter">P</span>EAR <span class="logo-first-letter">S</span>ORBET</h1>
        </li>
      </ul>
    </nav>
    <h2 class="tagline show-for-medium-up">BECAUSE EVERYONE LOVES SHOPPING WITH A FRIEND</h2>
    <div class=row>
      <div class="small-5 medium-5 large-5 columns item-to-match-section border" id="primary-item">
        <img id="primary-item-image" src="images/items/brooks-brothers-coat-navy-1147498.jpg" alt="Brooks Brothers Coat Navy" data-primary='1'>
        <p class="show-for-medium-up primary-item-name">Brooks Brothers Double Breasted Pea Coat</p>
        <p class="show-for-medium-up primary-item-price">$175.50</p>
        <p class="show-for-medium-up primary-item-condition">New</p>
        <div class="row">
          <div class="small-6 medium-6 large-6 columns border" id="add-item-button">
            <a href="#" data-reveal-id="add-item-modal" class="radius small button">ADD ITEM</a>
          </div>
          <div class="small-6 medium-6 large-6 columns border" id="delete-outfit-button">
            <a href="#" id="clear-all-items-from-bag" class="radius small button alert">DELETE OUTFIT</a>
          </div>          
        </div>
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
      <div class="small-12 medium-12 large-12 columns border">
        <div class="row" id="ajax-items">
        </div>
      </div>
    <div id="add-item-modal" class="reveal-modal" data-reveal>
      <h2>Add a New Item</h2>
      <div id="form-messages"></div>
      <form data-abide name="ajax-form-new-item" id="ajax-form-new-item" method="post" action="ajax/new-item.php" enctype="multipart/form-data">
       <div class="row">
          <div class="large-12 columns">
              <label>NAME <small>required</small> 
                <input type="text" name="primary_name" id="primary_name" required pattern="[a-zA-Z]+"/>
              </label>
                <small class="error">An item name is required.</small>
          </div>
        </div>
        <div class="row">
          <div class="large-4 columns"> 
            <label>COLOR <small>required</small>
              <input type="text" name="primary_color" id="primary_color" required pattern="[a-zA-Z]+"/>
            </label>
              <small class="error">A color is required.</small>
          </div>
          <div class="large-4 columns">
            <label>SELLING PRICE <small>required</small>
              <input type="text" placeholder="0.00" name="primary_price" id="primary_price" required pattern="[-+]?([0-9]*\.[0-9]+|[0-9]+)"/>
            </label>
              <small class="error">A price is required.</small> 
          </div>
          <div class="large-4 columns">
            <label>CONDITION <small>required</small>
              <select name="primary_condition" id="primary_condition" required>
                <option value="New">New</option>
                <option value="Like New">Like New</option>
                <option value="Gently Used">Gently Used</option>
              </select>
            </label>
              <small class="error">Please select the condition of the item.</small> 
          </div>
        </div>
        <div class="row">
          <div class="large-6 columns upload-input">
            <label>UPLOAD IMAGE<small> Required</small>
              <input type="file" name="primary_image" id="primary_image" placeholder="image.jpg" required/><br>
            </label> 
            <small class="error">Please upload a .jpg image.</small> 
          </div>      
        </div>
        <div class="row">
          <div class="large-3 columns">
              <button class="radius button" type="submit" id="new-item-submit">Add Item</button>
          </div>
          <div class="large-9 columns"></div>
        </div>
      </form>
     <a class="close-reveal-modal">&#215;</a>
    </div>
    <div class="row"></div> 
      <script src="js/vendor/jquery.js"></script>
      <script src="js/foundation.min.js"></script>
      <script src="js/foundation/foundation.abide.js"></script>
      <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
      <script src="js/app.js"></script>
      <script> $(document).foundation();</script>
      <script src="js/jquery.form.min.js"></script>
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
