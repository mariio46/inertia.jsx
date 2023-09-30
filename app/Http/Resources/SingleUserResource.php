<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SingleUserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'avatar' => $this->avatar(),
            'username' => $this->username,
            'name' => $this->name,
            'email' => $this->email,
            'email_verified' => $this->email_verified_at?->diffForHumans() ?? 'Email not verified',
            'joined' => $this->created_at->diffForHumans(),
            'updated' => $this->updated_at->diffForHumans(),
        ];
    }
}
