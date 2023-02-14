<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\ArrayShape;

class LoginRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    #[ArrayShape(['email' => "string", 'password' => "string"])] public function rules(): array
    {
        return [
            'email' => 'required|string|email|max:191',
            'password' => 'required|string|max:50|min:6'
        ];
    }
}
