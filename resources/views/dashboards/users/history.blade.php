@extends('layouts.wallet', ['title' => 'Profile'])

@section('content')
    <div class="appHeader">
        <div class="left">
            
        </div>
        <div class="pageTitle">
            History
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
    	<div class="section mt-4">
            <div class="listview-title mt-2">History anda</div>
        <ul class="listview image-listview media inset mb-2">
            @if($logs->count())
                        @foreach($logs as $key => $log)
            <li>
                <a class="item">
                    <div class="imageWrapper">
                        <img src="/assets/img/sample/photo/1.jpg" alt="image" class="imaged w64">
                    </div>
                    <div class="in">
                        <div>
                            {{ $log->subject }}
                            <div class="text-muted">{{ $log->method }}<br>{{ $log->agent }}</div>
                        </div>
                    </div>
                </a>
            </li>
            @endforeach
            @endif
        </ul>
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
        <a href="{{ route('user.history') }}" class="item active">
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
