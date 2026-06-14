<?php
header('Content-Type: application/json');

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid input']);
    exit;
}

$name = trim($data['name'] ?? '');
$company = trim($data['company'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$message = trim($data['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Name, email, and message are required.']);
    exit;
}

$to = 'info@greateasterncompany.com';
$subject = "Website Quote Request from $name";
$body = "Name: $name\nCompany: $company\nEmail: $email\nPhone: $phone\n\nMessage:\n$message\n";
$headers = "From: noreply@" . ($_SERVER['HTTP_HOST'] ?? 'example.com') . "\r\n";
$headers .= "Reply-To: $email\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to send message.']);
}
