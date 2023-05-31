<?php

namespace App\Http\Livewire\Stats;

use Livewire\Component;
use App\Models\User;
use Carbon\Carbon;

class Users extends Component
{
    public function render()
    {
        $this_month = User::where([
            ['created_at', '>=', Carbon::now()->addMonths(-1)],
            ['created_at', '<', Carbon::now()]
        ])->count();

        $last_month = User::where([
            ['created_at', '>=', Carbon::now()->addMonths(-2)],
            ['created_at', '<', Carbon::now()->addMonths(-1)]
        ])->count();

        $two_months = User::where([
            ['created_at', '>=', Carbon::now()->addMonths(-3)],
            ['created_at', '<', Carbon::now()->addMonths(-2)]
        ])->count();

        return view('livewire.stats.users', [
            'this_month' => $this_month,
            'last_month' => $last_month,
            'two_months' => $two_months
        ]);
    }
}
