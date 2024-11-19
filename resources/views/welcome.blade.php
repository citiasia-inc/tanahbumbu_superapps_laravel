
@extends('layouts.wallethome', ['title' => 'Dashboard', 'active' => 'dashboard'])

@section('content')
    <!-- loader -->
    <div id="loader">
        <img src="assets/img/loading-icon.png" alt="icon" class="loading-icon">
    </div>
    <!-- * loader -->
    <!-- * App Header -->


    <!-- App Capsule -->
    <div id="appCapsule">
        <div class="section full" style="margin-top: -60px;">
            <img src="assets/img/icon/maxresdefault.jpg" alt="image" class="imaged w-100 square">
        </div>

        <div class="section" style="margin-top: -40px;">

            <div class="wallet-card">
                <!-- Balance -->
                <div class="">
                    <form class="search-form">
            <div class="form-group searchbox">
                <input type="text" class="form-control" placeholder="Looking for services?">
                <i class="input-icon icon ion-ios-search"></i>
                <!--<a href="#" class="ms-1 close toggle-searchbox"><i class="icon ion-ios-close-circle"></i></a>-->
            </div>
        </form>
                </div>
                <!-- * Balance -->
                
            </div>
        </div>

        <div class="section">
            <div class="row mt-2">
                <div class="col-3">
                    <a href="#">
                                <div class="user-card">
                                    <img src="assets/img/icon_cafe.png" alt="img" class="imaged w-100">
                                    <strong>Tanbu City Tour</strong>
                                </div>
                            </a>
                </div>
                <div class="col-3">
                    <a href="{{ url('/homeviewdetail/2') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_selangor_pandu.png" alt="img" class="imaged w-100">
                                    <strong>GEGANA</strong>
                                </div>
                            </a>
                </div>
                <div class="col-3">
                    <a href="{{ url('/homeviewdetail/3') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_wisata.png" alt="img" class="imaged w-100">
                                    <strong>Prodigwis</strong>
                                </div>
                            </a>
                </div>
                
                
                <div class="col-3">
                    <a href="{{ url('/homeviewdetail/4') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_selangor_trsnsport.png" alt="img" class="imaged w-100">
                                    <strong>SIAP-PADU</strong>
                                </div>
                            </a>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-3">
                    <a href="{{ url('/homeviewdetail/5') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_keluhan.png" alt="img" class="imaged w-100">
                                    <strong>Sipadu</strong>
                                </div>
                            </a>
                </div>
                <div class="col-3">
                    <a href="{{ url('/homeviewdetail/6') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_pembiayaan.png" alt="img" class="imaged w-100">
                                    <strong>SI PENSIL</strong>
                                </div>
                            </a>
                </div>
                <div class="col-3">
                    <a href="{{ url('/homeviewdetail/7') }}">
                                <div class="user-card">
                                    <img src="assets/img/icon_perklindokter.png" alt="img" class="imaged w-100">
                                    <strong>SIMETRIS</strong>
                                </div>
                            </a>
                </div>
                <div class="col-3">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">
                                <div class="user-card">
                                    <img src="assets/img/icon_mores.png" alt="img" class="imaged w-100">
                                    <strong>Lainnya</strong>
                                </div>
                            </a>
                </div>
                
            </div>
            
            <div class="section full mt-4 mb-3">
            <div class="section-heading padding">
                <h2 class="title">Berita Terbaru</h2>
                <a href="{{ url('news-list') }}" class="link">View All</a>
            </div>

            <!-- carousel multiple -->
            <div class="carousel-multiple splide">
                <div class="splide__track">
                    <ul class="splide__list">
                        @foreach($news as $row)
                        <li class="splide__slide">
                            <a href="{{ url('news-detail') }}/{{$row->id}}">
                                <div class="blog-card">
                                    <img src="{{ Storage::url('public/news/').$row->image }}" alt="image" class="imaged w-100">
                                    <div class="text">
                                        <h4 class="title">{{ $row->title }}</h4>
                                    </div>
                                </div>
                            </a>
                        </li>

                        @endforeach

                    </ul>
                </div>
            </div>
            <!-- * carousel multiple -->

        </div>

            <div class="wallet-card" style="background-color: #eeeeee;">
                
                    <div class="row mt-2">

                    <div class="text-dark"><h4 class="text-dark">PPOB & Reservasi Tiket</h4> </div>
                    <div class="col-3">
                        <a href="#">
                                    <div class="user-card">
                                        <img src="assets/img/icon_simpan.png" alt="img" class="imaged w-100">
                                        <strong>e-Materai</strong>
                                    </div>
                                </a>
                    </div>
                    <div class="col-3">
                        <a href="#">
                                    <div class="user-card">
                                        <img src="assets/img/icon_pulsa.png" alt="img" class="imaged w-100">
                                        <strong>Pulsa</strong>
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
                        <a href="{{ url('/home-lainnya') }}">
                                    <div class="user-card">
                                        <img src="assets/img/icon_mores.png" alt="img" class="imaged w-100">
                                        <strong>Lainnya</strong>
                                    </div>
                                </a>
                    </div>
                
            </div>
            
        </div>
        
        <div class="appFooter">
            <div class="footer-title">
                Copyright © Tanah Bumbu 2024. All Rights Reserved.
            </div>
            SuperApp Mobile Application.
        </div>


    </div>
    <!-- * App Capsule -->
    <div class="modal fade modalbox" id="termsModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Layanan Lainnya</h5>
                    <a href="#" data-bs-dismiss="modal">Close</a>
                </div>
                <div class="modal-body">
                    <div class="row mt-2">
                        <div class="col-3">
                            <a href="#">
                                        <div class="user-card">
                                            <img src="assets/img/icon_cafe.png" alt="img" class="imaged w-100">
                                            <strong>Tanbu City Tour</strong>
                                        </div>
                                    </a>
                        </div>
                        <div class="col-3">
                            <a href="{{ url('/homeviewdetail/1') }}">
                                        <div class="user-card">
                                            <img src="assets/img/icon_anggota.png" alt="img" class="imaged w-100">
                                            <strong>Kamu Jodohku</strong>
                                        </div>
                                    </a>
                        </div>
                        <div class="col-3">
                            <a href="{{ url('/homeviewdetail/2') }}">
                                        <div class="user-card">
                                            <img src="assets/img/icon_selangor_pandu.png" alt="img" class="imaged w-100">
                                            <strong>GEGANA</strong>
                                        </div>
                                    </a>
                        </div>
                        <div class="col-3"> <!-- https://prodigwis.web.id/ -->
                            <a href="{{ url('/homeviewdetail/3') }}">
                                        <div class="user-card">
                                            <img src="assets/img/icon_wisata.png" alt="img" class="imaged w-100">
                                            <strong>Prodigwis</strong>
                                        </div>
                                    </a>
                        </div>
                        
                        
                        
                    </div>
                    <div class="row mt-2">
                        <div class="col-3"> <!-- https://siap-padu.tanahbumbukab.go.id/ -->
                            <a href="{{ url('/homeviewdetail/4') }}">
                                        <div class="user-card">
                                            <img src="assets/img/icon_selangor_trsnsport.png" alt="img" class="imaged w-100">
                                            <strong>SIAP-PADU</strong>
                                        </div>
                                    </a>
                        </div>
                        <div class="col-3"> <!-- https://sipadu.tanahbumbukab.co.id/ -->
                            <a href="{{ url('/homeviewdetail/5') }}">
                                        <div class="user-card">
                                            <img src="assets/img/icon_keluhan.png" alt="img" class="imaged w-100">
                                            <strong>Sipadu</strong>
                                        </div>
                                    </a>
                        </div>
                        <div class="col-3"> <!-- https://sipensil.tanahbumbukab.go.id -->
                            <a href="{{ url('/homeviewdetail/6') }}">
                                        <div class="user-card">
                                            <img src="assets/img/icon_pembiayaan.png" alt="img" class="imaged w-100">
                                            <strong>SI PENSIL</strong>
                                        </div>
                                    </a>
                        </div>
                        <div class="col-3"> <!-- https://mc.tanahbumbukab.go.id -->
                            <a href="{{ url('/homeviewdetail/7') }}">
                                        <div class="user-card">
                                            <img src="assets/img/icon_perklindokter.png" alt="img" class="imaged w-100">
                                            <strong>SIMETRIS</strong>
                                        </div>
                                    </a>
                        </div>
                        
                        
                    </div>
                    <div class="row mt-2">
                        <div class="col-3"> <!-- https://inlislite.perpusnas.go.id/ -->
                            <a href="{{ url('/homeviewdetail/8') }}" data-bs-toggle="modal" data-bs-target="#termsModal">
                                        <div class="user-card">
                                            <img src="assets/img/icon_topupmerchant.png" alt="img" class="imaged w-100">
                                            <strong>INLISLite</strong>
                                        </div>
                                    </a>
                        </div>
                        <div class="col-3"> <!-- https://play.google.com/store/apps/details?id=mam.reader.itanbu&hl=id&pli=1 -->
                            <a href="{{ url('/homeviewdetail/8') }}">
                                        <div class="user-card">
                                            <img src="assets/img/icon_health.png" alt="img" class="imaged w-100">
                                            <strong>iTanbu</strong>
                                        </div>
                                    </a>
                        </div>
                        <div class="col-3">
                            <a href="{{ url('/homeviewdetail/9') }}">
                                        <div class="user-card">
                                            <img src="assets/img/icon_events.png" alt="img" class="imaged w-100">
                                            <strong>Digipust</strong>
                                        </div>
                                    </a>
                        </div>
                    </div>
                    @if (Auth::check())
                    @if (Auth::user()->role <= 3)
                    <div class="row mt-2">
                        <div class="text-dark"><h4 class="text-dark"> Layanan Aparatur Pemda</h4> </div>
                    
                        <div class="col-3">
                            <a href="{{ url('/homeviewdetail/10') }}"><!-- https://srikandi.arsip.go.id/ -->
                                        <div class="user-card">
                                            <img src="assets/img/icon_academic.png" alt="img" class="imaged w-100">
                                            <strong>Srikandi</strong>
                                        </div>
                                    </a>
                        </div>
                        <div class="col-3">
                            <a href="{{ url('/homeviewdetail/11') }}"><!-- https://sipd.kemendagri.go.id/ -->
                                        <div class="user-card">
                                            <img src="assets/img/icon_face.png" alt="img" class="imaged w-100">
                                            <strong>SIPD RI</strong>
                                        </div>
                                    </a>
                        </div>
                        <div class="col-3">
                            <a href="{{ url('/homeviewdetail/12') }}"><!-- https://sipd.kemendagri.go.id/ -->
                                        <div class="user-card">
                                            <img src="assets/img/icon_berjangka.png" alt="img" class="imaged w-100">
                                            <strong>e-SAKIP Reviu</strong>
                                        </div>
                                    </a>
                        </div>
                    </div>
                    @endif
                    @endif
                </div>
            </div>
        </div>
    </div>

<br><br>
    <!-- App Bottom Menu -->
    <div class="appBottomMenu">
        <a href="{{ url('/welcome') }}" class="item active">
            <div class="col">
                <ion-icon name="home-outline"></ion-icon>
                <strong>Beranda</strong>
            </div>
        </a>
        <a href="{{ route('user.history') }}" class="item">
            <div class="col">
                <ion-icon name="apps-outline"></ion-icon>
                <strong>Activity</strong>
            </div>
        </a>
        <a href="{{ route('user.report') }}" class="item">
            <div class="col">
                <ion-icon name="repeat-outline"></ion-icon>
                <strong>Report</strong>
            </div>
        </a>
        <a href="{{ route('user.notification') }}" class="item">
            <div class="col">
                <ion-icon name="notifications-off"></ion-icon>
                <strong>Notification</strong>
            </div>
        </a>
        <a href="{{ route('user.profile') }}" class="item">
            <div class="col">
                <ion-icon name="person-outline"></ion-icon>
                <strong>Profile</strong>
            </div>
        </a>
        
    </div>
    <!-- * App Bottom Menu -->

@endsection


