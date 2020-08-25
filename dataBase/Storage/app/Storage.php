<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Storage extends Model
{

    protected $table = "storage";
    protected $fillable= [
        'name',
        'note',
        'cost',
        'price',
        'count',
    ];


}
