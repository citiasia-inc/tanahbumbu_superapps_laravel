@extends('layouts.wallet', ['title' => 'Profile'])

@section('content')
    <div class="appHeader">
        <div class="left">
            
        </div>
        <div class="pageTitle">
            Profile
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
        <div class="section mt-3 text-center">
            <div class="avatar-section">
                <a href="#">
                    <img src="/assets/img/sample/avatar/avatar1.jpg" alt="avatar" class="imaged w100 rounded">
                    <span class="button">
                        <ion-icon name="camera-outline"></ion-icon>
                    </span>
                </a>
            </div>
        </div>

        <div class="section wallet-card-section pt-1" style="margin-top: 20px;">
            <div class="wallet-card" style="background-color:#ffffff;">
                <!-- Balance -->
                <div class="balance">
                    <div class="left">
                        <span class="title">Total Balance</span>
                        <h1 class="total">IDR 0.00</h1>
                    </div>
                    <div class="right">
                        <a href="#" class="button" data-bs-toggle="modal" data-bs-target="#depositActionSheet">
                            <ion-icon name="add-outline"></ion-icon>
                        </a>
                    </div>
                </div>
                <!-- * Balance -->
                <!-- Wallet Footer -->
                <div class="wallet-footer">
                    <div class="item">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#withdrawActionSheet">
                            <div class="icon-wrapper bg-danger">
                                <ion-icon name="arrow-down-outline"></ion-icon>
                            </div>
                            <strong>Withdraw</strong>
                        </a>
                    </div>
                    <div class="item">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#sendActionSheet">
                            <div class="icon-wrapper">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                            <strong>Send</strong>
                        </a>
                    </div>

                </div>
                <!-- * Wallet Footer -->
            </div>
        </div>

    	<div class="listview-title mt-1">Profile Settings</div>
        <ul class="listview image-listview text inset">
            <li>
                <a href="#" class="item">
                    <div class="in">
                        <div>Change Username</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="item">
                    <div class="in">
                        <div>Update E-mail</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="item">
                    <div class="in">
                        <div>Update HP</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="item">
                    <div class="in">
                        <div>Address</div>
                        <span class="text-primary">Edit</span>
                    </div>
                </a>
            </li>
        </ul>

        <div class="listview-title mt-1">Security</div>
        <ul class="listview image-listview text mb-2 inset">
            <li>
                <a href="#" class="item">
                    <div class="in">
                        <div>Update Password</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="item">
                    <div class="in">
                        <div>Log out all devices</div>
                    </div>
                </a>
            </li>
        </ul>

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
        <a href="{{ route('user.profile') }}" class="item active">
            <div class="col">
                <ion-icon name="person-outline"></ion-icon>
                <strong>Profile</strong>
            </div>
        </a>
        
    </div>
    <!-- * App Bottom Menu -->
@endsection
