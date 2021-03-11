<?php

namespace App\Http\Controllers;

use App\Http\Requests\RestaurantRequest;
use App\Http\Resources\RestaurantResource;
use Illuminate\Http\Request;
use App\Models\Restaurant;
use Inertia\Inertia;

class RestaurantController extends Controller
{

    public function __construct()
    {
        $this->authorizeResource(Restaurant::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $restaurants = RestaurantResource::collection(Restaurant::where('name', 'LIKE', "%{$request['q']}%")
            ->orderBy($request['orderBy'] ?? 'name', $request['order'] ?? 'ASC')
            ->paginate(5));

        return Inertia::render('Intranet/Restaurant/Index', [
            'restaurants' => $restaurants,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Intranet/Restaurant/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RestaurantRequest $request)
    {
        Restaurant::create($request->validated());
        return redirect(route('restaurants.index'));
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Restaurant $restaurant)
    {
        return Inertia::render('Intranet/Restaurant/Show', ['restaurant' => new RestaurantResource($restaurant)]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Restaurant $restaurant)
    {
        return Inertia::render('Intranet/Restaurant/Edit', ['restaurant' => new RestaurantResource($restaurant)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(RestaurantRequest $request, Restaurant $restaurant)
    {
        $restaurant->update($request->validated());
        return redirect(route('restaurants.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Restaurant $restaurant)
    {
        $restaurant->delete();
        return redirect(route('restaurants.index'));
    }

    public function explore()
    {
        return Inertia::render('Explore', ['restaurants' => Restaurant::with('user')->paginate(5)]);
    }
    public function exploreRestaurant(Restaurant $restaurant)
    {
        return Inertia::render('ExploreRestaurant', ['restaurant' => new RestaurantResource($restaurant)]);
    }
}
