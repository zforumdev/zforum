<!doctype html>
<html lang="en" data-theme="admin">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ZForum Admin</title>
    @vite('resources/js/app.js')
    @vite('resources/css/admin.scss')
    <script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/persist@3.x.x/dist/cdn.min.js"></script>
    <script src="https://unpkg.com/alpinejs" defer></script>
    @livewireStyles
</head>
<body>
<div id="admin">
    <x-sidebar>
        <main class="p-5 w-full max-w-5xl mx-auto">
            {!! $slot !!}
        </main>
    </x-sidebar>
</div>

@livewireScripts
</body>
</html>
