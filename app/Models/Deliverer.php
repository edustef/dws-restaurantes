<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deliverer extends Model
{
    use HasFactory;

    protected $fillable = [
        'salary',
        'isFree',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
