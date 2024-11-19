<?php
    $target = $_SERVER['DOCUMENT_ROOT']."/../storage";
    $link = $_SERVER['DOCUMENT_ROOT']."/storage";

    echo $target." ".$link;
    /*if(symlink( $target, $link )){
        echo "OK.";
    } else {
        echo "Gagal.";
    }*/
?>