<?php include("connectVar.php"); ?>
<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Responsive Table</title>
  <script src="https://s.codepen.io/assets/libs/modernizr.js" type="text/javascript"></script>


  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

  
      <link rel="stylesheet" href="css/tablestyle.css">

</head>

<body>
	<div style="font-family: 微軟正黑體; text-align: center; font-weight: bold; font-size: 2em;" >
		<p>
			<span style="cursor: pointer;" id="aclick">會員名冊</span> | <span style="cursor: pointer;" id="bclick">餐敘出席人員名單</span>
		</p>
	</div>
	<div id="a">
		
		<table class="rwd-table" style="margin: auto; ">
	  		<tr>
				<th>姓名</th>
				<th>性別</th>
				<th>生日</th>
				<th>出生地</th>
				<th>最高學歷</th>
				<th>手機</th>
				<th>地址</th>
				<th>現職</th>
			</tr>
	<?php
		$sql="select * from member where 1";
		$result=$conn->query($sql);
		while($row=$result->fetch_array())
		{
			?>
			<tr>
			<td><?php echo $row['Name']; ?></td>
			<td><?php echo $row['Gender']; ?></td>
			<td><?php echo $row['Birthday']; ?></td>
			<td><?php echo $row['Birthplace']; ?></td>
			<td><?php echo $row['School']; ?></td>
			<td><?php echo $row['Phone']; ?></td>
			<td><?php echo $row['Address']; ?></td>
			<td><?php echo $row['Now']; ?></td>
			</tr>
	<?php
		}
	?>
		</table>
	</div>
  	<div id="b">
			<table class="rwd-table" style="margin: auto;">
			      <tr>
			      <th>姓名</th>
			      <th>電話</th>
			      <th>E-mail</th>
			      <th>出席人數</th>
			    </tr>
			<?php
			  $sql="select * from eating where 1";
			  $result=$conn->query($sql);
			  while($row=$result->fetch_array())
			  {
			    ?>
			    <tr>
			    <td><?php echo $row['Name']; ?></td>
			    <td><?php echo $row['Phone']; ?></td>
			    <td><?php echo $row['Email']; ?></td>
			    <td><?php echo $row['Number']; ?></td>
			    </tr>
			<?php
			  }
			?>
			</table>
  		
  	</div>

  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
  <script  src="js/tableindex.js"></script>
  <script type="text/javascript">
  	 $(document).ready(function(){
  	 	$('#a').hide();
  	 	$('#b').hide();
  	 });

  	 $('#aclick').click(function(){
  	 	$('#b').hide();
  	 	$('#a').show();
  	 });
  	 $('#bclick').click(function(){
  	 	$('#a').hide();
  	 	$('#b').show();
  	 });
  </script>
</body>
</html>
