<?php

namespace App\Http\Controllers;

use App\Models\Show;
use App\Models\User;
use Illuminate\Http\Request;

use App\Models\PlanToWatchList;
use App\Models\FavoriteShowsList;
use Illuminate\Support\Facades\Hash;
use PHPUnit\Framework\Constraint\IsEmpty;

class userController extends Controller
{
    
    function getUser($id)
    {
        $userId = $id;
        $user = User::find($userId);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
        return response()->json($user, 200);

    }
    function test($id)  {
        $user = User::find($id);
        $user->sendEmailVerificationNotification();
        return "ok";
    }
    
    
}
