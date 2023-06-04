<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function view(User $user, Request $request)
    {
        return Inertia::render('Users/Profile', [
            'user' => $user->only(['id', 'display_name', 'username', 'email_verified_at', 'admin', 'role_id', 'banned'])
        ]);
    }
}
