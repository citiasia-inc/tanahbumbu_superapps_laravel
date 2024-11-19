@extends('layouts.wallet', ['title' => 'Profile'])

@section('content')
    <div class="appHeader">
        <div class="left">
            
        </div>
        <div class="pageTitle">
            Notification
        </div>
        <div class="right">
            
        </div>
    </div>
	<!-- App Capsule -->
    <div id="appCapsule">
    	<div class="section full">

            <ul class="listview image-listview flush">
                <li>
                    <a href="#" class="item">
                        <div class="icon-box bg-danger">
                            <ion-icon name="key-outline"></ion-icon>
                        </div>
                        <div class="in">
                            <div>
                                <div class="mb-05"><strong>Password changed</strong></div>
                                <div class="text-small mb-05">Your password has been changed</div>
                                <div class="text-xsmall">5/3/2020 10:30 AM</div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" class="item">
                        <div class="icon-box bg-warning">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </div>
                        <div class="in">
                            <div>
                                <div class="mb-05"><strong>New Messages</strong></div>
                                <div class="text-small mb-05">You have new messages from John</div>
                                <div class="text-xsmall">5/3/2020 10:30 AM</div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" class="item">
                        <div class="icon-box bg-primary">
                            <ion-icon name="arrow-down-outline"></ion-icon>
                        </div>
                        <div class="in">
                            <div>
                                <div class="mb-05"><strong>Payment Received</strong></div>
                                <div class="text-small mb-05">John sent you <b>$ 50</b></div>
                                <div class="text-xsmall">5/3/2020 10:30 AM</div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" class="item">
                        <div class="icon-box bg-success">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div class="in">
                            <div>
                                <div class="mb-05"><strong>Money has been sent</strong></div>
                                <div class="text-small mb-05">The money you sent to John was successfully sent.</div>
                                <div class="text-xsmall">5/3/2020 10:30 AM</div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" class="item">
                        <div class="icon-box bg-danger">
                            <ion-icon name="key-outline"></ion-icon>
                        </div>
                        <div class="in">
                            <div>
                                <div class="mb-05"><strong>Password changed</strong></div>
                                <div class="text-small mb-05">Your password has been changed</div>
                                <div class="text-xsmall">5/3/2020 10:30 AM</div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" class="item">
                        <div class="icon-box bg-warning">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </div>
                        <div class="in">
                            <div>
                                <div class="mb-05"><strong>New Messages</strong></div>
                                <div class="text-small mb-05">You have new messages from John</div>
                                <div class="text-xsmall">5/3/2020 10:30 AM</div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>

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
        <a href="{{ route('user.report') }}" class="item">
            <div class="col">
                <ion-icon name="repeat-outline"></ion-icon>
                <strong>Report</strong>
            </div>
        </a>
        <a href="{{ route('user.notification') }}" class="item active">
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
