<!doctype html>
<html lang="{{ config('app.locale') }}">
<head>
  <meta charset="utf-8">
  <title>{{ config('app.name') }}</title>
  <base href="/ua">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/png" href="{{ url('favicon.png') }}">
  <style type="text/css">
    #first_loader {
      position: absolute;
      font-size: 3em;
      text-align: center;
      color:#000;
      top:50%;
      left:50%;
      margin-top: -40px;
      margin-left: -252px;
    }
  </style>
</head>
<body>
  <ultimate-atlas>
    <div id="first_loader">
      <p>
        <img src="{{ url('assets/loaders/spinning-circles.svg') }}" alt="Loading" width="80" />
      </p>
      <p>
        Loading
      </p>
    </div>
  </ultimate-atlas>
  <script type="text/javascript" src="inline.bundle.js"></script>
  <script type="text/javascript" src="polyfills.bundle.js"></script>
  <script type="text/javascript" src="styles.bundle.js"></script>
  <script type="text/javascript" src="vendor.bundle.js"></script>
  <script type="text/javascript" src="main.bundle.js"></script>
  <script type="text/javascript" src="scripts.bundle.js"></script>
</body>
</html>