<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Post $post, Request $request)
    {
        $request->validate([
            'body' => ['required', 'min:1', 'max:1000']
        ]);

        Comment::create([
            'post_id' => $post->id,
            'user_id' => $request->user()->id,
            'body' => $request->get('body')
        ]);
    }
}
