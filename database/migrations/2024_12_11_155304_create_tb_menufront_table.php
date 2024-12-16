<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateTbMenufrontTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_menufront', function (Blueprint $table) {
            $table->id();
            $table->string('title_menu')->nullable();
            $table->string('link_menu')->nullable();
            $table->string('icon_menu')->nullable();
            $table->timestamps();
        });
        DB::table('tb_menufront')->insert([
            'title_menu' => 'Tanbu City Tour',
            'link_menu' => '/homeviewdetail/1',
            'icon_menu' => 'assets/img/icon_cafe.png',
        ]);
        DB::table('tb_menufront')->insert([
            'title_menu' => 'GEGANA',
            'link_menu' => '/homeviewdetail/2',
            'icon_menu' => 'assets/img/icon_selangor_pandu.png',
        ]);
        DB::table('tb_menufront')->insert([
            'title_menu' => 'Prodigwis',
            'link_menu' => '/homeviewdetail/3',
            'icon_menu' => 'assets/img/icon_wisata.png',
        ]);
        DB::table('tb_menufront')->insert([
            'title_menu' => 'SIAP-PADU',
            'link_menu' => '/homeviewdetail/4',
            'icon_menu' => 'assets/img/icon_selangor_trsnsport.png',
        ]);
        DB::table('tb_menufront')->insert([
            'title_menu' => 'Sipadu',
            'link_menu' => '/homeviewdetail/5',
            'icon_menu' => 'assets/img/icon_keluhan.png',
        ]);
        DB::table('tb_menufront')->insert([
            'title_menu' => 'SI PENSIL',
            'link_menu' => '/homeviewdetail/5',
            'icon_menu' => 'assets/img/icon_pembiayaan.png',
        ]);
        DB::table('tb_menufront')->insert([
            'title_menu' => 'SIMETRIS',
            'link_menu' => '/homeviewdetail/6',
            'icon_menu' => 'assets/img/icon_perklindokter.png',
        ]);
        DB::table('tb_menufront')->insert([
            'title_menu' => 'Lainnya',
            'link_menu' => '#',
            'icon_menu' => 'assets/img/icon_mores.png',
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_menufront');
    }
}
