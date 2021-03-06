<?php

namespace Database\Seeders;

use App\Models\Deliverer;
use Illuminate\Database\Seeder;

class DelivererSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Deliverer::factory()->count(5)->create();
    }
}
