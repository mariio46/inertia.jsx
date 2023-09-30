<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\SingleUserResource;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::query()
            ->select('id', 'name', 'username', 'email', 'email_verified_at', 'created_at', 'updated_at')
            ->latest()
            ->fastPaginate(10);

        return inertia('users/index', [
            'users' => UserResource::collection($users)->additional([
                'meta' => [
                    'has_pages' => $users->hasPages(),
                ],
            ]),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(User $user)
    {
        // return new SingleUserResource($user);
        return inertia('users/show', [
            'user' => new SingleUserResource($user),
        ]);
    }

    public function edit(User $user)
    {
        //
    }

    public function update(Request $request, User $user)
    {
        //
    }

    public function destroy(User $user)
    {
        $user->delete();

        return to_route('users.index');
    }
}
