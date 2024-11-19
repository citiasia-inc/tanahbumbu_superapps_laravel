<!doctype html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="theme-color" content="#000000">
    <title>{{ $title }}</title>
    <meta name="description" content="Mobile wallet app">
    <meta name="keywords" content="superapp" />
    <link rel="icon" type="image/png" sizes="16x16" href="{{ url('/assets/img/logo_top.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ url('/assets/img/logo_top.png') }}">
    <link rel="stylesheet" href="{{ url('/assets/css/style.css') }}">
   <!-- <link rel="manifest" href="{ url('__manifest.json') }}">-->
</head>

<body style="height:890px;background-color:#ffffff;">
    <div id="loader">
        <img src="/assets/img/loading-icon.png" alt="icon" class="loading-icon">
    </div>
    @yield('content')

    <!-- ========= JS Files =========  -->
    <!-- Bootstrap -->
    <script src="/assets/js/lib/bootstrap.bundle.min.js"></script>
    <!-- Ionicons -->
    <!--<script type="module" src="assets/js/ionicons.js"></script>-->
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <!-- Splide -->
    <script src="/assets/js/plugins/splide/splide.min.js"></script>
    <!-- Base Js File -->
    <script src="/assets/js/base.js"></script>
    @if(isset(session('member')['pwd'])&&(session('member')['pwd'] == 0) )
        <script>
        var myModal = new bootstrap.Modal(document.getElementById('DialogBlockButtonPwd'), {});
        myModal.toggle();
    </script>                     
    @endif
    
    

</body>

</html>
