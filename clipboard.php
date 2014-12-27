    <div class="row" id="recommended-items">
      <div class="small-12 medium-12 large-12 columns border">
<!--         <?php 
        $result = $connection->query("SELECT DISTINCT matches.id,matches.name,matches.color,matches.price,matches.used,matches.image FROM `matches` JOIN `items_matches` ON items_matches.matches_id = matches.id WHERE items_matches.items_id = 1");
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        ?> -->
        <div class="row show-for-medium-up">
          <div class="small-4 medium-4 large-4 columns border recommended"> 
            <div class="recommended-item-with-button">
             <!--  <img class="recommended-item-image" src="" alt=""> --> 
<!--               <img class="recommended-item-image" src="images/matches/<?php echo $row['image']; ?>" alt="<?php echo $row['name']; ?>"> 
 -->     <!--          <a href="http://www.tradesy.com" class="button add-to-bag">ADD TO BAG</a>  -->
            </div>  
<!--             <p class="item-name attributes"></p>  -->         
<!--             <p class="item-name attributes"><?php echo $row['name']; ?></p>
            <p class="item-price attributes">$<?php echo $row['price']; ?></p>
            <p class="attributes"><?php echo $row['color']; ?></p>
            <p class="attributes"><?php echo $row['used']; ?></p> -->
          </div>
<!--         <?php  } ?> -->
        </div>
      </div>
    </div>