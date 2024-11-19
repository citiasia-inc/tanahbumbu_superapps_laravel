@section('content')
    <div id="loader">
        <img src="/assets/img/loading-icon.png" alt="icon" class="loading-icon">
    </div>
    <!-- * loader -->

    <!-- App Header -->
    <div class="appHeader bg-primary text-light">
        <div class="left">
            <a href="#" class="headerButton goBack">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </a>
        </div>
        <div class="pageTitle">
            Semua Layanan
        </div>
        <div class="right">
            
        </div>
    </div>
    <!-- * App Header -->


    <!-- App Capsule -->
    <div id="appCapsule">
        <div class="section">
            <div class="row mt-2">
                <div class="col-3">
                        <a href="#">
                                    <div class="user-card">
                                        <img src="assets/img/icon_simpan.png" alt="img" class="imaged w-100">
                                        <strong>e-Materai</strong>
                                    </div>
                                </a>
                    </div>
            </div>
            <div class="row mt-2">
                <div class="text-dark"><h4 class="text-dark">PPOB</h4> </div>
                <div class="col-3">
                    <a href="{{ url('/pulsadata') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_pulsa.png" alt="img" class="imaged w-100">
                                    <strong>Pulsa</strong>
                                </div>
                            </a>
                </div>
                <div class="col-3">
                    <a href="#">
                                <div class="user-card">
                                    <img src="assets/img/icon_topupmerchant.png" alt="img" class="imaged w-100">
                                    <strong>Data</strong>
                                </div>
                            </a>
                </div>
                <div class="col-3">
                    <a href="{{ url('/listrik') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_listrik.png" alt="img" class="imaged w-100">
                                    <strong>Listrik</strong>
                                </div>
                            </a>
                </div>
                <div class="col-3">
                    <a href="{{ url('/gojek') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_gopay.png" alt="img" class="imaged w-100">
                                    <strong>GOPAY</strong>
                                </div>
                            </a>
                </div>

            </div>
            <div class="row mt-2">
                <div class="col-3">
                    <a href="{{ url('/grab') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_grabpay.png" alt="img" class="imaged w-100">
                                    <strong>GRABPAY</strong>
                                </div>
                            </a>
                </div>
                <div class="col-3">
                    <a href="{{ url('/bpjs') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_bpjs.png" alt="img" class="imaged w-100">
                                    <strong>BPJS</strong>
                                </div>
                            </a>
                </div>
                <div class="col-3">
                    <a href="{{ url('/telkom') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_telkom.png" alt="img" class="imaged w-100">
                                    <strong>Telkom</strong>
                                </div>
                            </a>
                </div>
                
                <div class="col-3">
                    <a href="{{ url('/pascabayar') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_pascabayar.png" alt="img" class="imaged w-100">
                                    <strong>HP</strong>
                                </div>
                            </a>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-3">
                    <a href="{{ url('/linkaja') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_linkaja.png" alt="img" class="imaged w-100">
                                    <strong>LinkAja</strong>
                                </div>
                            </a>
                </div>
                <div class="col-3">
                    <a href="{{ url('/dana') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_dana.png" alt="img" class="imaged w-100">
                                    <strong>DANA</strong>
                                </div>
                            </a>
                </div>
                <div class="col-3">
                    <a href="{{ url('/brizzi') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_brizzi.png" alt="img" class="imaged w-100">
                                    <strong>BRIZZI</strong>
                                </div>
                            </a>
                </div>
                
                <div class="col-3">
                    <a href="{{ url('/vgame') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_game.png" alt="img" class="imaged w-100">
                                    <strong>GAMES</strong>
                                </div>
                            </a>
                </div>
            </div>
            <div class="row mt-2">
                
                
            </div>
            
            <div class="row mt-2">
                <div class="text-dark"><h4 class="text-dark">Bayar Tagihan</h4> </div>
                <div class="col-3">
                    <a href="{{ url('/bpjs') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_bpjs.png" alt="img" class="imaged w-100">
                                    <strong>BPJS</strong>
                                </div>
                            </a>
                </div>
                <div class="col-3">
                    <a href="#">
                                <div class="user-card">
                                    <img src="assets/img/icon_telkom.png" alt="img" class="imaged w-100">
                                    <strong>Telkom</strong>
                                </div>
                            </a>
                </div>
                <div class="col-3">
                    <a href="#">
                                <div class="user-card">
                                    <img src="assets/img/icon_pascabayar.png" alt="img" class="imaged w-100">
                                    <strong>Pascabayar</strong>
                                </div>
                            </a>
                </div>
                <div class="col-3">
                    <a href="#">
                                <div class="user-card">
                                    <img src="assets/img/icon_kredivo.png" alt="img" class="imaged w-100">
                                    <strong>Kredivo</strong>
                                </div>
                            </a>
                </div>
            </div>
            <div class="row mt-2">
                <div class="text-dark"><h4 class="text-dark">Reservasi Tiket</h4> </div>
                <div class="col-3">
                    <a href="#">
                                <div class="user-card">
                                    <img src="assets/img/icon_kai.png" alt="img" class="imaged w-100">
                                    <strong>KAI</strong>
                                </div>
                            </a>
                </div>
                <div class="col-3">
                    <a href="#">
                                <div class="user-card">
                                    <img src="assets/img/icon_ferry.png" alt="img" class="imaged w-100">
                                    <strong>Ferry</strong>
                                </div>
                            </a>
                </div>
                <div class="col-3">
                    <a href="#">
                                <div class="user-card">
                                    <img src="assets/img/icon_pelni.png" alt="img" class="imaged w-100">
                                    <strong>Pelni</strong>
                                </div>
                            </a>
                </div>
                
            </div>
            
            
        </div>
        
    </div>
    <!-- * App Capsule -->

@endsection


