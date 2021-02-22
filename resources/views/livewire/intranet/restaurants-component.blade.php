<div class="max-w-7xl px-8 mx-auto">
  <h1 class="my-4 text-4xl">Restaurants</h1>
  <table class="w-full flex md:table flex-nowrap md:bg-white overflow-hidden md:shadow-lg my-5">
    <thead class="text-white">
      <tr class="bg-green-500 hidden md:table-row mb-2 md:mb-0">
        <th class="p-3 border-b-2 md:border-none border-green-600 text-left">Name</th>
        <th class="p-3 border-b-2 md:border-none border-green-600 text-left">City</th>
        <th class="p-3 border-b-2 md:border-none border-green-600 text-left"">Phone</th>
        <th class=" p-3 border-b-2 md:border-none border-green-600 text-left">Actions</th>
      </tr>
    </thead>
    <tbody class="">
      @foreach ($restaurants as $restaurant)
        <tr class="flex flex-col md:table-row mb-2 md:mb-0">
          <td class="border-gray-200 border hover:bg-gray-100">
            <div class="flex">
              <div class="grid place-items-center md:hidden w-16 text-white font-semibold bg-green-500 p-3">
                Name
              </div>
              <div class="p-3">
                {{ $restaurant->name }}
              </div>
            </div>
          </td>
          <td class="border-gray-200 border hover:bg-gray-100">
            <div class="flex">
              <div class="grid place-items-center md:hidden w-16 text-white font-semibold bg-green-500 p-3">
                City
              </div>
              <div class="p-3">
                {{ $restaurant->city }}
              </div>
            </div>
          </td>
          <td
            class="border-gray-200 border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
            Delete
          </td>

        </tr>
      @endforeach
    </tbody>
  </table>



  {{ $restaurants->links() }}
</div>
