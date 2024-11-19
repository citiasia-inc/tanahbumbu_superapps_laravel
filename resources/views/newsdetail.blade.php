@extends('layouts.wallet', ['title' => 'News Detail'])

@section('content')
    <div class="appHeader">
        <div class="left">
            <a href="{{ url('/welcome') }}" class="headerButton">
                <ion-icon name="chevron-back-outline"></ion-icon> Home
            </a>
        </div>
        <div class="pageTitle">
            News Detail
        </div>
        <div class="right">
            <a href="#" class="headerButton" data-bs-toggle="modal" data-bs-target="#actionSheetShare">
                <ion-icon name="share-social-outline"></ion-icon>
            </a>
        </div>
    </div>
	<!-- App Capsule -->
    <div id="appCapsule">
        <div class="section mt-2">
            <h1>
                {{ $rows->title }}
            </h1>
            <div class="blog-header-info mt-2 mb-2">
                <div>
                    <!--<img src="/assets/img/sample/avatar/avatar1.jpg" alt="img" class="imaged w24 rounded me-05">
                    by <a href="#">Edi</a> -->
                </div>
                <div>
                    {{ $rows->created_at }}
                </div>
            </div><!--
            <div class="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam fringilla euismod. Nulla viverra
                eu ante tincidunt viverra. Sed dignissim maximus turpis et dictum.
            </div>-->
        </div>

        <div class="section mt-2">
            <figure>
                <img src="{{ Storage::url('public/news/').$rows->image }}" alt="image" class="imaged img-fluid">
            </figure>
            {!! $rows->content !!}
            <br><br>
        </div>

        <div class="section">
            <a href="#" class="btn btn-block btn-primary" data-bs-toggle="modal" data-bs-target="#actionSheetShare">
                <ion-icon name="share-outline"></ion-icon> Share This Post
            </a>
        </div>


        <div class="section mt-3">
            <h2>Related Posts</h2>
            <div class="row mt-3">
                @foreach($news as $row)
                <div class="col-6 mb-2">
                    <a href="{{ url('news-detail') }}/{{$row->id}}">
                        <div class="blog-card">
                            <img src="{{ Storage::url('public/news/').$row->image }}" alt="image" class="imaged w-100">
                            <div class="text">
                                <h4 class="title">{{ $row->title }} ...</h4>
                            </div>
                        </div>
                    </a>
                </div>

                @endforeach
            </div>
        </div>

    </div>

    <div class="modal fade action-sheet inset" id="actionSheetShare" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Share with</h5>
                </div>
                <div class="modal-body">
                    <ul class="action-button-list">
                        <li>
                            <a href="#" class="btn btn-list" data-bs-dismiss="modal">
                                <span>
                                    <ion-icon name="logo-facebook"></ion-icon>
                                    Facebook
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="btn btn-list" data-bs-dismiss="modal">
                                <span>
                                    <ion-icon name="logo-twitter"></ion-icon>
                                    Twitter
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="btn btn-list" data-bs-dismiss="modal">
                                <span>
                                    <ion-icon name="logo-instagram"></ion-icon>
                                    Instagram
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="btn btn-list" data-bs-dismiss="modal">
                                <span>
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                    Linkedin
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

@endsection
