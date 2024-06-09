<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Show;
use Illuminate\Http\Request;



class newsController extends Controller
{
    function getAllNews(){
        $news = News::with('show')->orderByDesc('created_at')->get();
        return response()->json($news,200);
    }

    function addNews(Request $request) {
        
        $title = $request->input('title');
        $content = $request->input('content');

        if (!$title || !$content) {
            return response()->json(['error'=>'title or content is empty'],500);
        }
        
        $news = new News();
        $news->title = $title;
        $news->content=$content;

        if ($request->has('show_id')) {
            if (Show::find($request->input('show_id'))) {
                $news->show_id = $request->input('show_id');
            }else{
                return response()->json(['error'=>'show does not exist '],500);
            }

        }

        if($news->save()){
            return response()->json($news,200);
        }
        
    }

    function getNews($id) {
        $news = News::with('show')->find($id);

        if (!$news) {
            return response()->json(['error' => 'News item not found'], 404);
        }

        return response()->json($news, 200);
   
    }
}
    