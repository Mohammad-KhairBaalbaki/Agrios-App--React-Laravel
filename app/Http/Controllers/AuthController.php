<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Http\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //
    protected $authService;
    public function __construct(AuthService $authService)
    {
        $this->authService=$authService;
    }
    public function signup(SignupRequest $request)
    {
        $user = $this->authService->signup($request->validated());
        return response()->json([
            "message" => "User created successfully",
            "data"=>[
                $user
                // "name" =>$user->name,
                // "email" =>$user->email,
                // "job" =>$user->job,
                // "token"=>$user->access_token
            ]
        ]);
    }
    public function login(LoginRequest $request)
    {
        $user = $this->authService->login($request->validated());
        $user->load('image');
        return response()->json([
            "message" => "User logged in successfully",
            "data"=>[
                $user
                // "name" =>$user->name,
                // "email" =>$user->email,
                // "job" =>$user->job,
                // "token"=>$user->access_token,
                // "image"=>$user->image->url
            ]
        ]);
    }
    public function logout()
    {
        $this->authService->logout();
        return response()->json([
            "message" => "User logged out successfully",
            "data"=>[

            ]
        ]);
    }
}
