
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