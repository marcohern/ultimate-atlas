
DELIMITER $$

DROP PROCEDURE IF EXISTS backup_daily_cats$$

CREATE PROCEDURE backup_daily_cats()
BEGIN
    DELETE FROM bkc_daily_cats;
    INSERT INTO bkc_daily_cats 
		  (id, name, hypercat, created_at, updated_at)
    SELECT
		  id, name, hypercat, created_at, updated_at
	FROM daily_cats;
END$$

DELIMITER ;

