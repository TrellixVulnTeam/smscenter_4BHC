<?php

use App\Http\Controllers\SMSController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/typeOne',[SMSController::class,'typeOne']);
Route::get('/typeTwo',[SMSController::class,'typeTwo']);
Route::get('/gracePeriod',[SMSController::class,'gracePeriod']);
Route::get('/standardPeriod',[SMSController::class,'standardPeriod']);
Route::get('/softPeriod',[SMSController::class,'softPeriod']);
Route::get('/hardPeriod',[SMSController::class,'hardPeriod']);
Route::get('/prolongationPeriod',[SMSController::class,'prolongationPeriod']);
Route::get('/failureClient',[SMSController::class,'failureClient']);
Route::get('/checkCron',[SMSController::class,'checkCron']);
Route::get('/repayment',[SMSController::class,'repayment']);
Route::get('/advertisement', [SMSController::class,'advertisement']);
//admin
Route::post('/login',[UserController::class,'login']);
Route::get('/getProfile',[UserController::class,'getProfile']);
Route::get('/logout',[UserController::class,'logout']);
Route::get('/changePassword',[UserController::class,'changePassword']);
Route::get('/users',[UserController::class,'index']);
Route::get('/givePermission',[UserController::class,'givePermission']);
Route::get('/deleteAccount',[UserController::class,'deleteAccount']);
Route::put('/edit',[UserController::class,'edit']);
Route::put('/editOwn',[UserController::class,'editOwn']);
Route::post('/users',[UserController::class,'addUser']);
Route::get('/sms', [SmsController::class, 'index']);
Route::get('/exportSms', [SmsController::class, 'indexFile']);
Route::get('/smsFilter', [SmsController::class, 'filter']);
Route::get('/smsTypes', [SmsController::class, 'getSmsTypes']);
Route::get('/smsStatuses', [SmsController::class, 'getSmsStatuses']);
