
DELIMITER $$

DROP PROCEDURE IF EXISTS backup_daily_trans$$

CREATE PROCEDURE backup_daily_trans()
BEGIN
    DELETE FROM bkc_daily_trans;
    INSERT INTO bkc_daily_trans 
		(id, event_date, user_id, cat_id, value, type, created_at, updated_at)
    SELECT
		id, event_date, user_id, cat_id, value, type, created_at, updated_at
	FROM daily_trans;
END$$

DELIMITER ;

