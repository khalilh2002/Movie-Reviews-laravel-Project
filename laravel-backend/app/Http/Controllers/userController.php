<?php

namespace App\Http\Controllers;

use App\Models\Show;
use App\Models\User;
use Illuminate\Http\Request;

use App\Models\PlanToWatchList;
use App\Models\FavoriteShowsList;
use Hamcrest\Text\IsEmptyString;
use Illuminate\Support\Facades\Hash;
use PHPUnit\Framework\Constraint\IsEmpty;

use function PHPUnit\Framework\isEmpty;

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
    
    function editUser(Request $request){

        $user = User::find($request->input('id'));
        $user->name = $request->input('name');
        $user->email = $request->input('email');

        //return response()->json($request);

        if ( $request->hasFile('profile')) {
            $profile = $request->file('profile');
            
            if ($profile->isValid() ) {
               $path = $profile->store('profile');
               $user->profile_picture = $path;
            }

        }

        if ($request->hasFile('cover')) {
            $cover = $request->file('cover');
            
            if ($cover->isValid()) {
               $path = $cover->store('cover');
               $user->cover_picture = $path;
            }

        }

        if($user->save()){
            return response()->json(['user'=>$user,'success' => 'user saved'], 200);
        }

        return response()->json(['error' => 'user not saved'], 500);

    }
    
    
    
    function test($id)  {
        $user = User::find($id);
        $user->sendEmailVerificationNotification();
        return "ok";
    }
    
    
}
