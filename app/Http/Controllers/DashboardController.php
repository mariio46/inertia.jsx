<?php

namespace App\Http\Controllers;

class DashboardController extends Controller
{
    public function __invoke()
    {
        return inertia('dashboard/index');
    }
}
