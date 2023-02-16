<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Resources\UserResource;
use App\Models\User;
use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use Illuminate\Http\JsonResponse;

class PassportAuthController extends BaseController
{
    public function authUser(): JsonResponse
    {
        $user = auth()->user();

        return $this->sendResponse(['user' => new UserResource($user)]);
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $payload = $request->validated();

        if (auth()->attempt($payload)) {

            $user = auth()->user();
            $token =  $user->createToken(config('app.name'))->accessToken;

            return $this->sendResponse(['token' => $token, 'user' => new UserResource($user)]);

        } else {
            return $this->sendError("User credentials doesn't match", [], 401);
        }
    }

    public function register(RegisterRequest $request): JsonResponse
    {
        $payload = $request->validated();
        $payload['password'] = bcrypt($payload['password']);

        $user = User::create($payload);
        $token = $user->createToken(config('app.name'))->accessToken;

        return $this->sendResponse(['token' => $token]);
    }

    public function logout(): JsonResponse
    {
        auth()->user()->tokens->each(function ($token) {
            $token->delete();
        });

        return $this->sendResponse([], "User logged out successfully");
    }
}
