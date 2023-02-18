<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Requests\Users\UserStoreRequest;
use App\Http\Requests\Users\UserUpdateRequest;
use App\Models\User;
use App\Http\Resources\UserResource;
use App\Http\Controllers\Api\BaseController;
use Illuminate\Http\JsonResponse;

class UserController extends BaseController
{
    public function index(): JsonResponse
    {
        $users = User::query()
            ->select('id', 'name', 'email')
            ->get();

        return $this->sendResponse(UserResource::collection($users), 'Users retrived succesfully');
    }

    public function store(UserStoreRequest $request): JsonResponse
    {
        $payload = $request->validated();
        $payload['password'] = bcrypt($payload['password']);

        User::create($payload);

        return $this->sendResponse(null, 'Users created succesfully');
    }

    public function show($id): JsonResponse
    {
        $user = User::query()
            ->select('id', 'name', 'email')
            ->findOrFail($id);

        return $this->sendResponse(new UserResource($user), 'User retrived succesfully');
    }

    public function update(UserUpdateRequest $request, $id): JsonResponse
    {
        $user = User::query()
            ->select('id', 'name', 'email')
            ->findOrFail($id);

        $payload = $request->validated();

        if (!empty($payload['password'])) {
            $payload['password'] = bcrypt($payload['password']);
        } else {
            unset($payload['password']);
        }

        $user->update($payload);

        return $this->sendResponse(null, 'Users updated succesfully');
    }

    public function destroy($id): JsonResponse
    {
        $user = User::query()
            ->select('id', 'name', 'email')
            ->findOrFail($id);

        $user->tokens->each(function ($token) {
            $token->delete();
        });

        $user->delete();

        return $this->sendResponse(null, 'Users deleted succesfully');
    }
}
