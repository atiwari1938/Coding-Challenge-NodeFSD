CREATE DATABASE doctorsDB;

USE doctorsDB;

CREATE TABLE IF NOT EXISTS doctors (
    doctorId INT AUTO_INCREMENT PRIMARY KEY,
    doctorName VARCHAR(255) NOT NULL,
    contactNumber VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    speciality VARCHAR(255) NOT NULL,
    degree VARCHAR(255) NOT NULL
);

INSERT INTO doctors (doctorName, contactNumber, email, speciality, degree) VALUES
('Dr. Rajesh Sharma', '9876543210', 'rajesh.sharma@gmail.com', 'Cardiologist', 'MBBS, MD'),
('Dr. Priya Patel', '8765432109', 'priya.patel@gmail.com', 'Dermatologist', 'MBBS, DVD'),
('Dr. Amit Singh', '7654321098', 'amit.singh@gmail.com', 'Orthopedic Surgeon', 'MBBS, MS'),
('Dr. Sneha Gupta', '6543210987', 'sneha.gupta@gmail.com', 'Pediatrician', 'MBBS, MD'),
('Dr. Ananya Reddy', '5432109876', 'ananya.reddy@gmail.com', 'Gynecologist', 'MBBS, DGO'),
('Dr. Manoj Kumar', '4321098765', 'manoj.kumar@gmail.com', 'Neurologist', 'MBBS, DM'),
('Dr. Nidhi Sharma', '3210987654', 'nidhi.sharma@gmail.com', 'Ophthalmologist', 'MBBS, MS'),
('Dr. Rohit Verma', '2109876543', 'rohit.verma@gmail.com', 'Psychiatrist', 'MBBS, MD'),
('Dr. Swati Singh', '1098765432', 'swati.singh@gmail.com', 'Dentist', 'BDS, MDS'),
('Dr. Vivek Gupta', '9876543211', 'vivek.gupta@gmail.com', 'General Physician', 'MBBS');
