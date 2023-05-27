<?php

use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\SessionsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return inertia('Home', [
        'auth' => Auth::user()
    ]);
});

Route::get('/auth/register', [RegistrationController::class, 'create'])->middleware('guest');
Route::post('/auth/register', [RegistrationController::class, 'store'])->middleware('guest');

Route::get('/auth/login', [SessionsController::class, 'create'])->middleware('guest');
Route::post('/auth/login', [SessionsController::class, 'store'])->middleware('guest');

Route::post('/auth/logout', [SessionsController::class, 'destroy'])->middleware('auth');
