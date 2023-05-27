<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SessionsController extends Controller
{
    public function create()
    {
        return inertia('Auth/Login');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        if (Auth::attempt($attributes)) {
            return Inertia::location('/');
        }

        return back()->withErrors([
            'email' => 'Email or password doesn\'t match our records.',
            'password' => 'Email or password doesn\'t match our records.'
        ]);
    }

    public function destroy()
    {
        Auth::logout();

        return Inertia::location('/');
    }
}
