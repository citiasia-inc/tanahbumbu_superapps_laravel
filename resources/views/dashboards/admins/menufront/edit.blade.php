@extends('dashboards.admins.layouts.admin-dash-layout')
@section('title','Menu Front Edit')
@section('content')
<section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Menu Front Management</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Menu Front Management</li>
              </ol>
            </div>
          </div>
        </div><!-- /.container-fluid -->
</section>
<section class="content">
    <div class="container-fluid">
    	<div class="col-md-6">
	        @if($errors->any())
	        @foreach($errors->all() as $err)
	        <p class="alert alert-danger">{{ $err }}</p>
	        @endforeach
	        @endif
	        <form action="{{ url('admin/menufrontupdate') }}/{{$row->id}}" method="POST" enctype="multipart/form-data">
                            @csrf
                            @method('PUT')

                            <div class="form-group">
                                <label class="font-weight-bold">Icon</label>
                                <input type="file" class="form-control" name="image">
                            </div>

                            <div class="form-group">
                                <label class="font-weight-bold">Title</label>
                                <input type="text" class="form-control @error('title_menu') is-invalid @enderror" name="title_menu" value="{{ old('title_menu', $row->title_menu) }}" placeholder="Masukkan Nama Menu">
                            
                                <!-- error message untuk title -->
                                @error('title_menu')
                                    <div class="alert alert-danger mt-2">
                                        {{ $message }}
                                    </div>
                                @enderror
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold">Link Menu</label>
                                <input type="text" class="form-control @error('link_menu') is-invalid @enderror" name="link_menu" value="{{ old('link_menu', $row->link_menu) }}" placeholder="Masukkan Link Menu">
                            
                                <!-- error message untuk title -->
                                @error('link_menu')
                                    <div class="alert alert-danger mt-2">
                                        {{ $message }}
                                    </div>
                                @enderror
                            </div>

                            

                            <button type="submit" class="btn btn-md btn-primary">UPDATE</button>
                            <button type="reset" class="btn btn-md btn-warning">RESET</button>

                        </form> 
	    </div>
    </div>
</section>
    
    <!-- include summernote js -->
    

@endsection