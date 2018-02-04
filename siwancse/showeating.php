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
  <h1 style="font-family: 微軟正黑體; text-align: center;  font-weight: bold;">餐敘出席人員名單</h1>
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

  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

    <script  src="js/tableindex.js"></script>

</body>
</html>
