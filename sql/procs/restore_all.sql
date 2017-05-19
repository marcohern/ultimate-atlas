
DELIMITER $$

DROP PROCEDURE IF EXISTS restore_all$$

CREATE PROCEDURE restore_all()
BEGIN
    CALL restore_users();
    CALL restore_daily_cats();
    CALL restore_daily_trans();
END$$

DELIMITER ;