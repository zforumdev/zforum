<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Post extends Model
{
    use HasFactory, hasUuids;

    protected $fillable = [
        'title',
        'body',
        'subforum_id',
        'user_id'
    ];

    public function subforum(): BelongsTo
    {
        return $this->belongsTo(Subforum::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function subposts(): MorphMany
    {
        return $this->morphMany(Subpost::class, 'subpostable')->whereNull('parent_id');
    }
}
