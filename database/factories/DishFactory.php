<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Dish;
use App\Models\Restaurant;
use Illuminate\Database\Eloquent\Factories\Factory;

class DishFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Dish::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $categoryIds = Category::all()->pluck('id')->toArray();
        $restaurantIds = Restaurant::all()->pluck('id')->toArray();

        return [
            'name' => $this->faker->colorName,
            'description' => $this->faker->paragraph(2),
            'photo' => 'default.jpg',
            'price' => $this->faker->randomFloat(2, 1, 30),
            'restaurant_id' => $this->faker->randomElement($restaurantIds),
            'category_id' => $this->faker->randomElement($categoryIds),
        ];
    }
}
