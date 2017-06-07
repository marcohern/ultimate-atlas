<!DOCTYPE HTML>
<!--
	Theory by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
	<head>
		<title>{{ config('app.name') }}</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="{{ URL::Asset('assets/theory/css/main.css') }}" />
	</head>
	<body>

		@include('theory.elements.header')

		@include('theory.elements.banner')

		@yield('body')

		@include('theory.elements.footer')

		<!-- Scripts -->
			<script src="{{ URL::Asset('assets/theory/js/jquery.min.js') }}"></script>
			<script src="{{ URL::Asset('assets/theory/js/skel.min.js') }}"></script>
			<script src="{{ URL::Asset('assets/theory/js/util.js') }}"></script>
			<script src="{{ URL::Asset('assets/theory/js/main.js') }}"></script>

	</body>
</html>