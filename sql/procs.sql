
DELIMITER $$

DROP PROCEDURE IF EXISTS backup_all$$

CREATE PROCEDURE backup_all()
BEGIN
    CALL backup_users();
    CALL backup_daily_cats();
    CALL backup_daily_trans();
END$$

DELIMITER ;
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


DELIMITER $$

DROP PROCEDURE IF EXISTS backup_users$$

CREATE PROCEDURE backup_users()
BEGIN
    DELETE FROM bkc_users;
    INSERT INTO bkc_users
        (id, username, fname, lname, birth, email, role, password, salt, activated, activated_token, remember_token, created_at, updated_at)
    SELECT 
        id, username, fname, lname, birth, email, role, password, salt, activated, activated_token, remember_token, created_at, updated_at
    FROM users;
END$$

DELIMITER ;DELIMITER $$

DROP PROCEDURE IF EXISTS import_daily_day$$

CREATE PROCEDURE import_daily_day()
BEGIN
	DECLARE loStartDate, loOriginDate, loEndDate DATE;
    DECLARE loSummaryExists INT DEFAULT 1;
    
    SET loOriginDate = (SELECT start FROM daily_summaries WHERE code = 'daily');
    SET loStartDate  = (SELECT MIN(DATE(event_date)) FROM daily_trans);
    SET loEndDate    = (SELECT MAX(DATE(event_date)) FROM daily_trans);
    
    
    IF loOriginDate IS NULL THEN
		SET loSummaryExists = 0;
		SET loOriginDate = '1999-12-31';
    END IF;
    
    IF loStartDate IS NULL THEN
		SET loStartDate = DATE_ADD(loOriginDate, INTERVAL 1 DAY);
    END IF;
    
    IF loEndDate IS NULL THEN 
		SET loEndDate = DATE_ADD(NOW(), INTERVAL -3 DAY);
	ELSE
		SET loEndDate = DATE_ADD(loEndDate, INTERVAL -3 DAY);
	END IF;
    
    DELETE FROM daily_days WHERE day BETWEEN loStartDate AND loEndDate;
	INSERT INTO daily_days (day, user_id, balance, input, output, none, transport, food, purchases, sortie, other, created_at)
	SELECT DATE(t.event_date) AS day,
	   t.user_id AS user_id,
	   IFNULL(SUM(t.value)    ,0) AS 'balance',
	   
	   
	   IFNULL(SUM(inn.value)  ,0) AS 'in',
	   IFNULL(SUM(outt.value) ,0) AS 'out',
	   
	   IFNULL(SUM(nt.value) ,0) AS 'none',
	   IFNULL(SUM(tt.value) ,0) AS 'transport',
	   IFNULL(SUM(ft.value) ,0) AS 'food',
	   IFNULL(SUM(pt.value) ,0) AS 'purchases',
	   IFNULL(SUM(st.value) ,0) AS 'sortie',
	   IFNULL(SUM(ot.value) ,0) AS 'other',
	   NOW()
	FROM daily_trans t
	LEFT JOIN daily_cats c ON c.id = t.cat_id
	LEFT JOIN daily_trans inn  ON inn.id = t.id AND t.value > 0
	LEFT JOIN daily_trans outt ON outt.id = t.id AND t.value < 0

	LEFT JOIN daily_cats  nc ON nc.id = c.id AND nc.hypercat = 'NONE'
	LEFT JOIN daily_trans nt ON nt.id = t.id AND nt.cat_id = nc.id

	LEFT JOIN daily_cats  tc ON tc.id = c.id AND tc.hypercat = 'TRANSPORT'
	LEFT JOIN daily_trans tt ON tt.id = t.id AND tt.cat_id = tc.id

	LEFT JOIN daily_cats  fc ON fc.id = c.id AND fc.hypercat = 'FOOD'
	LEFT JOIN daily_trans ft ON ft.id = t.id AND ft.cat_id = fc.id

	LEFT JOIN daily_cats  pc ON pc.id = c.id AND pc.hypercat = 'PURCHASES'
	LEFT JOIN daily_trans pt ON pt.id = t.id AND pt.cat_id = pc.id

	LEFT JOIN daily_cats  sc ON sc.id = c.id AND sc.hypercat = 'SORTIE'
	LEFT JOIN daily_trans st ON st.id = t.id AND st.cat_id = sc.id

	LEFT JOIN daily_cats  oc ON oc.id = c.id AND oc.hypercat = 'OTHER'
	LEFT JOIN daily_trans ot ON ot.id = t.id AND ot.cat_id = oc.id

	WHERE t.event_date BETWEEN loStartDate AND loEndDate
	GROUP BY day, user_id
	ORDER BY day DESC;

	IF loSummaryExists = 1 THEN
		UPDATE daily_summaries
        SET start = loStartDate,
			end = loEndDate,
            updated_at = NOW()
        WHERE code = 'daily';
	ELSE
		INSERT INTO daily_summaries (code, start, end, created_at) VALUES
			('daily',loStartDate, loEndDate, NOW());
    END IF;
    
    -- SELECT loOriginDate AS 'origin', loStartDate AS 'start', loEndDate AS 'end';
END$$

DELIMITER ;
DELIMITER $$

DROP PROCEDURE IF EXISTS restore_all$$

CREATE PROCEDURE restore_all()
BEGIN
    CALL restore_users();
    CALL restore_daily_cats();
    CALL restore_daily_trans();
END$$

DELIMITER ;
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


DELIMITER $$

DROP PROCEDURE IF EXISTS restore_users$$

CREATE PROCEDURE restore_users()
BEGIN
    INSERT INTO users
        (id, username, fname, lname, birth, email, role, password, salt, activated, activated_token, remember_token, created_at, updated_at)
    SELECT 
        id, username, fname, lname, birth, email, role, password, salt, activated, activated_token, remember_token, created_at, updated_at
    FROM bkc_users;
END$$

DELIMITER ;