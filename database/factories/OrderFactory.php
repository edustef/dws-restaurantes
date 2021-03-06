<?php

namespace Database\Factories;

use App\Models\Deliverer;
use App\Models\Order;
use App\Models\Restaurant;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Order::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $userIds = User::all()->pluck('id')->toArray();
        $restaurantIds = Restaurant::all()->pluck('id')->toArray();
        $delivererIds = Deliverer::all()->pluck('id')->toArray();
        $status = ['recived', 'delivered', 'canceled'];
        return [
            'user_id' => $this->faker->randomElement($userIds),
            'restaurant_id' => $this->faker->randomElement($restaurantIds),
            'deliverer_id' => $this->faker->randomElement($delivererIds),
            'status' => $this->faker->randomElement($status),
        ];
    }
}
