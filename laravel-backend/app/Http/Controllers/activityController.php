<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;

class activityController extends Controller
{
    function getActivities($id) {
        $activity = Activity::where("user_id",$id)->get();
        return response()->json(["success"=>" everything is good " , "activities"=>$activity],200);

    }
}