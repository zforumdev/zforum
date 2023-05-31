<x-admin>
    <h1 class="text-4xl font-black">Dashboard</h1>
    <p class="mb-10">
        Tip: you can customise what you see on here in <a href="/admin/settings" class="link">Settings</a>
    </p>

    <div class="space-y-5">
        @foreach(config('admin.panel-dashboard-items') as $item)
            <section>
                @livewire('stats.'.$item)
            </section>
        @endforeach
    </div>
</x-admin>
