<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Subforum;
use App\Models\User;
use Illuminate\Http\Request;

class SubforumController extends Controller
{
    public function view(Subforum $subforum, Request $request)
    {
        return inertia('Home', [
            'posts' => Post::with(['user:id,username,display_name', 'subforum:id,name'])
                ->where('subforum_id', $subforum->id)
                ->orderBy('created_at', 'desc')
                ->get(),
            'sub' => $subforum->name
        ]);
    }
}
