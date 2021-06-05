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

    require 'config.php';

    $sql = "SELECT * FROM Pengamatan WHERE idNode=1 ORDER BY waktuPengamatan DESC LIMIT 10";
    $result = mysqli_query($connection, $sql);

    $json_array = array();
    while($row = mysqli_fetch_assoc($result)){
        $json_array[] = $row;
    }

    echo json_encode($json_array);

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
?>
