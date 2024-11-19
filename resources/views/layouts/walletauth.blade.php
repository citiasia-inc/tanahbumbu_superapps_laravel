<!doctype html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="theme-color" content="#000000">
    <title>superApp - Login</title>
    <meta name="description" content="smart payment">
    <meta name="keywords" content="payment, ewallet" />
    <link rel="icon" type="image/png" href="assets/img/logo_top.png" sizes="32x32">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/img/icon/192x192.png">
    <link rel="stylesheet" href="assets/css/style.css">
    <!--<link rel="manifest" href="__manifest.json">-->
    <!--{!! ReCaptcha::htmlScriptTagJsApi() !!}-->

    <!--{!! RecaptchaV3::initJs() !!}-->
</head>

<body>

    <!-- loader -->
    <div id="loader">
        <img src="assets/img/preloader.gif" alt="icon" class="loading-icon">
    </div>
    <!-- * loader -->

    <!-- App Header -->
    <div class="appHeader no-border transparent position-absolute">
        <div class="left">
            <a href="{{ url('/welcome') }}" class="headerButton">
                <ion-icon name="home"></ion-icon> Home
            </a>
        </div>
        <div class="pageTitle"></div>
        <div class="right">
            <!--<a href="#" class="headerButton">
                Login
            </a>-->
        </div>
    </div>
    <!-- * App Header -->

    <!-- App Capsule -->
    <div id="appCapsule">

        <div class="section mt-2 text-center">
            <img src="{{ url('assets/img/logo.jpg') }}" width="150px"/>
            <h2>Login</h2>
            <h4>Silahkan masukkan Informasi</h4>
        </div>
        
         @yield('content')

    </div>
    <!-- * App Capsule -->
    <!-- ========= JS Files =========  -->
    <!-- Bootstrap -->
    <script src="assets/js/lib/bootstrap.bundle.min.js"></script>
    <!-- Ionicons -->
    <!--<script type="module" src="assets/js/ionicons.js"></script>-->
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <!-- Splide -->
    <script src="assets/js/plugins/splide/splide.min.js"></script>
    <!-- Base Js File -->
    <script src="assets/js/base.js"></script>
    

</body>

</html>