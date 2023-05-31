<div class="card bg-base-200 p-4">
    <h2 class="text-2xl font-bold">
        <i class="fa-solid fa-comments"></i> Posts
    </h2>

    <span><strong>Total Posts Created:</strong> {{ \App\Models\Post::count() }}</span>
    <span><strong>Total Comments Created:</strong> {{ \App\Models\Comment::count() }}</span>
    <span><strong>Top Posters:</strong></span>
    @foreach($top_posters as $item)
        <p>{{ '@' . $item->username }}: {{ $item->posts->count() }} posts</p>
    @endforeach
</div>
