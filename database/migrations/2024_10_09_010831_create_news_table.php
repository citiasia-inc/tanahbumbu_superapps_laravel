<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_news', function (Blueprint $table) {
            $table->id();
            $table->string('image')->nullable();
            $table->string('title')->nullable();
            $table->text('content')->nullable();
            $table->bigInteger('created_by')->nullable();
            $table->bigInteger('updated_by')->nullable();
            $table->timestamps();
        });
        DB::table('tb_news')->insert([
            'image' => '70TbQt88XYA7smgQ0Vl99T08yAzZcFh6EwFGZYmV.png',
            'title' => 'Adipura Tanbu',
            'content' => 'lorenipsum lorenipsum lorenipsum',
        ]);
        DB::table('tb_news')->insert([
            'image' => 'xf3WLFuxAJzgSz2IqlqQfcZCVUS1hRTWHh773K3s.png',
            'title' => 'Wisata Wilayah Tanbu',
            'content' => 'lorenipsum lorenipsum lorenipsum',
        ]);
        DB::table('tb_news')->insert([
            'image' => 'YQ3SfIb52QIkuE2udDHPyAkZVHczThIIjlIEwE5u.png',
            'title' => 'Kantor Bupati Tanbu',
            'content' => 'lorenipsum lorenipsum lorenipsum',
        ]);
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_news');
    }
}
