<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use App\Models\News;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class NewsController extends Controller
{
    function NewsView(Request $request){
        $data['title'] = 'Data Berita';
        $data['q'] = $request->q;
        $data['rows'] = News::where('title', 'like', '%' . $request->q . '%')->get();
        return view('dashboards.admins.news.index', $data);
    }
    public function Newscreate(Request $request)
    {
        $data['title'] = 'Tambah Berita';
        return view('dashboards.admins.news.create', $data);
    }
    public function Newsstore(Request $request)
    {
        $this->validate($request, [
            'image'     => 'required|image|mimes:png,jpg,jpeg',
            'title'     => 'required',
            'content'   => 'required'
        ]);
        $image = $request->file('image');
        $image->storeAs('public/news', $image->hashName());

        $news = News::create([
            'image'     => $image->hashName(),
            'title'     => $request->title,
            'content'   => $request->content,
            'created_by' => Auth::user()->id
        ]);

        if($news){
            //redirect dengan pesan sukses
            \LogActivity::addToLog('Menambah news '.$request->title);
            return redirect()->route('admin.newsview')->with(['success' => 'Data Berhasil Disimpan!']);
        }else{
            //redirect dengan pesan error
            return redirect()->route('admin.newsadd')->with(['error' => 'Data Gagal Disimpan!']);
        }
    }
    public function edit($id)
    {
        $data['title'] = 'Ubah News';
        $news = News::where('id', $id)->first();
        $data['row'] = $news;
        return view('dashboards.admins.news.edit', $data);
    }
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title'     => 'required',
            'content'   => 'required'
        ]);
        $news = News::where('id', $id)->first();
        if($request->file('image') == "") {
            $news->update([
                'title'     => $request->title,
                'content'   => $request->content
            ]);

        } else {

            //hapus old image
            Storage::disk('local')->delete('public/news/'.$news->image);
            //upload new image
            $image = $request->file('image');
            $image->storeAs('public/news', $image->hashName());
            $news->update([
                'image'     => $image->hashName(),
                'title'     => $request->title,
                'content'   => $request->content
            ]);

        }
        if($news){
            //redirect dengan pesan sukses
            \LogActivity::addToLog('Update news '.$request->title);
            return redirect()->route('admin.newsview')->with(['success' => 'Data Berhasil Diupdate!']);
        }else{
            //redirect dengan pesan error
            return redirect()->route('admin.newsedit')->with(['error' => 'Data Gagal Diupdate!']);
        }

    }
    public function destroy($id)
    {
        $result = News::findOrFail($id);
        Storage::disk('local')->delete('public/news/'.$result->image);
        $result->delete();
        if ($result) {
            \LogActivity::addToLog('Hapus news '.$id);
            return redirect('admin/newsview')->with('success', 'Hapus Data Berhasil');
        }else{
            return redirect('admin/newsview')->with('error', 'Maaf data tidak ditemukan');
        }
        
    }
}
