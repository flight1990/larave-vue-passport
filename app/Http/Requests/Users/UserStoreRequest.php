<?php

namespace App\Http\Requests\Users;

use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\ArrayShape;

class UserStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    #[ArrayShape(['name' => "string", 'email' => "string", 'password' => "string"])] public function rules(): array
    {
        return [
            'name' => 'required|string|max:191',
            'email' => 'required|max:191|email|unique:users,email',
            'password' => 'required|string|max:50|min:6|confirmed'
        ];
    }
}
