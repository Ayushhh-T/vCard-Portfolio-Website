<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Get the form data
  $fullname = $_POST["fullname"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Validate the form data
  if (empty($fullname) || empty($email) || empty($message)) {
    // Handle validation errors
    echo "Please fill in all the required fields.";
    exit;
  }

  // Send email
  $to = "ayushthakur1412@gmail.com"; // Replace with your email address
  $subject = "New Message from Contact Form";
  $body = "Full Name: $fullname\n";
  $body .= "Email: $email\n";
  $body .= "Message: $message\n";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Failed to send message. Please try again later.";
  }
} else {
  echo "Invalid request.";
}
?>
