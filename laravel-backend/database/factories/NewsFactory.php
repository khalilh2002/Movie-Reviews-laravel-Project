<?php

namespace Database\Factories;

use App\Models\News;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    
    protected $model = News::class;

    public function definition()
    {
        return [
            'title' => $this->faker->title(),
            'content' => $this->faker->paragraph,
            'publication_date' => $this->faker->date,
        ];
    }
}
