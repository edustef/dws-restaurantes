<?php

namespace App\Http\Livewire\Intranet;

use App\Models\Restaurant;
use Livewire\Component;
use Livewire\WithPagination;

class RestaurantsComponent extends Component
{
    use WithPagination;

    public function render()
    {
        return view('livewire.intranet.restaurants-component', ['restaurants' => Restaurant::paginate(5)]);
    }
}
