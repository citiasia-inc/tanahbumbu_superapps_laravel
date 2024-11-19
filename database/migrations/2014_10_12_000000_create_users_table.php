<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Hash;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_user', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->boolean('role')->nullable();
            $table->string('picture')->nullable();
            $table->date('birthdate')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
        DB::table('tb_user')->insert([
            'name' => 'Super Admin',
            'email' => 'superadmin@gmail.com',
            'password' => Hash::make('123'),
            'role' => '1',
        ]);

        DB::table('tb_user')->insert([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('123'),
            'role' => '2',
        ]);
        DB::table('tb_user')->insert([
            'name' => 'Aparatur Bapeda',
            'email' => 'ab@gmail.com',
            'password' => Hash::make('123'),
            'role' => '3',
        ]);
        DB::table('tb_user')->insert([
            'name' => 'Masyarakat',
            'email' => 'user@gmail.com',
            'password' => Hash::make('123'),
            'role' => '4',
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_user');
    }
}
