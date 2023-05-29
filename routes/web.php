<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\SessionsController;
use App\Http\Controllers\SubforumController;
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

Route::get('/', [PostController::class, 'index']);
Route::get('/s/{subforum:slug}', [SubforumController::class, 'view']);

Route::get('/post/{post}', [PostController::class, 'view']);

Route::post('/post/{post}/add-comment', [CommentController::class, 'store']);

Route::get('/posts/create', [PostController::class, 'create'])->middleware('auth');
Route::post('/posts/create', [PostController::class, 'store'])->middleware('auth');

Route::get('/auth/register', [RegistrationController::class, 'create'])->middleware('guest');
Route::post('/auth/register', [RegistrationController::class, 'store'])->middleware('guest');

Route::get('/auth/login', [SessionsController::class, 'create'])->middleware('guest')->name('login');
Route::post('/auth/login', [SessionsController::class, 'store'])->middleware('guest');

Route::post('/auth/logout', [SessionsController::class, 'destroy'])->middleware('auth');
