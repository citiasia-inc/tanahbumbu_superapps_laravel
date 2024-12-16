<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use App\Models\MenuFrontModel;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class MenuFrontController extends Controller
{
    function MenuFront(Request $request){
        $data['title'] = 'Menu Front';
        $data['q'] = $request->q;
        $data['menufront'] = MenuFrontModel::where('title_menu', 'like', '%' . $request->q . '%')->get();
        return view('dashboards.admins.menufront.index', $data);
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
            return redirect()->route('admin.menufront')->with(['success' => 'Data Berhasil Disimpan!']);
        }else{
            //redirect dengan pesan error
            return redirect()->route('admin.menufrontedit')->with(['error' => 'Data Gagal Disimpan!']);
        }
    }
    public function edit($id)
    {
        $data['title'] = 'Ubah Menu';
        $result = MenuFrontModel::where('id', $id)->first();
        $data['row'] = $result;
        return view('dashboards.admins.menufront.edit', $data);
    }
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title_menu'     => 'required',
            'link_menu'   => 'required'
        ]);
        $result = MenuFrontModel::where('id', $id)->first();
        if($request->file('image') == "") {
            $result->update([
                'title_menu'     => $request->title_menu,
                'link_menu'   => $request->link_menu
            ]);

        } else {

            //hapus old image
            //Storage::disk('local')->delete('public/news/'.$result->icon_menu);
            //upload new image
            /*$image = $request->file('image');
            $image->storeAs('public/news', $image->hashName());
            $news->update([
                'icon_menu'     => $image->hashName(),
                'title_menu'     => $request->title_menu,
                'link_menu'   => $request->link_menu
            ]);*/

        }
        if($result){
            //redirect dengan pesan sukses
            \LogActivity::addToLog('Update menu front '.$request->title_menu);
            return redirect()->route('admin.menufront')->with(['success' => 'Data Berhasil Diupdate!']);
        }else{
            //redirect dengan pesan error
            return redirect()->route('admin.menufrontedit')->with(['error' => 'Data Gagal Diupdate!']);
        }

    }
    public function destroy($id)
    {
        $result = MenuFrontModel::findOrFail($id);
        //Storage::disk('local')->delete('public/news/'.$result->image);
        $result->delete();
        if ($result) {
            \LogActivity::addToLog('Hapus news '.$id);
            return redirect('admin/menufront')->with('success', 'Hapus Data Berhasil');
        }else{
            return redirect('admin/menufront')->with('error', 'Maaf data tidak ditemukan');
        }
        
    }
}
