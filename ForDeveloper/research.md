# Research Document: CIITM Express Project

## Overview

This Express.js application is designed for the Chhotanagpur Institute of Information Technology & Management (CIITM), Dhanbad. It features a comprehensive solution with separate panels for students and administrators, and handles various functionalities such as contact forms, admissions, file uploads, fee payments, and email notifications.

## Components

### Student Panel



1. **Admission Page**
   - **Endpoint**: `/student/admission`
   - **Purpose**: Facilitates the admission process for new students.
   - **Step to take Admission**:
      - `Step 1:-`  Fill Personal Details
      - `Step 2:-`  Upload Required Document
      - `Step 3:-` Pay Some Fee to take Admission

2. **Student Dashboard**
   - **Endpoint**: `/student/dashboard`
   - **Purpose**: Provides a personalized overview for students, including:
     - **Total Fee Due**: Displays the amount of fee pending for the student.
     - **Total Fee Paid**: Shows the total amount of fee already paid.
     - **Course**: Shows Which Cource student take and it's semester
     - **Image Upload**: Allows students to upload images to their personal gallery.
     - **Number of Messages**: Shows the count of messages sent to the admin and their status (read/unread).
     - **Additional Information**: Any other important notifications or updates relevant to the student.


    3. **Student Dashboard**
   - **Endpoint**: `/student/dashboard`
   - **Purpose**: Provides a personalized overview for students, including:
     - **Total Fee Due**: Displays the amount of fee pending for the student.
     - **Total Fee Paid**: Shows the total amount of fee already paid.
     - **Course**: Shows Which Cource student take and it's semester
     - **Image Upload**: Allows students to upload images to their personal gallery.
     - **Number of Messages**: Shows the count of messages sent to the admin and their status (read/unread).
     - **Additional Information**: Any other important notifications or updates relevant to the student.


    4. **Edit Detail**
   - **Endpoint**: `/student/edit`
   - **Purpose**: Student can Edit theire Persnal detail
     - **Email**: Able to Edit Email
     - **Mobile Number**: Able to Edit Email
     - **Profile Image**: Able to Edit Profile Image
     




### Admin Panel

1. **Student Management**
   - **Endpoint**: `/admin/students`
   - **Purpose**: Allows administrators to view, manage, and update student information.

2. **Contact Management**
   - **Endpoint**: `/admin/contacts`
   - **Purpose**: Enables administrators to view and respond to messages sent through the contact form.

3. **Admission Review**
   - **Endpoint**: `/admin/admissions`
   - **Purpose**: Allows administrators to review and process admission applications.

## Default Routes

- **Hero Page**
  - **Endpoint**: `/`
  - **Purpose**: Displays the Hero page of the application.

- **About Page**
  - **Endpoint**: `/about`
  - **Purpose**: Provides information about CIITM and the application.

- **Contact Page**
  - **Endpoint**: `/contact`
  - **Purpose**: Displays the contact form for students to get in touch with the administration.

## npm Packages Used

1. **Multer**
   - **Installation**: `npm install multer`
   - **Usage**: Handles file uploads, especially for the admission page.

2. **Rayjar** (or the actual payment package used)
   - **Installation**: `npm install rayjar` (Replace with the correct package if different)
   - **Usage**: Manages fee payments during the admission process.

3. **Nodemailer**
   - **Installation**: `npm install nodemailer`
   - **Usage**: Sends email notifications and confirmations.

4. **jsonwebtoken (JWT)**
   - **Installation**: `npm install jsonwebtoken`
   - **Usage**: Manages user authentication and authorization.

5. **Mongoose**
   - **Installation**: `npm install mongoose`
   - **Usage**: Interfaces with MongoDB to manage data.

6. **Crypto**
   - **Installation**: `npm install crypto`
   - **Usage**: Encrypts sensitive data, such as passwords.

## Implementation Details

### Contact Form

- **Backend**: Uses Express.js to handle POST requests and Nodemailer to send form submissions to the admin.
- **Frontend**: HTML form collects data and sends it via a POST request to `/contact`.

### Admission Page

- **Personal Details**: Collected through a form and stored in MongoDB using Mongoose.
- **File Upload**: Managed by Multer, which processes and stores uploaded files.
- **Fee Payment**: Integrated with the payment gateway to handle transactions.
- **Email Notification**: Nodemailer is used to send confirmations and updates to users.

### Admin Panel

- **Student Management**: Endpoint `/admin/students` allows viewing and updating student information.
- **Contact Management**: Endpoint `/admin/contacts` enables handling and responding to contact form messages.
- **Admission Review**: Endpoint `/admin/admissions` is used to review and process student admissions.

## Configuration

1. **Multer**: Configure file upload settings (destination, file limits).
2. **Nodemailer**: Set up email service (SMTP server, credentials).
3. **JWT**: Configure secret keys and token expiration.
4. **Mongoose**: Connect to MongoDB and define schemas for student and admission data.
5. **Crypto**: Use for encrypting sensitive information, such as passwords.

## Conclusion

This Express.js application supports CIITM by providing essential functionalities for managing student interactions, admissions, and administrative tasks. The integration of various npm packages ensures efficient handling of file uploads, payment processing, email notifications, and secure data management.

---

Feel free to adjust the details as per your project's specific requirements and setup.
