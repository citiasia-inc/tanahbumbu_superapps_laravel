<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\User;
use Notification;
use App\Notifications\StatusUpdate;
use Illuminate\Notifications\Notifiable;
class NotifyController extends Controller
{
  public function __construct()
  {
    $this->middleware('auth');
  }
  public function index()
  {
    $user->notify(new StatusUpdate($sale));
  }
}
