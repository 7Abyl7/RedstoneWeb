<?php
header('Content-Type: application/json');

// Configuración de la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "redstone";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Fallo en la conexión: " . $conn->connect_error]));
}

// Obtener datos del cuerpo de la solicitud (JSON)
$data = json_decode(file_get_contents("php://input"));

if (isset($data->username) && isset($data->password)) {
    $user = $data->username;
    $pass = $data->password;

    // Preparar y vincular para evitar inyecciones SQL
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $user, $pass);
    
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Login exitoso
        $row = $result->fetch_assoc();
        echo json_encode([
            "success" => true,
            "user" => [
                "id" => $row['id'],
                "username" => $row['username']
            ]
        ]);
    } else {
        // Credenciales incorrectas
        echo json_encode(["success" => false, "message" => "Usuario o contraseña incorrectos."]);
    }

    $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "Datos incompletos."]);
}

$conn->close();
?>
