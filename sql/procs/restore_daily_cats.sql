
DELIMITER $$

DROP PROCEDURE IF EXISTS restore_daily_cats$$

CREATE PROCEDURE restore_daily_cats()
BEGIN
    
    INSERT INTO daily_cats 
		  (id, name, hypercat, created_at, updated_at)
    SELECT
		  id, name, hypercat, created_at, updated_at
	FROM bkc_daily_cats;
END$$

DELIMITER ;

