DROP DATABASE IF EXISTS hireMe_db;

CREATE DATABASE hireMe_db;

USE hireMe_db;

CREATE TABLE personal_information (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE education (
  id INT NOT NULL AUTO_INCREMENT,
  personal_information_id INT NOT NULL,
  degree VARCHAR(255) NOT NULL,
  institution VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (personal_information_id) REFERENCES personal_information (id)
);

CREATE TABLE experience (
  id INT NOT NULL AUTO_INCREMENT,
  personal_information_id INT NOT NULL,
  job_title VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (personal_information_id) REFERENCES personal_information (id)
);

CREATE TABLE resume (
  id INT NOT NULL AUTO_INCREMENT,
  personal_information_id INT NOT NULL,
  file_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (personal_information_id) REFERENCES personal_information (id)
);

CREATE TABLE references (
  id INT NOT NULL AUTO_INCREMENT,
  personal_information_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (personal_information_id) REFERENCES personal_information (id)
);

CREATE TABLE availability (
  id INT NOT NULL AUTO_INCREMENT,
  personal_information_id INT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (personal_information_id) REFERENCES personal_information (id)
);

CREATE TABLE certifications (
  id INT NOT NULL AUTO_INCREMENT,
  personal_information_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  institution VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (personal_information_id) REFERENCES personal_information (id)
);
