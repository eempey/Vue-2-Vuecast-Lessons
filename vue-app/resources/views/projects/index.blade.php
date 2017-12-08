<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Projects</title>
	<link rel="stylesheet" href="">
</head>
<body>
	<h1>Test</h1>
	<div id="app">
		<example-component></example-component>
	</div>

	<div id="one">
		@{{ shared.user.name }}
	</div>

	<div id="two">
		@{{ shared.user.name }}
	</div>
	<script src="{{ mix('js/manifest.js') }}"></script>
	<script src="{{ mix('js/vendor.js') }}"></script>
	<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>