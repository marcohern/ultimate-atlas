
DELIMITER $$

DROP PROCEDURE IF EXISTS restore_daily_trans$$

CREATE PROCEDURE restore_daily_trans()
BEGIN
    
    INSERT INTO daily_trans
        (id, event_date, user_id, cat_id, value, type, created_at, updated_at)
    SELECT
        id, event_date, user_id, cat_id, value, type, created_at, updated_at
    FROM bkc_daily_trans;
END$$

DELIMITER ;

