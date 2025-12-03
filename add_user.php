<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "redstone";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

$data = json_decode(file_get_contents("php://input"));

if (isset($data->username) && isset($data->password)) {
    $user = $data->username;
    $pass = $data->password;

    // Check if user already exists
    $check = $conn->prepare("SELECT id FROM users WHERE username = ?");
    $check->bind_param("s", $user);
    $check->execute();
    $result = $check->get_result();

    if ($result->num_rows > 0) {
        echo json_encode(["success" => false, "message" => "El usuario ya existe."]);
    } else {
        $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
        $stmt->bind_param("ss", $user, $pass);
        
        if ($stmt->execute()) {
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["success" => false, "message" => "Error al crear usuario: " . $conn->error]);
        }
        $stmt->close();
    }
    $check->close();
} else {
    echo json_encode(["success" => false, "message" => "Datos incompletos."]);
}

$conn->close();
?>
