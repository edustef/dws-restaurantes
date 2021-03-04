<div class="max-w-7xl p-4 mx-auto">
  <h1 class="text-4xl">Restaurants</h1>
  <x-jet-button wire:click="openModal('create')" class="my-2">Create new restaurant</x-jet-button>
  <div class="flex flex-col-reverse items-start md:flex-row md:items-baseline w-full md:space-x-4">
    <div class="w-full md:w-auto flex space-x-2 items-center justify-between">
      <div class="flex space-x-2">
        <x-jet-dropdown align="left" width="60">
          <x-slot name="trigger">
            <span class="inline-flex rounded-md">
              <button type="button"
                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150">
                Order by
                <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </span>
          </x-slot>

          <x-slot name="content">
            <div class="w-60 block">
              <x-dropdown-button wire:click="setOrder('name')">
                Name
              </x-dropdown-button>
              <x-dropdown-button wire:click="setOrder('city')">
                City
              </x-dropdown-button>
            </div>
          </x-slot>
        </x-jet-dropdown>
        @if ($orderBy !== 'id')
          <button wire:click="setOrder('id')" type="button"
            class="inline-flex items-center px-3 py-2 border text-sm leading-4 font-medium rounded-md text-gray-800 hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
            <span>{{ $orderBy }}</span>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        @endif
      </div>
      <button wire:click="setOrder('{{ $orderBy }}')" class="bg-gray-50 text-gray-500 p-1 rounded">
        @if ($orderDesc === true)
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
          </svg>
        @else
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
          </svg>
        @endif

      </button>
    </div>
    <x-jet-input class="mb-4 flex-grow" type="search" wire:model="query" placeholder="Search restaurant..." />
  </div>
  <table class="rounded-md w-full flex md:table flex-nowrap md:bg-white overflow-hidden md:shadow-lg my-2">
    <thead class="text-white">
      <tr class="bg-gray-800 hidden md:table-row mb-2 md:mb-0">
        <th class="p-3 border-b-2 md:border-none border-green-600 text-left">Name</th>
        <th class="p-3 border-b-2 md:border-none border-green-600 text-left">City</th>
        <th class="p-3 border-b-2 md:border-none border-green-600 text-left"">Phone</th>
        <th class=" p-3 border-b-2 md:border-none border-green-600 text-left"">Address</th>
        <th class=" p-3 border-b-2 md:border-none border-green-600 text-left">Actions</th>
      </tr>
    </thead>
    <tbody class="">
      @foreach ($restaurants as $restaurant)
        <tr class="flex flex-col bg-white shadow-md hover:bg-gray-100 md:table-row mb-2 md:mb-0 rounded-md">
          <td class="border-gray-200 border" text-sm>
            <div class="flex">
              <div class="grid place-items-center md:hidden w-16 text-sm text-gray-600 p-3">
                Name
              </div>
              <div class="p-3">
                {{ $restaurant->name }}
              </div>
            </div>
          </td>
          <td class="border-gray-200 border">
            <div class="flex">
              <div class="grid place-items-center md:hidden w-16 text-sm font-light text-gray-600 p-3">
                City
              </div>
              <div class="p-3" text-sm>
                {{ $restaurant->city }}
              </div>
            </div>
          </td>
          <td class="border-gray-200 border">
            <div class="flex">
              <div class="grid place-items-center md:hidden text-sm font-light text-gray-600 p-3">
                Phone
              </div>
              <div class="p-3">
                {{ $restaurant->phone }}
              </div>
            </div>
          </td>
          <td class="border-gray-200 border">
            <div class="flex">
              <div class="grid place-items-center md:hidden text-sm font-light text-gray-600 p-3">
                Address
              </div>
              <div class="p-3">
                {{ $restaurant->address }}
              </div>
            </div>
          </td>
          <td class="border-gray-200 border p-3">
            <div class="flex justify-around">
              <button wire:click="openModal('delete', {{ $restaurant }})"
                class="text-red-500 hover:text-red-600 hover:font-medium md:mx-2">Delete</button>
              <button wire:click="openModal('edit', {{ $restaurant }})"
                class="text-blue-500 hover:text-blue-600 hover:font-medium md:mx-2">Edit</button>
              <button wire:click="openModal('view', {{ $restaurant }})"
                class="text-green-600 hover:text-green-700 hover:font-medium md:mx-2">See details</button>
            </div>
          </td>


        </tr>
      @endforeach
    </tbody>
  </table>

  {{ $restaurants->links() }}

  {{-- CREATE NEW MODAL --}}
  <x-jet-dialog-modal wire:model="isModalCreate">
    <x-slot name="icon">
      <svg class="w-6 h-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    </x-slot>
    <x-slot name="title">
      Create new restaurant
    </x-slot>
    <form wire:submit.prevent="store" method="POST">
      @csrf
      <x-slot name="content">
        <div class="text-left w-full">
          <div>
            <x-jet-label for="name">Name</x-jet-label>
            <x-jet-input class="w-full" wire:model="name" type="text" />
            @error('name') <span class="text-sm italic text-red-500">{{ $message }}</span> @enderror
          </div>
          <div class="mt-2">
            <x-jet-label for="name">City</x-jet-label>
            <x-jet-input class="w-full" name="city" type="name" type="text" />
          </div>
          <div class="mt-2">
            <x-jet-label for="name">Address</x-jet-label>
            <x-jet-input class="w-full" name="name" type="text" />
          </div>
          <div class="mt-2">
            <x-jet-label for="name">Latitude</x-jet-label>
            <x-jet-input class="w-full" name="name" type="number" />
          </div>
          <div class="mt-2">
            <x-jet-label for="name">Longitude</x-jet-label>
            <x-jet-input class="w-full" name="name" type="number" />
          </div>
        </div>
      </x-slot>

      <x-slot name="footer">
        <x-jet-secondary-button type="cancel" wire:click="closeModal" wire:loading.attr="disabled">
          {{ __('Cancel') }}
        </x-jet-secondary-button>

        <x-jet-button type="submit" class="ml-2" wire:loading.attr=" disabled">
          {{ __('Create new') }}
        </x-jet-button>
      </x-slot>
    </form>
  </x-jet-dialog-modal>

  @if (isset($currentRestaurant))
    {{-- DELETE CONFIRMATION MODAL --}}
    <x-jet-confirmation-modal wire:model="isModalConfirmDelete">
      <x-slot name="icon">
        <svg class="h-6 w-6 text-red-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </x-slot>
      <x-slot name="title">
        {{ __('Delete Restaurant') }}
      </x-slot>

      <x-slot name="content">
        Are you sure you would like to delete restaurant <span
          class="font-semibold">{{ $currentRestaurant->name }}</span>?
      </x-slot>

      <x-slot name="footer">
        <x-jet-secondary-button wire:click="closeModal" wire:loading.attr="disabled">
          {{ __('Cancel') }}
        </x-jet-secondary-button>

        <x-jet-danger-button class="ml-2" wire:click="delete({{ $currentRestaurant }})" wire:loading.attr="disabled">
          {{ __('Delete') }}
        </x-jet-danger-button>
      </x-slot>
    </x-jet-confirmation-modal>

    {{-- VIEW MODAL --}}
    <x-jet-dialog-modal wire:model="isModalView">
      <x-slot name="icon">
        <svg class="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </x-slot>
      <x-slot name="title">
        {{ __($currentRestaurant->name) }}
      </x-slot>

      <x-slot name="content">
        <div>
          <div class="font-semibold">Located in: </div>
          <div>{{ $currentRestaurant->city }}</div>
          <div>
            {{ $currentRestaurant->address }}
          </div>
        </div>
        <div class="mt-2">
          <div class="font-semibold">Coordonates: </div>
          <div>
            Latitude: {{ $currentRestaurant->latitude }}
            Longitude: {{ $currentRestaurant->longitude }}
          </div>
        </div>
      </x-slot>

      <x-slot name="footer">
        <x-jet-secondary-button wire:click="closeModal" wire:loading.attr="disabled">
          {{ __('Close') }}
        </x-jet-secondary-button>
      </x-slot>
    </x-jet-dialog-modal>

    {{-- EDIT MODAL --}}
    <x-jet-dialog-modal wire:model="isModalEdit">
      <x-slot name="icon">
        <svg class="w-6 h-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </x-slot>
      <x-slot name="title">
        Edit restaurant
      </x-slot>
      <form wire:submit.prevent="edit" method="POST">
        @csrf
        <x-slot name="content">
          <div class="text-left w-full">
            <div>
              <x-jet-label for="name">Name</x-jet-label>
              <x-jet-input class="w-full" type="text" value="{{ $currentRestaurant->name ?? '' }}" />
              @error('name') <span class="error">{{ $message }}</span> @enderror
            </div>
            <div class="mt-2">
              <x-jet-label for="name">City</x-jet-label>
              <x-jet-input class="w-full" name="city" type="name" type="text"
                value="{{ $currentRestaurant->city ?? '' }}" />
            </div>
            <div class="mt-2">
              <x-jet-label for="name">Address</x-jet-label>
              <x-jet-input class="w-full" name="name" type="text" value="{{ $currentRestaurant->address ?? '' }}" />
            </div>
            <div class="mt-2">
              <x-jet-label for="name">Latitude</x-jet-label>
              <x-jet-input class="w-full" name="name" type="number"
                value="{{ $currentRestaurant->latitude ?? '' }}" />
            </div>
            <div class="mt-2">
              <x-jet-label for="name">Longitude</x-jet-label>
              <x-jet-input class="w-full" name="name" type="number"
                value="{{ $currentRestaurant->longitude ?? '' }}" />
            </div>
          </div>
        </x-slot>

        <x-slot name="footer">
          <x-jet-secondary-button type="cancel" wire:click="closeModal" wire:loading.attr="disabled">
            {{ __('Cancel') }}
          </x-jet-secondary-button>

          <x-jet-button type="submit" class="ml-2" wire:loading.attr=" disabled">
            {{ __('Save') }}
          </x-jet-button>
        </x-slot>
      </form>
    </x-jet-dialog-modal>
  @endif
</div>
