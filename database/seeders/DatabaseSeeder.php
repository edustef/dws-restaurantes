<?php

namespace Database\Seeders;

use App\Models\Restaurant;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            RestaurantSeeder::class,
            CategorySeeder::class,
            DelivererSeeder::class,
            DishSeeder::class,
            OrderSeeder::class
        ]);
    }
}
