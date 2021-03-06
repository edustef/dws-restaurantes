<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DishController;
use App\Http\Controllers\RestaurantController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('guest')->group(function () {
    Route::get('/', function () {
        return Inertia::render('LandingPage');
    });
});

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::middleware(['isNotClient'])->prefix('intranet')->group(function () {
        Route::get('/', function () {
            return Inertia::render('Intranet/Index');
        })->name('intranet');
        Route::resource('/restaurants', RestaurantController::class);
        Route::resource('/dishes', DishController::class);
        Route::resource('/categories', CategoryController::class);
        Route::resource('/users', UserController::class);
    });
});
