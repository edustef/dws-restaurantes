<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'name' => 'Eduard Stefan',
            'email' => 'admin@example.com',
            'role_id' => 4,
        ]);
        User::factory()->create([
            'name' => 'Eduard Stefan',
            'email' => 'manager@example.com',
            'role_id' => 3,
        ]);
        User::factory()->create([
            'name' => 'Eduard Stefan',
            'email' => 'deliverer@example.com',
            'role_id' => 2,
        ]);
        User::factory()->create([
            'name' => 'Eduard Stefan',
            'email' => 'client@example.com',
            'role_id' => 1,
        ]);
        User::factory()->count(40)->create();
    }
}
