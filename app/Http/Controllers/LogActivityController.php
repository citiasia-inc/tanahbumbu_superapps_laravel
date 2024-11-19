<?php

namespace App\Http\Controllers;
  
use Illuminate\Http\Request;
  
class LogActivityController extends Controller
{
    public function myTestAddToLog()
    {
  
          //kalian bisa melakukan apapun 
          //seperti create, read, update dan delete sebelum fungsi log di bawah ini dijalankan
  
          \LogActivity::addToLog('My Testing Add To Log.');
          //dd('log insert successfully.');
    }
  
  
      /**
       * Show the application dashboard.
       *
       * @return \Illuminate\Http\Response
       */
    public function logActivity()
    {
  
          //kalian bisa melakukan apapun 
          //seperti create, read, update dan delete sebelum fungsi log di bawah ini dijalankan
          
          $logs = \LogActivity::logActivityLists();
          return view('log_activity', compact('logs'));
    }
}