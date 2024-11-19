<?php

 /**
  * MAKE AVATAR FUNCTION
  */
  if(!function_exists('makeAvatar')){

       function makeAvatar($fontPath, $dest, $char){
           $path = $dest;
           $image = imagecreate(200,200);
           $red = rand(0,255);
           $green = rand(0,255);
           $blue = rand(0,255);
           imagecolorallocate($image,$red,$green,$blue);
           $textcolor = imagecolorallocate($image,255,255,255);
           imagettftext($image,100,0,50,150,$textcolor,$fontPath,$char);
           imagepng($image,$path);
           imagedestroy($image);
           return $path;
       }
  }
  if (!function_exists('RoleText')) {
    function RoleText($id)
    {
        $title = "";
        switch ($id) {
            case '1':
                $title = "Super Admin";
                break;
            case '2':
                $title = "Admin";
                break;
            case '3':
                $title = "Aparatur Bapeda";
                break;
            case '4':
                $title = "User";
                break;
            default:
                # code...
                break;
        }
        return $title;
    }
}



?>