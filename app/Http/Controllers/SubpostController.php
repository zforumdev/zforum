<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Subpost;
use Illuminate\Http\Request;

class SubpostController extends Controller
{
    public function store(Post $post, Request $request)
    {
        $request->validate([
            'body' => ['required', 'min:1', 'max:1000']
        ]);

        $subpost = new Subpost;
        $subpost->body = $request->body;
        $subpost->user()->associate($request->user());

        $post->subposts()->save($subpost);

        return back();
    }

    public function store_nested(Post $post, Request $request)
    {
        if ($request->has('parent_id')) {
            $request->validate([
                'body' => ['required', 'min:1', 'max:1000'],
                'parent_id' => ['exists:subposts,id']
            ]);
        } else {
            $request->validate([
                'body' => ['required', 'min:1', 'max:1000']
            ]);
        }

        $subpost = new Subpost();
        $subpost->body = $request->body;
        $subpost->user()->associate($request->user());
        $subpost->parent_id = $request->parent_id;

        $post->subposts()->save($subpost);

        return back();
    }
}
