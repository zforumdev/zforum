<?php

namespace App\Http\Livewire\Stats;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class Posts extends Component
{
    public function render()
    {
        $top_posters = User::join('posts', 'users.id', '=', 'posts.user_id')
            ->select('users.*', DB::raw('count(*) as post_count'))
            ->groupBy('users.id')
            ->orderByDesc('post_count')
            ->take(20)
            ->get();

        return view('livewire.stats.posts', [
            'top_posters' => $top_posters
        ]);
    }
}
