<?php

namespace App\Http\Controllers;

use App\Models\Show;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class showController extends Controller
{
   function getShows() {
        $shows = Show::all();
        if ($shows) {
            return response()->json($shows , 200);
        }
        return response()->json(["message"=>"no show exist"] , 300);
    
   }

   function getShow($id) {
    $show = Show::find($id);
    if ($show) {
        return response()->json($show , 200);
    }
    return response()->json(["message"=>"no show exist"] , 300);

    }

    function addShow(Request $request) {
        
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'poster' => 'nullable|file|mimes:jpeg,png,jpg,gif|max:200048',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $show = new Show();
        $show->title = $request->input("title");
        $show->description = $request->input("description");
        if ($request->has('poster')) {
            $img = $request->file("poster");
            $path = $img->store('show');
            $show->poster_img = $path;
        }
        if($show->save()){
            return response()->json(["success"=>" show added ",'show'=>$show] , 200);
        }

        return response()->json(["message"=>"no show saved "] , 500);
    
        }
}
