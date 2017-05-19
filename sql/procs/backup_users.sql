
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

DELIMITER ;