<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Laporandetail extends Model
{
    use HasFactory;
    protected $table = 'tb_laporandetail';
    protected $primaryKey = 'id';

    protected $fillable = [
        'id_laporan', 'title', 'content','name','email'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
