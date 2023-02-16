<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class BaseController extends Controller
{
    public function sendResponse($result, $message = false): JsonResponse
    {
        $response = [
            'success' => true,
            'data'    => $result,
        ];

        if ($message) $response['message'] = $message;

        return response()->json($response);
    }

    public function sendError($error, $errorMessages = [], $code = 404): JsonResponse
    {
        $response = [
            'success' => false,
            'message' => $error,
        ];

        if(!empty($errorMessages)) $response['data'] = $errorMessages;

        return response()->json($response, $code);
    }
}
