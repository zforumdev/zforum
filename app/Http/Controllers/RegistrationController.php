<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RegistrationController extends Controller
{
    public function create()
    {
        return inertia('Auth/Register');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'display_name' => ['required', 'min:1', 'max:32'],
            'username' => ['required', 'alpha_dash:ascii', 'lowercase:', 'unique:users,username', 'min:3', 'max:32'],
            'email' => ['required', 'email', 'unique:users,email', 'min:5', 'max:128'],
            'password' => ['required', 'confirmed', 'min:1', 'max:128'],
            'tos_confirm' => ['required']
        ]);

        $user = User::create($attributes);

        Auth::login($user);

        return Inertia::location('/');
    }
}
