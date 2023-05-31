<?php

use App\Models\Role;
use App\Models\Subforum;
use App\Models\User;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('zforum:make-config', function () {
    $this->info('Generating the config file...');

    $config = [
        'name' => env('APP_NAME'),
        'description' => env('APP_DESCRIPTION'),
        'url' => env('APP_URL'),
        'image' => env('APP_META_IMAGE')
    ];

    $this->info('Printing config to file (edit .env file and rerun this command to regenerate config)');

    file_put_contents(__DIR__ . '/../resources/js/appConfig.json', json_encode($config));

    $this->info('Config file generated');
})->purpose('Generate the appConfig.json file');

Artisan::command('zforum:admin {--remove : Remove admin from a user} {username}', function (string $username) {
    if (!$user = User::where('username', $username)->first()) {
        $this->error('User \'' . $username . '\' could not be found. Did you make a typo?');
        return 1;
    }

    if ($this->option('remove')) {
        $this->info('Removing \'' . $user->username . '\' as an admin');
        $user->admin = false;
        $user->update();

        return 0;
    }

    $this->info('Adding \'' . $user->username . '\' as an admin');
    $user->admin = true;
    $user->update();

    return 0;
})->purpose('Make a user admin by their username');

Artisan::command('zforum:make-default-roles {--all : Generate all default roles (only user role by default)} {--no-confirm : Do not ask for confirmation}', function () {
    $this->warn('This will delete all roles and refill with the default ones.');
    if (!$this->option('no-confirm') && !$this->confirm('Are you sure you want to do this?')) {
        return 1;
    }

    $this->info('Deleting rows...');
    Role::truncate();

    $this->info('Adding \'user\' role');
    Role::create([
        'name' => 'user',
        'can_create_posts' => true,
        'can_delete_posts' => false,
        'can_update_posts' => false,
        'can_create_comments' => true,
        'can_ban_users' => false,
        'can_delete_users' => false,
        'can_send_messages' => true,
        'can_report_content' => true,
        'can_view_reports' => false
    ]);

    $this->info('Adding \'resstricted user\' role');
    Role::create([
        'name' => 'restricted user',
        'can_create_posts' => false,
        'can_delete_posts' => false,
        'can_update_posts' => false,
        'can_create_comments' => true,
        'can_ban_users' => false,
        'can_delete_users' => false,
        'can_send_messages' => false,
        'can_report_content' => true,
        'can_view_reports' => false
    ]);

    if ($this->option('all')) {
        $this->info('Adding \'post moderator\' role');
        Role::create([
            'name' => 'post moderator',
            'can_create_posts' => true,
            'can_delete_posts' => true,
            'can_update_posts' => false,
            'can_create_comments' => true,
            'can_ban_users' => false,
            'can_delete_users' => false,
            'can_send_messages' => true,
            'can_report_content' => true,
            'can_view_reports' => true
        ]);

        $this->info('Adding \'trusted moderator\' role');
        Role::create([
            'name' => 'trusted moderator',
            'can_create_posts' => true,
            'can_delete_posts' => true,
            'can_update_posts' => false,
            'can_create_comments' => true,
            'can_ban_users' => true,
            'can_delete_users' => false,
            'can_send_messages' => true,
            'can_report_content' => true,
            'can_view_reports' => true
        ]);

        $this->info('Adding \'super moderator\' role');
        Role::create([
            'name' => 'super moderator',
            'can_create_posts' => true,
            'can_delete_posts' => true,
            'can_update_posts' => true,
            'can_create_comments' => true,
            'can_ban_users' => true,
            'can_delete_users' => true,
            'can_send_messages' => true,
            'can_report_content' => true,
            'can_view_reports' => true
        ]);
    }

    $this->info('Done!');

    return 0;
})->purpose('Create the default roles');

Artisan::command('zforum:create-subforum {name : Name of the subforum} {slug : Slug for the subforum, should be based on name (example: my-subforum)} {desc : The description of the subforum (what is it about?)} {rules? : Rules for the subforum (can have newlines)}', function () {
    Subforum::create([
        'name' => $this->argument('name'),
        'slug' => $this->argument('slug'),
        'description' => $this->argument('desc'),
        'rules' => $this->argument('rules')
    ]);
})->purpose('Add a subforum');
