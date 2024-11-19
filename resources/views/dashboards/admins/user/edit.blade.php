@extends('dashboards.admins.layouts.admin-dash-layout')
@section('title','Users Edit')
@section('content')
<section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Users Management</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">User Management</li>
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
	        <form action="{{ url('admin/userupdate') }}/{{$row->id}}" method="POST">
	            @csrf
	            @method('PUT')
	            <div class="form-group">
	                <label>Nama User <span class="text-danger">*</span></label>
	                <input class="form-control" type="text" name="name" value="{{ old('name', $row->name) }}" />
	            </div>
	            <div class="form-group">
	                <label>Email <span class="text-danger">*</span></label>
	                <input class="form-control" type="email" name="email" value="{{ old('email', $row->email) }}" />
	            </div>
	            <div class="form-group">
	                <label>Password <span class="text-danger">*</span></label>
	                <input class="form-control" type="password" name="password" />
	                <p class="form-text">Kosongkan jika tidak ingin mengubah password.</p>
	            </div>
	            <div class="form-group">
	                <label>Role <span class="text-danger">*</span></label>
	                <select class="form-control" name="role" />
	                @foreach($role as $key => $val)
	                @if($key==old('role', $row->role))
	                <option value="{{ $key }}" selected>{{ $val }}</option>
	                @else
	                <option value="{{ $key }}">{{ $val }}</option>
	                @endif
	                @endforeach
	                </select>
	            </div>
	            <div class="form-group">
	                <button class="btn btn-primary">Simpan</button>
	                <a class="btn btn-danger" href="{{ route('admin.userview') }}">Kembali</a>
	            </div>
	        </form>
	    </div>
    </div>
</section>
@endsection