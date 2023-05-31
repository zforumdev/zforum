<div class="drawer drawer-mobile">
    <input id="sidebar" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content py-10">
        {!! $slot !!}
        <label for="sidebar" class="btn btn-primary drawer-button lg:hidden fixed top-2 right-2"><i class="fa-solid fa-bars"></i></label>

    </div>
    <div class="drawer-side">
        <label for="sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 w-90 max-w-[90vw] bg-slate-800 text-slate-300" id="sidebar-list">
            <li>
                <div class="flex flex-col">
                    <h2 class="text-2xl font-black">ZForum Admin Panel</h2>
                    <p>signed in as <strong>{{ Auth::user()->username }}</strong></p>
                </div>
            </li>
            <li><a href="/admin"><i class="fa-solid fa-table"></i> Dashboard</a></li>
            <li><a href="/admin/users"><i class="fa-solid fa-users"></i> Users</a></li>
            <li><a href="/admin/posts"><i class="fa-solid fa-comments"></i> Posts</a></li>
            <li><a href="/admin/subforums"><i class="fa-solid fa-list"></i> Subforums</a></li>
            <li><a href="/admin/reports"><i class="fa-solid fa-flag"></i> Reports</a></li>
            <li><a href="/admin/settings"><i class="fa-solid fa-gear"></i> Settings</a></li>
        </ul>
    </div>
</div>
