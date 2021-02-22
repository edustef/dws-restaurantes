<?php

namespace App\Http\Livewire\Intranet;

use App\Models\Restaurant;
use Livewire\Component;

class RestaurantComponent extends Component
{
    public Restaurant $restaurant;

    public function edit(Restaurant $restaurant)
    {
        //
    }


    public function update(Restaurant $restaurant)
    {
        //
    }

    public function destroy(Restaurant $restaurant)
    {
        //
    }

    public function render()
    {
        return view('livewire.intranet.restaurant');
    }
}
