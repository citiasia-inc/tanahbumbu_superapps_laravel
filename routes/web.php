<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\SocialiteController;
use App\Http\Controllers\NewsController;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', [App\Http\Controllers\WelcomeController::class, 'index'])->name('welcome');
Route::get('/welcome', [App\Http\Controllers\WelcomeController::class, 'index'])->name('welcome');
Route::get('homeviewdetail/{id}', [App\Http\Controllers\WelcomeController::class, 'HomemenuView']);
Route::get('news-detail/{id}', [App\Http\Controllers\WelcomeController::class, 'newsdetail']);
Route::get('news-list', [App\Http\Controllers\WelcomeController::class, 'newslist']);
Route::get('home-lainnya', [App\Http\Controllers\WelcomeController::class, 'homelainnya']);


Route::get('/login/{provider}', [SocialiteController::class, 'redirectToProvider']);
Route::get('/login/{provider}/callback', [SocialiteController::class, 'handleProvideCallback']);
Route::get('send', 'NotifyController@index');
Route::get('user-notify', [App\Http\Controllers\WelcomeController::class, 'notify']);

Route::middleware(['middleware'=>'PreventBackHistory'])->group(function () {
    Auth::routes();
});
Route::post('/deposit', [App\Http\Controllers\DepositController::class,'deposit'])->name('deposit');
Route::get('/mark-as-read', [App\Http\Controllers\DepositController::class,'markAsRead'])->name('mark-as-read');


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('add-to-log', 'App\Http\Controllers\LogActivityController@myTestAddToLog');
Route::get('log-activity', 'App\Http\Controllers\LogActivityController@logActivity');

Route::group(['prefix'=>'admin', 'middleware'=>['isAdmin','auth','PreventBackHistory']], function(){
        Route::get('dashboard',[AdminController::class,'index'])->name('admin.dashboard');
        Route::get('profile',[AdminController::class,'profile'])->name('admin.profile');
        Route::get('settings',[AdminController::class,'settings'])->name('admin.settings');

        Route::post('update-profile-info',[AdminController::class,'updateInfo'])->name('adminUpdateInfo');
        Route::post('change-profile-picture',[AdminController::class,'updatePicture'])->name('adminPictureUpdate');
        Route::post('change-password',[AdminController::class,'changePassword'])->name('adminChangePassword');

        //manage user
        Route::get('userview',[AdminController::class,'Userview'])->name('admin.userview');
        Route::get('useradd',[AdminController::class,'Usercreate'])->name('admin.useradd');
        Route::post('usersave',[AdminController::class,'Userstore'])->name('admin.usersave');
        Route::delete('userdestroy/{id}',[AdminController::class,'Userdestroy'])->name('admin.userdestroy');
        
        Route::get('useredit/{id}',[AdminController::class,'Useredit']);
        Route::put('userupdate/{id}',[AdminController::class,'Userupdate']);
        // manage nes
        Route::get('newsview',[NewsController::class,'NewsView'])->name('admin.newsview');
        Route::get('newsadd',[NewsController::class,'Newscreate'])->name('admin.newsadd');
        Route::post('newssave',[NewsController::class,'Newsstore'])->name('admin.newssave');
        Route::delete('newsdestroy/{id}',[NewsController::class,'destroy'])->name('admin.newsdestroy');
        Route::get('newsedit/{id}',[NewsController::class,'edit'])->name('admin.newsedit');;
        Route::put('newsupdate/{id}',[NewsController::class,'update']);
    

});

Route::group(['prefix'=>'user', 'middleware'=>['isUser','auth','PreventBackHistory']], function(){
    Route::get('dashboard',[UserController::class,'index'])->name('user.dashboard');
    Route::get('profile',[UserController::class,'profile'])->name('user.profile');
    Route::get('settings',[UserController::class,'settings'])->name('user.settings');

    Route::get('notification',[UserController::class,'notification'])->name('user.notification');
    
    Route::get('history',[UserController::class,'history'])->name('user.history');
    Route::get('report',[UserController::class,'report'])->name('user.report');
    Route::post('reportstore',[UserController::class,'reportstore'])->name('user.reportstore');

    
    
});
