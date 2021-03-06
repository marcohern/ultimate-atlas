
DROP TABLE IF EXISTS bkc_daily_cats;

CREATE TABLE bkc_daily_cats(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    hypercat ENUM('NONE','TRANSPORT','FOOD','PURCHASES','SORTIE','OTHER') NOT NULL DEFAULT 'NONE',
    created_at DATETIME NOT NULL,
    updated_at DATETIME NULL
);

