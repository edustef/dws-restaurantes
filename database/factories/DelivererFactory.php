<?php

namespace Database\Factories;

use App\Models\Deliverer;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class DelivererFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Deliverer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $userIds = User::all()->pluck('id')->toArray();
        return [
            'salary' => $this->faker->randomFloat(2, 900, 1500),
            'isFree' => $this->faker->boolean(),
            'user_id' => $this->faker->randomElement($userIds)
        ];
    }
}
