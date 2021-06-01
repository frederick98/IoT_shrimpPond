<?php  
    require('dbConnect.php');
    session_start();
    
    $_SESSION['name']="";
    $_SESSION['nik']="";
    if (isset($_POST['username']) and isset($_POST['pass'])){
        // Assigning POST values to variables.
        $username = $_POST['username'];
        $password = $_POST['pass'];

        // CHECK FOR THE RECORD FROM TABLE
        $query = "SELECT * FROM `karyawan` WHERE username='$username' and Password='$password'";
 
        $result = mysqli_query($connection, $query) or die(mysqli_error($connection));
        $count = mysqli_num_rows($result);
        if ($count > 0){
            $row = mysqli_fetch_array($result);
            if($row['jabatan'] == False){
                $_SESSION['name'] = $row['Nama'];
                echo "<script> alert('Successfully logged in as Admin!');
                    window.location.href='../view/pages/Admin/adminHome.php';
                </script>";
            }
            else{
                $_SESSION['nik'] = $row['NIK'];
                $_SESSION['name'] = $row['Nama'];
                echo "<script> alert('Successfully logged in as Karyawan!');
                    window.location.href='../view/pages/Karyawan/karyawanPage.php';
                </script>";
            } 
        } 
        else{
            echo "<script type='text/javascript'>alert('Username / Password Invalid!');
                window.location.href='../view/index.php';
            </script>";
        }
    }
?>