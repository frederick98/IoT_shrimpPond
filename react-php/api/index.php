<?php 

$type = $_GET['tp']; 
if($type=='signup') signup(); 
elseif($type=='login') login(); 
elseif($type=='feed') feed(); 
elseif($type=='feedUpdate') feedUpdate(); 
elseif($type=='feedDelete') feedDelete(); 
function login() 
{ 
       require 'config.php'; 
       $json = json_decode(file_get_contents('php://input'), true); 
       $username = $json['username']; $password = $json['password']; 
       $userData =''; $query = "select * from User where username='$username' and password='$password'"; 
       $result= $db->query($query);
       $rowCount=$result->num_rows;
             
        if($rowCount>0)
        {
            $userData = $result->fetch_object();
            $user_id=$userData->user_id;
            $userData = json_encode($userData);
            echo '{"userData":'.$userData.'}';

            
        }
        else 
        {
            echo '{"error":"Wrong username and password"}';
        }

    
}



function node1(){
    require 'config.php';
    $json = json_decode(fil_get_contents('php://input'), true);

    $sql = "SELECT * FROM Pengamatan WHERE idNode=1 ORDER BY waktuPengamatan DESC LIMIT 5";
    $result = $db->query($sql);

    $nodeInfo = mysqli_fetch_all($result, MYSQLI_ASSOC);
    $nodeInfo = json_encode($nodeInfo);

    echo '{"nodeInfo":' . $nodeInfo . '}';
}

// function feed(){
//     require 'config.php';
//     $json = json_decode(file_get_contents('php://input'), true);
//     $user_id=$json['user_id'];
    
//     $query = "SELECT * FROM feed WHERE user_id=$user_id ORDER BY feed_id DESC LIMIT 10";
//     //$query = "SELECT * FROM feed ";
//     $result = $db->query($query); 

//     $feedData = mysqli_fetch_all($result,MYSQLI_ASSOC);
//     $feedData=json_encode($feedData);
    
//     echo '{"feedData":'.$feedData.'}';
// }

// function feedUpdate(){

//     require 'config.php';
//     $json = json_decode(file_get_contents('php://input'), true);
//     $user_id=$json['user_id'];
//     $feed=$json['feed'];
    
//     $feedData = '';
//     if($user_id !=0)
//     {
//         $query = "INSERT INTO feed ( feed, user_id) VALUES ('$feed','$user_id')";
//         $db->query($query);              
//     }
//     $query = "SELECT * FROM feed WHERE user_id=$user_id ORDER BY feed_id DESC LIMIT 10";
//     $result = $db->query($query); 

//     $feedData = mysqli_fetch_all($result,MYSQLI_ASSOC);
//     $feedData=json_encode($feedData);
    
//     echo '{"feedData":'.$feedData.'}';

// }

// function feedDelete(){
//     require 'config.php';
//     $json = json_decode(file_get_contents('php://input'), true);
//     $user_id=$json['user_id'];
//     $feed_id=$json['feed_id'];
         
//     $query = "Delete FROM feed WHERE user_id=$user_id AND feed_id=$feed_id";
//     $result = $db->query($query);
//     if($result)       
//     {        
//         echo '{"success":"Feed deleted"}';
//     } else{
     
//         echo '{"error":"Delete error"}';
//     }
       
       
    
// }

?>
