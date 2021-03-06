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