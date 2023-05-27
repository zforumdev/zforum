<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        return inertia('Home', [
            'posts' => Post::with('user:id,username,display_name')
                ->orderBy('created_at', 'desc')
                ->get()
        ]);
    }

    public function view(Post $post, Request $request)
    {
        return inertia('Posts/Show', [
            'post' => $post->with('user:id,username,display_name')->where('id', $post->id)->firstOrFail(),
            'body' => Str::markdown($post->body)
        ]);
    }

    public function create()
    {
        return inertia('Posts/Create');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'title' => ['required', 'min:10', 'max:128'],
            'body' => ['required', 'min:32', 'max:2500'],
            'subforum_id' => ['required', 'exists:subforums,id']
        ]);

        $attributes['user_id'] = Auth::id();

        $post = Post::create($attributes);

        return Inertia::location('/post/' . $post->id);
    }
}
