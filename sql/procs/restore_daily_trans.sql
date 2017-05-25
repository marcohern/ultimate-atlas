
DELIMITER $$

DROP PROCEDURE IF EXISTS restore_daily_trans$$

CREATE PROCEDURE restore_daily_trans()
BEGIN
    
    INSERT INTO daily_trans
        (id, event_date, user_id, cat_id, value, type, created_at, updated_at)
    SELECT
        id, event_date, user_id, cat_id, value, type, created_at, updated_at
    FROM bkc_daily_trans;
    
    UPDATE daily_trans
		SET `from` = CASE
			WHEN value > 3000000 THEN '3RDPARTY'
			WHEN value < 0 THEN CASE
				WHEN type = 'CASH' THEN 'POCKET'
                WHEN type = 'DEBIT' THEN 'DEBIT'
                ELSE 'POCKET'
			END
            WHEN value > 0 THEN CASE
				WHEN type = 'CASH' THEN 'DEBIT'
                WHEN type = 'DEBIT' THEN 'DEBIT'
                ELSE 'DEBIT'
            END
            ELSE 'POCKET'
		END,
        `to` = CASE
			WHEN value > 3000000 THEN 'DEBIT'
			WHEN value < 0 THEN CASE
				WHEN type = 'CASH' THEN '3RDPARTY'
                WHEN type = 'DEBIT' THEN '3RDPARTY'
                ELSE '3RDPARTY'
			END
            WHEN value > 0 THEN CASE
				WHEN type = 'CASH' THEN 'POCKET'
                WHEN type = 'DEBIT' THEN 'POCKET'
                ELSE 'POCKET'
            END
            ELSE 'POCKET'
        END;
			
END$$

DELIMITER ;

