<?php

namespace App\Http\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function signup(array $data)
    {
        $user = User::create($data);
        $user->access_token = $user->createToken('auth_token')->plainTextToken;
        return $user;
    }
    public function login(array $data)
    {
        if(Auth::attempt([
            "email" => $data["email"],
            "password" => $data["password"]
            ])){
                $user = User::find(Auth::id());
                $user->access_token = $user->createToken("auth_token")->plainTextToken;
                return $user;
            }
            return 'null';
    }
    public function logout()
    {
        Auth::user()->currentAccessToken()->delete();
    }
}
