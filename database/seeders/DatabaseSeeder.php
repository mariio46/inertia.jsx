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

        collect(range(1, 100))->each(function ($_) {
            \App\Models\User::factory()->hasPosts(rand(0, 16))->create();
        });
    }
}
