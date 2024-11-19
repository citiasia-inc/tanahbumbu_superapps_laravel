@extends('dashboards.admins.layouts.admin-dash-layout')
@section('title','News')
@section('content')
<section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>News Management</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">News Management</li>
              </ol>
            </div>
          </div>
        </div><!-- /.container-fluid -->
</section>
<section class="content">
    <div class="container-fluid">
    	@if(session('success'))
		<p class="alert alert-success">{{ session('success') }}</p>
		@endif
		<div class="card card-default">
		    <div class="card-header">
		        <form class="form-inline">
		            <div class="form-group mr-1">
		                <input class="form-control" type="text" name="q" value="{{ $q}}" placeholder="Pencarian..." />
		            </div>
		            <div class="form-group mr-1">
		                <button class="btn btn-success">Refresh</button>
		            </div>
		            <div class="form-group mr-1">
		                <a class="btn btn-primary" href="{{ route('admin.newsadd') }}">Tambah</a>
		            </div>
		        </form>
		    </div>
		    <div class="card-body p-0 table-responsive">
		        <table class="table table-bordered table-striped table-hover mb-0">
		            <thead>
		                <tr>
		                    <th class="text-center">Aksi</th>
		                    <th>No</th>
		                    <th>Images</th>
		                    <th>Nama</th>
		                    <th>Content</th>
		                    
		                </tr>
		            </thead>
		            <?php $no = 1 ?>
		            @foreach($rows as $row)
		            <tr>
		                <td nowrap="nowrap">
		                    <a class="btn btn-sm btn-warning" href="{{ url('admin/newsedit') }}/{{$row->id}}">Ubah</a>
		                    <form method="POST" action="{{ route('admin.newsdestroy', $row->id ) }}" style="display: inline-block;">
		                        @csrf
		                        @method('DELETE')
		                        <button class="btn btn-sm btn-danger" onclick="return confirm('Hapus Data?')">Hapus</button>
		                    </form>
		                </td>
		                <td>{{ $no++ }}</td>
		                <td class="text-center">
                                        <img src="{{ Storage::url('public/news/').$row->image }}" class="rounded" style="width: 150px">
                                    </td>
                    <td>{{ $row->title }}</td>
                    <td>{!! $row->content !!}</td>
		                
		            </tr>
		            @endforeach
		        </table>
		    </div>
		</div>
    </div>
</section>
@endsection