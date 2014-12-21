-- phpMyAdmin SQL Dump
-- version 4.1.8
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 21, 2014 at 03:15 PM
-- Server version: 5.5.40-cll
-- PHP Version: 5.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ecstati5_tradesy`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE IF NOT EXISTS `items` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin1 NOT NULL,
  `price` float NOT NULL,
  `color` varchar(255) CHARACTER SET latin1 NOT NULL,
  `used` varchar(255) CHARACTER SET latin1 NOT NULL,
  `image` varchar(255) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `price`, `color`, `used`, `image`) VALUES
(1, 'Brooks Brothers Coat Navy', 175.5, 'Black', 'New', 'brooks-brothers-coat-navy-1147498.jpg'),
(2, 'Michael Kors Coat', 204, 'Red', 'Like New', 'michael-kors-coat-798552.jpg'),
(3, 'GAP 1969 Light Wash Womens Jeans Jacket', 43.2, 'Blue', 'Gently Used', 'gap-1969-sz-xs-light-wash-womens-jeans-jacket-1339725.jpg'),
(4, 'Unknown Wool Grey Cape', 46.16, 'Grey', 'Gently Used', 'unknown-wool-grey-cape-1517544.jpg'),
(5, 'Ann Taylor Loft Black Blazer', 71.2, 'Black', 'Like New', 'ann-taylor-loft-black-blazer-1468471.jpg'),
(6, 'Volcom Windbreaker Raincoat Military', 48.5, 'Green', 'Gently Used', 'volcom-windbreaker-raincoat-military-1347962.jpg'),
(7, 'Nasty Gal Sleepwear Loungewear Kimono Black Cape', 25.5, 'Black', 'Gently Used', 'nasty-gal-sleepwear-lounge-wear-kimono-black-cape-1337491.jpg'),
(8, 'name', 0, 'color', 'condition', 'image');

-- --------------------------------------------------------

--
-- Table structure for table `items_matches`
--

CREATE TABLE IF NOT EXISTS `items_matches` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `items_id` int(10) NOT NULL,
  `matches_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `items_id` (`items_id`),
  KEY `matches_id` (`matches_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=263 ;

--
-- Dumping data for table `items_matches`
--

INSERT INTO `items_matches` (`id`, `items_id`, `matches_id`) VALUES
(137, 2, 9),
(252, 1, 1),
(253, 1, 6),
(254, 1, 1),
(255, 1, 5),
(256, 1, 1),
(257, 1, 3),
(258, 1, 4),
(259, 1, 5),
(260, 1, 7),
(261, 1, 9),
(262, 1, 10);

-- --------------------------------------------------------

--
-- Table structure for table `matches`
--

CREATE TABLE IF NOT EXISTS `matches` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin1 NOT NULL,
  `price` float NOT NULL,
  `color` varchar(255) CHARACTER SET latin1 NOT NULL,
  `used` varchar(255) CHARACTER SET latin1 NOT NULL,
  `image` varchar(255) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table `matches`
--

INSERT INTO `matches` (`id`, `name`, `price`, `color`, `used`, `image`) VALUES
(1, 'Louis Vuitton Shoulder Bag', 415, 'Brown', 'Gently Used', 'louis-vuitton-shoulder-bag-1236231.jpg'),
(2, 'Louis Vuitton Bi-Color Epi Petit Noe Shoulder Bag', 645, 'Red', 'Gently Used', 'louis-vuitton-vintage-epi-petit-shoulder-bag-red-1289566.jpg'),
(3, 'Chanel Shoulder Bag Greyrubber', 324.5, 'Beige', 'Like New', 'chanel-shoulder-bag-greyrubber-1300543.jpg'),
(4, 'Coach Signature Embossed Sz 11 Tan Boots', 115, 'Tan', 'New', 'coach-tan-boots-1559766.jpg'),
(5, 'Burberry Flats', 128, 'Striped', 'Like New', 'burberry-flats-1555666.jpg'),
(6, 'Tory Burch Rabbit Fur Black Boots', 215.5, 'Black', 'Gently Used', 'tory-burch-black-boots-1555869.jpg'),
(7, 'Vernis Animal Coin Pouch', 505, 'Pink', 'Like New', 'louis-vuitton-1521345.jpg'),
(8, 'Michael Kors Champagne Dial Gold-Tone Ladies Watch', 249, 'Gold', 'Like New', 'michael-kors-michael-kors-champagne-dial-gold-tone-ladies-watch-1519675.jpg'),
(9, 'AG Adriano Goldschmied The Legging Ankle Skinny Jeans', 161, 'Blue', 'Like New', 'ag-adriano-goldschmied-skinny-jeans-washlook-1563737.jpg'),
(10, 'J Crew Shorts', 26, 'Pink', 'Like New', 'j-crew-shorts-952257.jpg');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `items_matches`
--
ALTER TABLE `items_matches`
  ADD CONSTRAINT `items_matches_ibfk_1` FOREIGN KEY (`items_id`) REFERENCES `items` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `items_matches_ibfk_2` FOREIGN KEY (`matches_id`) REFERENCES `matches` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
