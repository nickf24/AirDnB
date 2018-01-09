-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;
		
CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(25) NULL DEFAULT NULL,
  `password` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
KEY (`id`)
);

-- ---
-- Table 'Listing'
-- 
-- ---

DROP TABLE IF EXISTS `Listing`;
		
CREATE TABLE `Listing` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `host_id` INTEGER NULL DEFAULT NULL,
  `Address` MEDIUMTEXT NULL DEFAULT NULL,
  `price` DECIMAL NULL DEFAULT NULL,
  `rating` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `host_id`)
);

-- ---
-- Table 'reviews'
-- 
-- ---

DROP TABLE IF EXISTS `reviews`;
		
CREATE TABLE `reviews` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `review_text` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
KEY (`id`)
);

-- ---
-- Table 'photos'
-- 
-- ---

DROP TABLE IF EXISTS `photos`;
		
CREATE TABLE `photos` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `photo_url` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'availability dates'
-- 
-- ---

DROP TABLE IF EXISTS `availability dates`;
		
CREATE TABLE `availability dates` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `reserved_date_start` DATE NULL DEFAULT NULL,
  `reserved_date_end` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'listing-availibility'
-- 
-- ---

DROP TABLE IF EXISTS `listing-availibility`;
		
CREATE TABLE `listing-availibility` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `listing_id` INTEGER NULL DEFAULT NULL,
  `availabilty_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'listing-photos'
-- 
-- ---

DROP TABLE IF EXISTS `listing-photos`;
		
CREATE TABLE `listing-photos` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `listing_id` INTEGER NULL DEFAULT NULL,
  `photo_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'listing-reviews'
-- 
-- ---

DROP TABLE IF EXISTS `listing-reviews`;
		
CREATE TABLE `listing-reviews` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `listing_id` INTEGER NULL DEFAULT NULL,
  `reviews_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Users` ADD FOREIGN KEY (id) REFERENCES `Listing` (`host_id`);
ALTER TABLE `Listing` ADD FOREIGN KEY (id) REFERENCES `Listing` (`host_id`);
ALTER TABLE `listing-availibility` ADD FOREIGN KEY (listing_id) REFERENCES `Listing` (`id`);
ALTER TABLE `listing-availibility` ADD FOREIGN KEY (availabilty_id) REFERENCES `availability dates` (`id`);
ALTER TABLE `listing-photos` ADD FOREIGN KEY (listing_id) REFERENCES `Listing` (`id`);
ALTER TABLE `listing-photos` ADD FOREIGN KEY (photo_id) REFERENCES `photos` (`id`);
ALTER TABLE `listing-reviews` ADD FOREIGN KEY (listing_id) REFERENCES `Listing` (`id`);
ALTER TABLE `listing-reviews` ADD FOREIGN KEY (reviews_id) REFERENCES `reviews` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Listing` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `reviews` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `availability dates` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `listing-availibility` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `listing-photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `listing-reviews` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`name`,`password`) VALUES
-- ('','','');
-- INSERT INTO `Listing` (`id`,`host_id`,`Address`,`price`,`rating`) VALUES
-- ('','','','','');
-- INSERT INTO `reviews` (`id`,`review_text`) VALUES
-- ('','');
-- INSERT INTO `photos` (`id`,`photo_url`) VALUES
-- ('','');
-- INSERT INTO `availability dates` (`id`,`reserved_date_start`,`reserved_date_end`) VALUES
-- ('','','');
-- INSERT INTO `listing-availibility` (`id`,`listing_id`,`availabilty_id`) VALUES
-- ('','','');
-- INSERT INTO `listing-photos` (`id`,`listing_id`,`photo_id`) VALUES
-- ('','','');
-- INSERT INTO `listing-reviews` (`id`,`listing_id`,`reviews_id`) VALUES
-- ('','','');