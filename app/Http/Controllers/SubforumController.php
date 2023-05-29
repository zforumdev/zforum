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
        if ($request->has('search')) {
            return inertia('Home', [
                'posts' => Post::search($request->get('search'))
                    ->get()
                    ->load(['user:id,username,display_name', 'subforum:id,name']),
                'query' => $request->get('search')
            ]);
        }

        return inertia('Home', [
            'posts' => Post::with(['user:id,username,display_name', 'subforum:id,name'])
                ->where('subforum_id', $subforum->id)
                ->orderBy('created_at', 'desc')
                ->paginate(10),
            'sub' => $subforum->name
        ]);
    }
}
