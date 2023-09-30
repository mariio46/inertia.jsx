<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Mario',
            'username' => 'mario46_',
            'email' => 'mariomad2296@gmail.com',
        ]);

        User::factory(10)->create();
    }
}
