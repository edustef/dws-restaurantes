<?php

namespace Database\Seeders;

use App\Models\Dish;
use App\Models\Order;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Order::factory()->count(200)->create();
        $dishes = Dish::all();

        Order::all()->each(function ($order) use ($dishes) {
            $order->dishes()->attach(
                $dishes->random(rand(1, 5))->pluck('id')->toArray()
            );
        });
    }
}
