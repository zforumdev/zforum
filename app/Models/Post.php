<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Scout\Searchable;

class Post extends Model
{
    use HasFactory, hasUuids, Searchable;

    protected $fillable = [
        'title',
        'body',
        'subforum_id',
        'user_id'
    ];

    protected function makeAllSearchableUsing(Builder $query): Builder
    {
        return $query->with(['user:id,username,display_name', 'subforum:id,name']);
    }

    public function subforum(): BelongsTo
    {
        return $this->belongsTo(Subforum::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }
}
