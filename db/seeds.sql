INSERT INTO personal_information (first_name, last_name, email, phone_number) 
VALUES ('John', 'Doe', 'johndoe@example.com', '123-456-7890');

INSERT INTO education (personal_information_id, degree, school, start_date, end_date) 
VALUES (1, 'Full stack web developement certification', 'University of Utah', '2023/02/13', '2023/08/10');

INSERT INTO experience (personal_information_id, job_title, company, start_date, end_date) 
VALUES (1, 'Software Engineer', 'Google', '2015-01-01', '2022-01-01');

INSERT INTO resume (personal_information_id, file_name) 
VALUES (1, 'johndoe.pdf');

INSERT INTO my_references (personal_information_id, name, title, company, phone_number, email) 
VALUES (1, 'Jane Doe', 'Manager', 'Acme Corporation', '555-555-5555', 'janedoe@acme.com');

INSERT INTO availability (personal_information_id, start_date, end_date) 
VALUES (1, '2023-06-01', '2023-12-31');

INSERT INTO certifications (personal_information_id, name, school, start_date, end_date) 
VALUES (1, 'Certified Scrum Master', 'Scrum Alliance', '2020-01-01', '2022-12-31');
