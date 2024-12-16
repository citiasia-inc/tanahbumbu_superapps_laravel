<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as AuthUser;

class MenuFrontModel extends Model
{
    use HasFactory, Notifiable;
    protected $table = 'tb_menufront';
    protected $primaryKey = 'id';

    protected $fillable = [
        'title_menu', 'link_menu', 'icon_menu'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
