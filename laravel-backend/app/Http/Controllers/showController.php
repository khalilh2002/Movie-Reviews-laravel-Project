<?php

namespace App\Http\Controllers;

use App\Models\Show;
use App\Models\User;
use Illuminate\Http\Request;

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
}
