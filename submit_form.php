<?php
// Database connection
$host = "localhost";
$dbname = "pr_trade_technologies";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input and handle undefined keys
    $email = isset($_POST['email']) ? $_POST['email'] : null;
    $password = isset($_POST['password']) ? password_hash($_POST['password'], PASSWORD_BCRYPT) : null;
    $address = isset($_POST['address']) ? $_POST['address'] : null;
    $address2 = isset($_POST['address2']) ? $_POST['address2'] : null;
    $city = isset($_POST['city']) ? $_POST['city'] : null;
    $state = isset($_POST['state']) ? $_POST['state'] : null;
    $zip = isset($_POST['zip']) ? $_POST['zip'] : null;
    $is_confirmed = isset($_POST['gridCheck']) ? 1 : 0;

    // Validate required fields
    if (!$email || !$password) {
        die("Email and Password are required.");
    }

    // Insert into database
    $sql = "INSERT INTO users (email, password, address, address2, city, state, zip, is_confirmed)
            VALUES (:email, :password, :address, :address2, :city, :state, :zip, :is_confirmed)";
    $stmt = $conn->prepare($sql);

    $stmt->execute([
        ':email' => $email,
        ':password' => $password,
        ':address' => $address,
        ':address2' => $address2,
        ':city' => $city,
        ':state' => $state,
        ':zip' => $zip,
        ':is_confirmed' => $is_confirmed,
    ]);

    echo "Form submitted successfully!";
}
?>
