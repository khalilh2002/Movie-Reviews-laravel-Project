<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use App\Models\Show;
use App\Models\User;
use Illuminate\Http\Request;

class genreController extends Controller
{
   function addGenre(Request $request) {
        $name = $request->input("name");
        $genre = Genre::where('name',$name)->get();
        if ($genre) {
            return response()->json(['error'=>'genre already Exists']);
        }
        $genre = new Genre();
        $genre->name= $name;
        $genre->save();

        return response()->json(['success'=>'genre saved']);

    } 

    function topGenre($id)  {
        $limit = 4;

        $user = User::find($id);
        if (!$user) {
            return response()->json(['error'=>'user not Exists']);
        }
        $user_id = $id;

        $genres = User::select('genres.name as genre_name')
            ->leftJoin('favorite_shows_lists', 'users.id', '=', 'favorite_shows_lists.user_id')
            ->leftJoin('shows', 'favorite_shows_lists.show_id', '=', 'shows.id')
            ->leftJoin('genres', 'shows.genre_id', '=', 'genres.id')
            ->where('users.id', $user_id)->limit($limit)
            ->get();
            
        return response()->json($genres);
    }

    function filterGenre($id){
        $shows = Show::where('genre_id',$id)->get();
        return response()->json($shows , 200);
    }
}
