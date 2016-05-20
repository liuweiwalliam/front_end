<?php
// header("Content-type:application/json;charset=utf-8");
header("Cache-Control:max-age=0");
$i=0;
while($i<=9){
	$i++;
	// $res=array("success"=>"ok","test"=>'i am test text');
 //     echo json_encode($res);
	sleep(0.2);
	$random=rand(1,999);
	echo  $random;
	echo"<br/>";
ob_flush();
// 把数据从php的缓冲中释放出来
flush();
// 把释放出来的数据发送到浏览器
}
?>