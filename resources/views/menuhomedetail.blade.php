<?php

use App\Extensions\Components\MagicTools;

?>
@extends('layouts.iframe', ['title' => 'detail', 'active' => 'dashboard'])

@section('content')
    <!-- App Header -->
    <div class="appHeader bg-primary text-light">
        <div class="left">
            <a href="#" class="headerButton goBack">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </a>
        </div>
        <div class="pageTitle">
           
        </div>
        <div class="right">
            
        </div>
    </div>
    <!-- * App Header -->


    <!-- App Capsule -->
        <iframe
            name='mainFrame'
            id="mainFrame"
            class="w-full h-full mainFrame"
            frameborder="0"
            noresize='noresize'
            scrolling='auto'
            src="{{ $iframeSource }}"
            class="mainFrame" width="100%" height="100%">
        </iframe>
    
    <!-- * App Capsule -->

@endsection


