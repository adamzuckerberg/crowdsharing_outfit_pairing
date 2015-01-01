Personal Shopper Tool:
	http://www.tradesy-outfits.com/ (forwards to http://www.pearsorbet.com/)

	This responsive, web application allows users to add new clothing items along with an associated image and other attributes (e.g. name, price, color, condition).  

	In addition, users can create a custom 'outfit' for each item by selecting from a list of potential 'matches' of the primary item via a swipe or click to identify whether an item is a match or not a match.  

	All matched items dynamically appear via AJAX and can be removed via a "delete outfit" button.

How to Use this Tool:
	1.) Navigate to www.tradesy-outfits.com (which now forwards to http://www.pearsorbet.com/)

	2.) On the left is an image of the primary item. Click on the primary item to advance to the next primary item.

	3.) On the right is the first of a collection of items to try to match to the primary item on the left.

	4.)  Start with the current primary item, click on the image to advance to the next primary item, or add a new item via the "add item" button which will open a modal dialog box for you to add a new item's name, color, price, condition and a .jpg image of the new primary item.

	5.) Swipe-right towards the CEO (on desktops simply click on the CEO) on the item on the right to 'like' the item (i.e. you think it matches the primary item and creates an 'outfit'). This creates an inventory of items in the database which are related as matches to the primary item. 

	6.) Swipe-left towards the woman with her tongue out (on desktops click on the woman) to 'dislike' the item if you think it does NOT match the primary item.

	7.) The next item to match will be revealed. Continue to match items by swiping/clicking.

	8.) All the items you have matched to the primary item will appear instantly in the lower section of the page. The top section would be used by Tradesy Personal Shoppers to create the inventory. Users would see the 'ADD TO BAG' links in a section below the current "YOU MIGHT ALSO LIKE" section on the www.tradesy.com website.

    9.) Items persist in the MySQL database. To delete all matched items for any primary item and start over creating an outfit for that primary item, click the "Delete Outfit" button.

Why did I Create the Personal Shopper Tool?

	User-Experience: The inspiration for this tool is that by having a Personal Shopper or friend recommend an item, a shopper's perceived risk may be lowered, increasing the likelihood of an upsell purchase.  In addition, the user achieves a complete outfit rather than simply a single item - this is an 'added-value' experience. Lastly, because of the uniqueness of any particular item on the Tradesy website, there is a psychological incentive to buy the recommended item while in the current checkout process rather than risk the item being purchased by another user.

	Business Goals: The Personal Shopper tool has the potential to increase average-revenue-per-checkout and total annual sales for Tradesy.  Users benefit from the added-value of achieving a matching outfit rather than simply an à la carte item. There also exists the potential for adding bundled pricing and discounting (if applicable to Tradesy's business strategy) to incentivize users to purchase the outfit/package rather than simply the single item.

	Crowdsourced Recommendations: Unlike Amazon or similar sites which have depth of inventory and thus are able to run multivariate correlations/regressions and recommend items based on historical purchase behavior, I imagine that Tradesy frequently has shallow inventory (i.e. many one-off items in limited quantity) since items are posted by users in small quantities. By crowdsourcing outfit recommendations, the Tradesy team or a group of fashion-forward Tradesy Personal Shoppers can always be matching items with a simple, fun, responsive user interface.  Style is an art, so accurate recommendations necessitate a labor-intensive process rather than a simple algorithm.  In other words, you would need a process to manually match an outfit (i.e. "Do these shoes go with that purse"? would be hard for a script to determine). Adding crowdsourced recommendations with an easy, fun, Tinder-style swipe creates an efficient process to generate recommendations and the further potential exists to expand the crowdsourcing to include Tradesy's end-users so that users can contribute to outfit recommendations.

Welcome to Tradesy's (Crowdsourced) Personal Shopper Tool!

