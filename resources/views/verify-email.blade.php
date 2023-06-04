<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Verify Email - {{ env('APP_NAME') }}</title>
    @vite('resources/css/app.scss')
</head>
<body>

<main class="mx-auto flex items-center justify-center min-h-[100dvh]">
    <div class="card bg-base-300 p-4 text-center">
        <h1 class="text-2xl font-bold">Your email has been successfully verified!</h1>
        <h2>Your email has been verified, welcome to ZForum.</h2>

        <a href="/" class="btn btn-primary mt-10">Take me home</a>
    </div>
</main>

</body>
</html>
