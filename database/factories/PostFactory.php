<?php

namespace Database\Factories;

use App\Models\Subforum;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title' => fake()->words(rand(5, 10), true),
            'body' => collect(fake()->paragraphs(rand(1, 5)))->implode("\n\n"),
            'user_id' => User::all()->random()->id,
            'subforum_id' => Subforum::all()->random()->id
        ];
    }
}
