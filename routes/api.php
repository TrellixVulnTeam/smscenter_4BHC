<?php

use App\Http\Controllers\SMSController;
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
