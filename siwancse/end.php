<?php
	require_once("connectVar.php");
	if(isset($_POST['Name2']))
		echo $_POST['Name2'];
?>
<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>系友餐敘暨會員大會</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
  <script src="js/jquery-1.9.1.js"></script>
  <link rel="stylesheet" href="css/style.css">  
  
</head>

<body>
  <section class="section">
	<h2>國立中山大學資訊工程學系系友會<br>系友餐敘暨會員大會</h2>

	<div class="form-progress">
		<progress class="form-progress-bar" min="0" max="100" value="0" step="33" aria-labelledby="form-progress-completion"></progress>
		
		<div class="form-progress-indicator one active"></div>
		<div class="form-progress-indicator two active"></div>
		<div class="form-progress-indicator three active"></div>
		<div class="form-progress-indicator four"></div>
		
		<p id="form-progress-completion" class="js-form-progress-completion sr-only" aria-live="polite">0% complete</p>
	</div>
	
	
	<div class="animation-container">
					<!-- Step three -->
			<div class="form-step js-form-step waiting hidden" data-step="4">

				<p class="form-final">
					<strong>感謝您填復會員資料，有任何問題也歡迎與我們聯繫！<br>
				聯絡人：&nbsp;<a href="mailto:ss910034@gmail.com">蕭廷瑞</a>先生 0975-752165<br>
　　　　			<a href="mailto:lphuang@cse.nsysu.edu.tw">黃莉萍</a>小姐 0939-194128</strong>
						</p>
			</div>
</section>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

    <script  src="js/index.js"></script>

</body>
</html>
