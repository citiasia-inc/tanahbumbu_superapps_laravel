<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use App\Models\News;
use App\Notifications\BirthdayWish;

class WelcomeController extends Controller
{
    public function index()
    {
        $data['news'] = News::orderBy('id', 'DESC')->limit(5)->get();
        return view('welcome', $data);
    }
    public function homelainnya(){
        return view('homelainnya');
    }
    public function newsdetail($id = false){
        $news = News::where('id', $id)->first();
        $data['rows'] = $news;
        $data['news'] = News::orderBy('id', 'DESC')->limit(5)->get();
        return view('newsdetail', $data);
    }
    public function newslist(){
        $data['news'] = News::orderBy('id', 'DESC')->limit(5)->get();
        return view('newslist', $data);
    }
    public function HomemenuView($id = false){

        $iframeSource ="https://sipadu.tanahbumbukab.go.id";
        switch ($id) {
            case "1":
                return redirect()->route('welcome');
                break;
            case "2":
                return redirect()->route('welcome');
                break;
            case "3":
                $iframeSource ="https://prodigwis.web.id";
                break;
            case "4":
                $iframeSource ="https://siap-padu.tanahbumbukab.go.id";
                break;
            case "5":
                $iframeSource ="https://sipadu.tanahbumbukab.co.id";
                break;
            case "6":
                $iframeSource ="https://sipensil.tanahbumbukab.go.id";
                break;
            case "7":
                $iframeSource ="https://mc.tanahbumbukab.go.id";
                break;
            case "8":
                $iframeSource ="https://play.google.com/store/apps/details?id=mam.reader.itanbu&hl=id&pli=1";
                break;
            case "9":
                return redirect()->route('welcome');
                break;
            case "10":
                $iframeSource ="https://srikandi.arsip.go.id";
                break;
            case "11":
                $iframeSource ="https://sipd.kemendagri.go.id";
                break;
            case "12":
                $iframeSource ="https://sipd.kemendagri.go.id";
                break;
            default:
                return redirect()->route('welcome');
        }
        
        return view('menuhomedetail', compact('iframeSource'));
    }
    public function notify(Request $request){
        $user = User::find(1);
        $messages["hi"] = "Hey, Happy Birthday {$user->name}";
        $messages["wish"] = "On behalf of the entire company I wish you a very happy birthday and send you my best wishes for much happiness in your life.";
          
        $user->notify(new BirthdayWish($messages));
    }
}
