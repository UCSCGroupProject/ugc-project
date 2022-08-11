DROP DATABASE IF EXISTS student_db;
DROP DATABASE IF EXISTS staff_db;
DROP DATABASE IF EXISTS university_db;
DROP DATABASE IF EXISTS school_db;
DROP DATABASE IF EXISTS notification_db;
DROP DATABASE IF EXISTS email_db;
DROP DATABASE IF EXISTS zscore_db;
DROP DATABASE IF EXISTS blockchain_db;

CREATE DATABASE student_db;
CREATE DATABASE staff_db;
CREATE DATABASE university_db;
CREATE DATABASE school_db;
CREATE DATABASE notification_db;
CREATE DATABASE email_db;
CREATE DATABASE zscore_db;
CREATE DATABASE blockchain_db;

-- university database
USE university_db;

CREATE TABLE courses (
  course_id INT NOT NULL AUTO_INCREMENT,
  course_name VARCHAR(100) NOT NULL,
  course_description LONGTEXT DEFAULT NULL,
  degree VARCHAR(100) NOT NULL,
  uni_id INT NOT NULL,
  PRIMARY KEY(course_id),
  FOREIGN KEY (uni_id) REFERENCES universities(uni_id)
);

CREATE TABLE universities (
  uni_id INT NOT NULL AUTO_INCREMENT,
  uni_name VARCHAR(100) NOT NULL,
  uni_address VARCHAR(200) DEFAULT NULL,
  uni_phone_no CHAR(10) DEFAULT NULL,
  uni_description LONGTEXT DEFAULT NULL,
  PRIMARY KEY(uni_id)
);

