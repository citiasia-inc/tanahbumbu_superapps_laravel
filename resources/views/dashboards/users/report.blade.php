@extends('layouts.wallet', ['title' => 'Profile'])

@section('content')
    <div class="appHeader">
        <div class="left">
            
        </div>
        <div class="pageTitle">
            Report
        </div>
        <div class="right">
            <a href="#" class="headerButton">
                <ion-icon class="icon" name="notifications-outline"></ion-icon>
                <span class="badge badge-danger">6</span>
            </a>
        </div>
    </div>
	<!-- App Capsule -->
    <div id="appCapsule">
    	<div class="section mt-2">
            <div class="card">
                <div class="card-body">
                    <div class="p-1">
                        <div class="text-center">
                            <h2 class="text-primary">Laporkan</h2>
                            <p>Silahkan isi form berikut keluhan atau laporan anda</p>
                        </div>
                        <form action="{{ route('user.reportstore') }}" method="POST" enctype="multipart/form-data">
                        
                            @csrf
                            <div class="form-group">
                                <label class="font-weight-bold">GAMBAR</label>
                                <input type="file" class="form-control @error('image') is-invalid @enderror" name="image">
                            
                                <!-- error message untuk title -->
                                @error('image')
                                    <div class="alert alert-danger mt-2">
                                        {{ $message }}
                                    </div>
                                @enderror
                            </div>
                            <div class="form-group basic animated">
                                <div class="input-wrapper">
                                    <label class="label" for="name">Nama</label>
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Nama anda">
                                    <i class="clear-input">
                                        <ion-icon name="close-circle"></ion-icon>
                                    </i>
                                </div>
                            </div>

                            <div class="form-group basic animated">
                                <div class="input-wrapper">
                                    <label class="label" for="title">Subject</label>
                                    <input type="text" class="form-control" id="title" name="title" placeholder="subject">
                                    <i class="clear-input">
                                        <ion-icon name="close-circle"></ion-icon>
                                    </i>
                                </div>
                            </div>

                            <div class="form-group basic animated">
                                <div class="input-wrapper">
                                    <label class="label" for="content">Pesan Laporan</label>
                                    <textarea id="content" rows="4" class="form-control"
                                        placeholder="laporan" name="content"></textarea>
                                    <i class="clear-input">
                                        <ion-icon name="close-circle"></ion-icon>
                                    </i>
                                </div>
                            </div>

                            <div class="mt-2">
                                <button type="submit" class="btn btn-primary btn-lg btn-block">Send</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

<!-- App Bottom Menu -->
    <div class="appBottomMenu">
        <a href="{{ url('/welcome') }}" class="item">
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
        <a href="{{ route('user.report') }}" class="item active">
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
