<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert(['name' => 'cliente']);
        DB::table('roles')->insert(['name' => 'repartidor']);
        DB::table('roles')->insert(['name' => 'gestor_restaurante']);
        DB::table('roles')->insert(['name' => 'admin']);
    }
}
