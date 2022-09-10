DROP DATABASE IF EXISTS student_db;
DROP DATABASE IF EXISTS staff_db;
DROP DATABASE IF EXISTS university_db;
DROP DATABASE IF EXISTS school_db;
DROP DATABASE IF EXISTS notification_db;
DROP DATABASE IF EXISTS email_db;
DROP DATABASE IF EXISTS zscore_db;
DROP DATABASE IF EXISTS crypto_signer_db;

CREATE DATABASE student_db;
CREATE DATABASE staff_db;
CREATE DATABASE university_db;
CREATE DATABASE school_db;
CREATE DATABASE notification_db;
CREATE DATABASE email_db;
CREATE DATABASE zscore_db;
CREATE DATABASE crypto_signer_db;

-- Granting privileges to the MySQL Docker Image
CREATE USER 'root'@'%' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
