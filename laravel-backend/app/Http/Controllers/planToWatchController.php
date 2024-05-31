<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\PlanToWatchList;
use App\Models\Show;
use Illuminate\Http\Request;

class planToWatchController extends Controller
{
    function getPlanToWatchList($id){
        $userId = $id;
        $user = User::find($userId);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }


        $list = $this->ORM_planToWatch_List_User($userId);
        return response()->json($list);
    }

    function deleteShowPlanToWatchList(Request $request){

        $userId = $request->input('user_id');
        $showId = $request->input('show_id');

        $user = User::find($userId);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $show = Show::find($showId);
        if (!$show) {
            return response()->json(['error' => 'Show not found'], 404);
        }

        $list = $this->ORM_planToWatch_One_User_Show($userId , $showId);
        if (count($list)==0) {
            return response()->json(['error' => 'Show is not in the list'], 400);
        }

        if ( $list[0]->delete() ){
            return response()->json(['success' => 'show has been removed'], 200);
        }
        response()->json(['error' => 'problem in delete'], 205);
        
        

    }


     /**
     * return one show in plan to watch list of a user
     */
    function ORM_planToWatch_One_User_Show($userId , $showId) {

        $list = PlanToWatchList::where('user_id', $userId)
        ->where('show_id',$showId)
        ->limit(1)
        ->get();
        
        return $list;
    }



    /**
     * return all shows in plan to watch list of a user
     */
    function ORM_planToWatch_List_User($userId) {

        $list = PlanToWatchList::where('user_id', $userId)
        ->with(['show' , 'show.genre'])
        ->get()
        ->pluck('show');

        return $list;
    }
}
