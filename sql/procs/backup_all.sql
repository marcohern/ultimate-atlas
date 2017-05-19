
DELIMITER $$

DROP PROCEDURE IF EXISTS backup_all$$

CREATE PROCEDURE backup_all()
BEGIN
    CALL backup_users();
    CALL backup_daily_cats();
    CALL backup_daily_trans();
END$$

DELIMITER ;