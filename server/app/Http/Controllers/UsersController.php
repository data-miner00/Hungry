<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

use App\Models\User;


class UsersController extends Controller
{
    //

    public function register(Request $request) {
        $fields = $request->validate([
            'fname' => 'required|string',
            'lname' => 'required|string',
            'handle' => 'required|string|min:8|unique:users',
            'email' => 'required|string|unique:users',
            'phone_number' => 'required|string|unique:users',
            'password' => 'required|string|confirmed'
        ]);

        $user = User::create([
            'fname' => $fields['fname'],
            'lname' => $fields['lname'],
            'handle' => $fields['handle'],
            'email' => $fields['email'],
            'phone_number' => $fields['phone_number'],
            'password' => bcrypt($fields['password']),
        ]);

        $token = $user->createToken('myhungrytoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function login(Request $request) {
        $fields = $request->validate([
            'handle' => 'required|string',
            'password' => 'required|string'
        ]);

        $user = User::where('handle', $fields['handle'])->first();

        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Bad credentials'
            ], 401);
        }

        $token = $user->createToken('myhungrytoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function logout(Request $request) {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Logged out'
        ];
    }
}
