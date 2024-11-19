<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Laporan extends Model
{
    use HasFactory;
    protected $table = 'tb_laporan';
    protected $primaryKey = 'id';

    protected $fillable = [
        'image', 'title', 'content','name','email','phone'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
