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
    elseif($type == 'addNode') addNode();
    elseif($type == 'addPond') addPond();
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

    function addNode(){
        require 'config.php';

        $json = json_decode(file_get_contents('php://input'), true);
        $idNode = $json['nIDNode'];
        $idPond = $json['nIDPond1'];
        
        $nodeCheck = preg_match("/^[0-9]{1,4}$/i", $idNode);
        $pondCheck = preg_match("/^[0-9]{1,4}$/i", $idPond);

        if($nodeCheck == 0){
            echo '{"error": "Invalid Node ID, max node available is 1000!"}';
        }
        elseif($pondCheck == 0){
            echo '{"error": "Invalid Pond ID!"}';
        }
        elseif(strlen(trim($idNode))>0 && strlen(trim($idPond))>0){
            $userData = '';

            $result1 = $connection->query("SELECT * FROM Node WHERE idNode='$idNode'");
            $rowCount1 = $result1->num_rows;
            $result2 = $connection->query("SELECT * FROM Tambak WHERE idTambak='$idPond'");
            $rowCount2 = $result2->num_rows;

            if($rowCount1 == 0 && $rowCount2 == 1){
                $connection->query("INSERT INTO Node(idNode, waktuNode, `status`, nodeStat, sensorStat)
                    VALUES('$idNode', '', '0', 'Offline', 'Not Monitoring')");
                $connection->query("INSERT INTO Pengamatan(idTambak, idNode, waktuPengamatan, temperature, turbidity, pH, salinity, DO)
                    VALUES('$idPond', '$idNode', 'null', '0', '0', '0', '0', '0')");
                        
                $userData = '';
                $query = "SELECT * FROM Node WHERE idNode='$idNode'";
                $result = $connection->query($query);
                $userData = $result->fetch_object();
                $userData = json_encode($userData);
                echo '{"userData":'.$userData.'}';
            }
            elseif($rowCount2 < 1){
                echo '{"error":"Add new Pond first!"}';
            }
            else{
                echo '{"error":"Node ID already exists!"}';
            }
        }
        else{
            echo '{"text": "Enter valid Node & Pond ID!"}';
        }
    }

    function addPond(){
        require 'config.php';

        $json = json_decode(file_get_contents('php://input'), true);
        //var_dump($json);
        //echo $json;
        $idPond = $json['nIDPond2'];
        
        $pondCheck = preg_match("/^[0-9]{1,4}$/i", $idPond);

        if($pondCheck == 0){
            echo '{"idpond":'.$idPond.'}';
            //echo '{"error": "Invalid Pond ID!"}';
        }
        elseif(strlen(trim($idPond))>0){
            $userData = '';

            $result = $connection->query("SELECT * FROM Tambak WHERE idTambak='$idPond'");
            $rowCount = $result->num_rows;

            if($rowCount == 0){
                $connection->query("INSERT INTO Tambak(idTambak) VALUES('$idPond')");
                        
                $userData = '';
                $query = "SELECT * FROM Tambak WHERE idTambak='$idPond'";
                $result = $connection->query($query);
                $userData = $result->fetch_object();
                $userData = json_encode($userData);
                echo '{"userData":'.$userData.'}';
            }
            else{
                echo '{"error":"Pond ID already exists!"}';
            }
        }
        else{
            echo '{"text": "Enter valid Pond ID!"}';
        }
    }
?>
