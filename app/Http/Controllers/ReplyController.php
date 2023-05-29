<?php

namespace App\Http\Controllers;

use App\Models\Reply;
use Illuminate\Http\Request;

class ReplyController extends Controller
{
    public function store(Request $request)
    {
        $attributes = $request->validate([
            'body' => ['required', 'min:1', 'max:1000'],
            'comment_id' => ['required', 'exists:comments,id']
        ]);

        $attributes['user_id'] = $request->user()->id;

        Reply::create($attributes);

        return back();
    }
}
