DROP TABLE IF EXISTS bkc_daily_trans;

CREATE TABLE bkc_daily_trans(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    cat_id INT NOT NULL,
    event_date DATETIME NOT NULL,
    value NUMERIC(20,2) NOT NULL,
    type ENUM('CASH','DEBIT') DEFAULT 'CASH',
    created_at DATETIME NOT NULL,
    updated_at DATETIME NULL
);

