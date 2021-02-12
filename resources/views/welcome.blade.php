<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Laravel</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">

</head>

<body class="antialiased">
  <div class="flex min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="fixed top-0 right-0 py-4 px-6 sm:block">
      <div>
        @auth
          <a class="font-semibold text-white bg-red-400 shadow rounded-full px-4 py-2"
            href="{{ route('dashboard') }}">Dashboard</a>
        @else
          <a class="font-semibold text-white bg-red-400 shadow rounded-full px-4 py-2" href="{{ route('login') }}">Log
            in</a>
          @if (Route::has('register'))
          @endif
        @endauth
      </div>
    </div>

    <div class="w-full max-w-6xl px-6">
      <div class="flex items-center space-x-2 text-3xl font-bold font-sans pt-8 sm:justify-start sm:pt-0">
      </div>
      <div class="mt-8 dark:bg-gray-800 overflow-hidden">
        @guest
          <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 underline">Order now</a>
        @else
          <a href="{{ route('dashboard') }}" class="ml-4 text-sm text-gray-700 underline">Order now</a>
        @endguest
      </div>
    </div>
  </div>
</body>

</html>
