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
        DB::table('roles')->insert(['id' => 1, 'name' => 'client']);
        DB::table('roles')->insert(['id' => 2, 'name' => 'deliverer']);
        DB::table('roles')->insert(['id' => 3, 'name' => 'restaurant_manager']);
        DB::table('roles')->insert(['id' => 4, 'name' => 'admin']);
    }
}
