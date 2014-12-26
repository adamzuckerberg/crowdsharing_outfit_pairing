<?php
require("inc/config.php");
?>
<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tradesy | Outfits</title>
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
          <h1 id="tradesy">TRADESY</h1>
        </li>
      </ul>
    </nav>
    <h2 class="tagline show-for-medium-up">BECAUSE EVERYONE LOVES SHOPPING WITH A FRIEND</h2>
    <div class=row>
      <div class="small-5 medium-5 large-5 columns item-to-match-section item-to-match-container border">
        <h4 class="show-for-medium-up">Item to Match</h4>
        <img src="images/brooks-brothers-coat-navy-1147498.jpg" alt="Brooks Brothers Coat Navy">
        <p class="show-for-medium-up">Brooks Brothers Double Breasted Pea Coat</p>
        <a href="#" data-reveal-id="add-item-modal" class="radius button">ADD ITEM</a>
      </div>
      <div class="small-push-12 medium-7 large-7 columns tradesy-personal-shopper-tool-section">
        <h4 class="show-for-medium-up">Does This Item Match?</h4>
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
    <div class=row>
      <div class="show-for-medium-up medium-4 large-4 columns">
          <div class="button" id="clear-all-items-from-bag">CLEAR ITEMS</div>
      </div>
      <div class="show-for-medium-up medium-4 large-4 columns">
        <div class="button success" id="show-all-items-in-bag">SHOW ITEMS</div>
      </div>    
      <div class="show-for-medium-up medium-4 large-4 columns"></div>
    </div>
    <div class="row" id="recommended-items">
      <div class="small-12 medium-12 large-12 columns border">
        <?php 
        $result = $connection->query("SELECT DISTINCT matches.id,matches.name,matches.color,matches.price,matches.used,matches.image FROM `matches` JOIN `items_matches` ON items_matches.matches_id = matches.id WHERE items_matches.items_id = 1");
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        ?>
        <div class="row show-for-medium-up">
          <div class="small-4 medium-4 large-4 columns border recommended"> 
            <div class="recommended-item-with-button">
              <img class="recommended-item-image" src="images/matches/<?php echo $row['image']; ?>" alt="<?php echo $row['name']; ?>"> 
              <a href="http://www.tradesy.com" class="button add-to-bag">ADD TO BAG</a> 
            </div>  
            <p class="item-name attributes"><?php echo $row['name']; ?></p>
            <p class="item-price attributes">$<?php echo $row['price']; ?></p>
            <p class="attributes"><?php echo $row['color']; ?></p>
            <p class="attributes"><?php echo $row['used']; ?></p>
          </div>
        <?php  } ?>
        </div>
      </div>
    </div>
    <div id="add-item-modal" class="reveal-modal" data-reveal>
      <h2>This is a modal.</h2>
      <p>Reveal makes these very easy to summon and dismiss. The close button is simply an anchor with a unicode character icon and a class of <code>close-reveal-modal</code>. Clicking anywhere outside the modal will also dismiss it.</p>
      <p>Finally, if your modal summons another Reveal modal, the plugin will handle that for you gracefully.</p>
      <p><a href="#" data-reveal-id="secondModal" class="secondary button">Second Modal...</a></p>
      <a class="close-reveal-modal">&#215;</a>
    </div>
<!--     <div id="dialog-form" title="Create new user">
      <p class="validateTips">All form fields are required.</p>
      <form>
        <fieldset>
          <label for="name">Name</label>
          <input type="text" name="name" id="name" value="Jane Smith" class="text ui-widget-content ui-corner-all">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" value="jane@smith.com" class="text ui-widget-content ui-corner-all">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" value="xxxxxxx" class="text ui-widget-content ui-corner-all">
      -->
          <!-- Allow form submission with keyboard without duplicating the dialog button -->
<!--           <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
        </fieldset>
      </form>
    </div> -->
    <div class="row"></div>
      <script src="js/vendor/jquery.js"></script>
      <script src="js/foundation.min.js"></script>
      <script src="js/app.js"></script>
      <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
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
