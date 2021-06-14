<?php 
    /**
     * This is a CORS-compliant method. It'll allow any GET, POST, or OPTION requests from any origin.
     * -> this method isn't necessary IF YOU HAVE SETUP CORS IN YOUR SERVER.
     *
     */
    // function cors() {
    //     // Allow from any origin
    //     if (isset($_SERVER['HTTP_ORIGIN'])) {
    //         // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
    //         // you want to allow, and if so:
    //         header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    //         header('Access-Control-Allow-Credentials: true');
    //         header('Access-Control-Max-Age: 86400');    // cache for 1 day
    //     }

    //     // Access-Control headers are received during OPTIONS requests
    //     if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    //         if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
    //             // may also be using PUT, PATCH, HEAD etc
    //             header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

    //         if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
    //             header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    //         exit(0);
    //     }
    //     echo "You have CORS!";
    // }
    
    $type = $_GET['type'];

    if($type == 'node1') node1();
    elseif($type == 'node2') node2();
    elseif($type == 'status') status();
    elseif($type == 'login') login();
    elseif($type == 'register') register();
    elseif($type == 'userList') userList();
;
    function node1(){
        require 'config.php';

        $sql = "SELECT * FROM Pengamatan WHERE idNode=1 ORDER BY waktuPengamatan DESC LIMIT 10";
        $result = mysqli_query($connection, $sql);

        $json_array = array();
        while($row = mysqli_fetch_assoc($result)){
            $json_array[] = $row;
        }

        echo json_encode($json_array);
    }

    function node2(){
        require 'config.php';

        $sql = "SELECT * FROM Pengamatan WHERE idNode=2 ORDER BY waktuPengamatan DESC LIMIT 10";
        $result = mysqli_query($connection, $sql);

        $json_array = array();
        while($row = mysqli_fetch_assoc($result)){
            $json_array[] = $row;
        }

        echo json_encode($json_array);
    }

    function status(){
        require 'config.php';

        $sql = "SELECT DISTINCT Pengamatan.idTambak, Node.idNode, Node.waktuNode, Node.nodeStat, Node.sensorStat FROM Node INNER JOIN Pengamatan ON Pengamatan.idNode = Node.idNode";
        $result = mysqli_query($connection, $sql);

        $json_array = array();
        while($row = mysqli_fetch_assoc($result)){
            $json_array[] = $row;
        }

        echo json_encode($json_array);
    }

    function login(){
        require 'config.php';

        $json = json_decode(file_get_contents('php://input'), true);
        $username = $json['username']; $password = $json['password'];
        $jabatan = '';
        $userData = ''; $query = "SELECT * FROM User WHERE username='$username' AND password='$password'";
        $result = $connection->query($query);
        $rowCount = $result ->num_rows;

        if($rowCount > 0){
            $userData = $result->fetch_object();
            $user_ID = $userData->idUser;
            $userData = json_encode($userData);
            echo '{"userData" : '.$userData.'}';
        }
        else{
            echo '{"error": "Wrong username and password"}';
        }
    }

    function register(){
        require 'config.php';

        $json = json_decode(file_get_contents('php://input'), true);
        //var_dump($json);
        ///echo $json;
        $email = $json['nEmail'];
        $name = $json['nName'];
        $username = $json['nUsername']; 
        $password = $json['nPassword'];
        
        //echo ("username: ".$username);

        $username_check = preg_match("/^[A-Za-z0-9_]{4,10}$/i", $username);
        $email_check = preg_match('/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})$/i', $email);
        $password_check = preg_match('/^[A-Za-z0-9!@#$%^&*()_]{4,20}$/i', $password);

        if($username_check == 0){
            echo '{"error": "Invalid username!"}';
        }
        elseif($email_check == 0){
            echo '{"error": "Invalid email!"}';
        }
        elseif($password_check == 0){
            echo '{"error": "Invalid password!"}';
        }
        elseif(strlen(trim($username))>0 && 
                strlen(trim($password))>0 && 
                strlen(trim($email))>0 && 
                $email_check>0 && $username_check>0 && $password_check>0){
            
            $userData = '';

            $result = $connection->query("SELECT * FROM User WHERE username='$username' OR email='$email'");
            $rowCount = $result->num_rows;

            if($rowCount == 0){
                $connection->query("INSERT INTO User(username, `password`, email, namaUser)
                    VALUES('$username', '$password', '$email', '$name')");
                        
                $userData = '';
                $query = "SELECT * FROM User WHERE username='$username' AND `password`='$password'";
                $result = $connection->query($query);
                $userData = $result->fetch_object();
                $userID = $userData->idUser;
                $userData = json_encode($userData);
                echo '{"userData":'.$userData.'}';
            }
            else{
                echo '{"error":"username or email already exists"}';
            }
        }
        else{
            echo '{"text": "Enter valid data!"}';
        }
    }

    function userList(){
        require 'config.php';

        $sql = "SELECT idUser, username, namaUser, email FROM User";
        $result = mysqli_query($connection, $sql);

        $json_array = array();
        while($row = mysqli_fetch_assoc($result)){
            $json_array[] = $row;
        }

        echo json_encode($json_array);
    }
?>
