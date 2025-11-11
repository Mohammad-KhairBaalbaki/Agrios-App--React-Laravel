<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //

    protected $fillable = [
        'user_id',
        'name',
        'price',
        'review'
    ];

    public function image()
    {
        return $this->morphOne(Image::class, 'model');
    }

}
