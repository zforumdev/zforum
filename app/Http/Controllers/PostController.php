<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Subforum;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(Subforum $subforum, Request $request)
    {
        if ($request->has('search') and strlen($request->get('search')) > 0) {
            $posts = Post::search($request->get('search'))
                ->when($subforum->id, function ($query, $subforum) {
                    return $query->where('subforum_id', $subforum);
                })
                ->get()
                ->load(['user:id,username,display_name', 'subforum:id,name']);
            return Inertia::render('Home', [
                'posts' => $posts,
                'count' => $posts->count(),
                'query' => $request->get('search'),
                'subforum' => $subforum ?? null
            ]);
        }

        $posts = Post::with(['user:id,username,display_name', 'subforum:id,name'])
            ->when($subforum->id, function ($query, $subforum) {
                return $query->where('subforum_id', $subforum);
            })
            ->orderBy('updated_at', 'desc')
            ->paginate(50);
        return Inertia::render('Home', [
            'posts' => $posts,
            'count' => $posts->count(),
            'subforum' => $subforum ?? null
        ]);
    }

    public function view(Post $post, Request $request)
    {
        return Inertia::render('Posts/Show', [
            'post' => $post->with(['user:id,username,display_name'])->where('id', $post->id)->firstOrFail(),
            'body' => Str::markdown($post->body),
            'description' => Str::limit($post->body),
            'comments' => $post->comments()->with(['user:id,username', 'replies.user:id,username'])->paginate(50),
            'update' => $request->user()?->can('update', $post) ?? false,
            'delete' => $request->user()?->can('delete', $post) ?? false
        ]);
    }

    public function create(Request $request)
    {
        if ($request->user()->cannot('create', Post::class)) {
            return back()->with('error', 'You are not permitted to create posts');
        }

        return inertia('Posts/Create');
    }

    public function store(Request $request)
    {
        if ($request->user()->cannot('create', Post::class)) {
            return back()->with('error', 'You are not permitted to create posts');
        }

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

        return Inertia::render('Posts/Create', [
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
