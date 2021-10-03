<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UsersController;
use App\Http\Controllers\DelicaciesController;
use App\Http\Controllers\OrdersController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [UsersController::class, 'register']);
Route::post('/login', [UsersController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function() {
    Route::resource('delicacies', DelicaciesController::class);
    Route::get('/delicacies/search/{name}', [DelicaciesController::class, 'search']);
    Route::resource('orders', OrdersController::class);
    Route::get('/orders/search/{user_id}', [OrdersController::class, 'search']);
    Route::post('/logout', [UsersController::class, 'logout']);
});

// Route::get('/delicacies', [DelicaciesController::class, 'index']);
// Route::post('/delicacies', [DelicaciesController::class, 'store']);

// Route::get('/orders', [OrdersController::class, 'index']);
// Route::get('/orders', [OrdersController::class, 'store']);
