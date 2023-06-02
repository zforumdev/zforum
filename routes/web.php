<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\ReplyController;
use App\Http\Controllers\SessionsController;
use App\Http\Controllers\SubforumController;
use App\Http\Controllers\UserController;
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
Route::get('/s/{subforum:slug}', [PostController::class, 'index']);

Route::get('/post/{post}', [PostController::class, 'view']);

Route::get('/post/{post}/update', [PostController::class, 'edit']);
Route::post('/post/{post}/update', [PostController::class, 'update']);

Route::post('/post/{post}/delete', [PostController::class, 'destroy']);

Route::post('/post/{post}/add-comment', [CommentController::class, 'store'])->middleware(['auth', 'throttle:reply']);
Route::post('/add-reply', [ReplyController::class, 'store'])->middleware(['auth', 'throttle:reply']);

Route::get('/posts/create', [PostController::class, 'create'])->middleware('auth');
Route::post('/posts/create', [PostController::class, 'store'])->middleware(['auth', 'throttle:create-post']);

Route::get('/auth/register', [RegistrationController::class, 'create'])->middleware('guest');
Route::post('/auth/register', [RegistrationController::class, 'store'])->middleware('guest');

Route::get('/auth/login', [SessionsController::class, 'create'])->middleware('guest')->name('login');
Route::post('/auth/login', [SessionsController::class, 'store'])->middleware(['guest', 'throttle:login']);

Route::post('/auth/logout', [SessionsController::class, 'destroy'])->middleware('auth');

Route::middleware('admin')->group(function () {
    Route::prefix('admin')->group(function () {
        Route::get('/', [\App\Http\Livewire\Admin\Dashboard::class, 'render']);

        Route::get('/settings', [\App\Http\Livewire\Admin\Settings::class, 'render']);
    });
});
