<?php

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
