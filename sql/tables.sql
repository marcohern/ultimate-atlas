
DROP TABLE IF EXISTS bkc_daily_cats;

CREATE TABLE bkc_daily_cats(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    hypercat ENUM('NONE','TRANSPORT','FOOD','PURCHASES','SORTIE','OTHER') NOT NULL DEFAULT 'NONE',
    created_at DATETIME NOT NULL,
    updated_at DATETIME NULL
);

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


DROP TABLE IF EXISTS bkc_users;

CREATE TABLE bkc_users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(32) NOT NULL UNIQUE,
    fname VARCHAR(64) NOT NULL,
    lname VARCHAR(64) NOT NULL,
    gender ENUM('M','F','A','X') NOT NULL DEFAULT 'X',
    birth DATETIME NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    role ENUM('ADMIN','USER') NOT NULL DEFAULT 'ADMIN',
    password VARCHAR(60) NOT NULL,
    salt VARCHAR(48) NOT NULL,
    activated ENUM('TRUE','FALSE') NOT NULL DEFAULT 'TRUE',
    activated_token VARCHAR(60) NOT NULL,
    remember_token VARCHAR(100) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NULL
)