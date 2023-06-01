<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(Request $request)
    {
        if ($request->has('search') and strlen($request->get('search')) > 0) {
            return inertia('Home', [
                'posts' => Post::search($request->get('search'))
                    ->get()
                    ->load(['user:id,username,display_name', 'subforum:id,name']),
                'query' => $request->get('search')
            ]);
        }

        return inertia('Home', [
            'posts' => Post::with(['user:id,username,display_name', 'subforum:id,name'])
                ->orderBy('updated_at', 'desc')
                ->paginate(10)
        ]);
    }

    public function view(Post $post, Request $request)
    {
        return inertia('Posts/Show', [
            'post' => $post->with(['user:id,username,display_name'])->where('id', $post->id)->firstOrFail(),
            'body' => Str::markdown($post->body),
            'description' => Str::limit($post->body),
            'comments' => $post->comments()->with(['user:id,username', 'replies.user:id,username'])->paginate(50),
            'update' => $request->user()?->can('update', $post) ?? false,
            'delete' => $request->user()?->can('delete', $post) ?? false
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

    public function edit(Post $post, Request $request)
    {
        if ($request->user()->cannot('update', $post))
        {
            abort(403);
        }

        return inertia('Posts/Create', [
            'title' => $post->title,
            'body' => $post->body,
            'post' => $post->only(['id']),
            'subforum_id' => $post->subforum_id
        ]);
    }

    public function update(Post $post, Request $request)
    {
        if ($request->user()->cannot('update', $post))
        {
            abort(403);
        }

        $attributes = $request->validate([
            'body' => ['required', 'min:32', 'max:2500']
        ]);

        $post->update($attributes);

        $post->edited_at = now('UTC')->toISOString();
        $post->update();

        return Inertia::location('/post/' . $post->id);
    }

    public function destroy(Post $post, Request $request)
    {
        if ($request->user()->cannot('delete', $post)) {
            abort(403);
        }

        $post->delete();

        return Inertia::location('/');
    }
}
