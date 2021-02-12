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
            'email' => 'eduard@admin.com',
            'role_id' => 4,
        ]);
        User::factory()->count(10)->create();
    }
}
