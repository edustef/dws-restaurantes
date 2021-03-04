<?php

namespace App\Http\Livewire\Intranet\Restaurant;

use App\Models\Restaurant;
use Livewire\Component;
use Livewire\WithPagination;

class RestaurantLiveController extends Component
{
    use WithPagination;

    // FOR MODAL
    public $isModalConfirmDelete = false;
    public $isModalView = false;
    public $isModalEdit = false;
    public $isModalCreate = false;
    public $currentRestaurant;
    private $restaurants;

    // FOR URL
    public $query;
    public $page = 1;
    public $orderDesc = true;
    public $orderBy = 'id';
    protected $queryString = ['query' => ['except' => ''], 'page' => ['except' => 1], 'orderBy' => ['except' => 'id'], 'orderDesc'];

    // FOR STORING AND EDITING 

    public $name;
    public $address;
    public $city;
    public $phone;
    public $latitude;
    public $longitude;

    public function rules()
    {
        return [
            'name' => 'required',
            'address' => 'required',
            'city' => 'required',
            'phone' => 'required',
            'latitude' => 'required',
            'longitude' => 'required',
        ];
    }


    public function delete()
    {
        $this->currentRestaurant->delete();
        $this->closeModal();
    }

    public function store()
    {
        $validatedData = $this->validate();

        Restaurant::create($validatedData);
        $this->resetValidation();
        $this->closeModal();
        return;
    }

    public function edit()
    {

        $this->resetValidation();
        $this->closeModal();
        return;
    }

    public function updated($prop)
    Eduard{
        $this->validateOnly($prop);
    }

    public function openModal($modal, Restaurant $restaurant)
    {
        $this->currentRestaurant = $restaurant;
        switch ($modal) {
            case 'view':
                $this->isModalView = true;
                break;
            case 'create':
                $this->isModalCreate = true;
                break;
            case 'edit':
                $this->isModalEdit = true;
                break;
            case 'delete':
                $this->isModalConfirmDelete = true;
                break;
        }
    }

    public function setOrder($orderBy)
    {
        if ($orderBy === $this->orderBy) {
            $this->orderDesc = !$this->orderDesc;
        } else {
            $this->orderBy = $orderBy;
        }
    }

    public function closeModal()
    {
        $this->reset([
            'isModalView',
            'isModalCreate',
            'isModalEdit',
            'isModalConfirmDelete',
            'currentRestaurant',
            'name',
            'city',
            'phone',
            'address',
        ]);
    }

    public function updatingQuery()
    {
        $this->resetPage();
    }

    public function updatedPage()
    {
        $this->gotoPage($this->page);
    }

    public function render()
    {
        $query = '%' . $this->query . '%';
        $this->restaurants = Restaurant::where('name', 'like', $query)
            ->orWhere('city', 'like', $query)
            ->orWhere('address', 'like', $query)
            ->orderBy($this->orderBy, $this->orderDesc ? 'DESC' : 'ASC')
            ->paginate(5);
        return view('livewire.intranet.restaurant.restaurant-live-controller', ['restaurants' => $this->restaurants]);
    }
}
