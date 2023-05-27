<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory, hasUuids;

    protected $fillable = [
        'title',
        'body',
        'subforum_id',
        'user_id'
    ];

//    public function replies()
//    {
//        return $this->hasMany(Reply::class);
//    }

    public function subforum()
    {
        return $this->belongsTo(Subforum::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
