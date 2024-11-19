<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use App\Models\Laporan;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
   function index(){

    return view('dashboards.users.index');
   }
   function settings(){
       return view('dashboards.users.settings');
   }
   
   function profile(){
        
       return view('dashboards.users.profile');
   }
   function notification(){

       return view('dashboards.users.notification');
   }
   
   function history(){

        $logs = \LogActivity::logActivityLists();
        return view('dashboards.users.history', compact('logs'));
   }


   function report(){

       return view('dashboards.users.report');
   }
    public function reportstore(Request $request){
        $request->validate([
            'image' => 'required',
            'title' => 'required',
            'content' => 'required'
        ]);

        $image = $request->file('image');
        $image->storeAs('public/laporan', $image->hashName());

        $lapor = Laporan::create([
            'image'     => $image->hashName(),
            'title'     => $request->title,
            'content'   => $request->content,
            'name' => Auth::user()->name,
            'email' => Auth::user()->email
        ]);
        if($lapor){
            //redirect dengan pesan sukses
            \LogActivity::addToLog('Laporan anda '.$request->title);
            return redirect()->route('user.report')->with(['success' => 'Data Berhasil Disimpan!']);
        }else{
            //redirect dengan pesan error
            return redirect()->route('user.report')->with(['error' => 'Data Gagal Disimpan!']);
        }
    }
}
