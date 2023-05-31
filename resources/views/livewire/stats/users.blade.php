<div class="card bg-base-200 p-4">
    <h2 class="text-2xl font-bold">
        <i class="fa-solid fa-users"></i> Users
    </h2>

    <span><strong>Total Users Registered:</strong> {{ \App\Models\User::count() }}</span>
    <span><strong>Most Recent Users:</strong></span>

    <div class="overflow-x-scroll w-full shadow-xl my-4">
        <table class="table w-full">
            <thead>

            <tr>
                <td>Display Name</td>
                <td>Username</td>
                <td>Register Date</td>
            </tr>

            </thead>
            <tbody>

            @foreach(\App\Models\User::latest()->take(5)->get() as $user)
                <tr>
                    <td>{{ $user->display_name }}</td>
                    <td>{{ $user->username }}</td>
                    <td>{{ $user->created_at }}</td>
                </tr>
            @endforeach

            </tbody>
        </table>
    </div>

    <span><strong>Users Registered This Month:</strong> {{ $this_month }}</span>
    <span><strong>Users Registered Last Month:</strong> {{ $last_month }}</span>
    <span><strong>Users Registered Two Months Ago:</strong> {{ $two_months }}</span>
</div>
