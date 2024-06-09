<?php

/**
 * TODO
 * never forget the Middleware need Token in Header after every request Json 
 * TODO
 * add news with show relation
 */

use App\Http\Controllers\activityController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;
use App\Http\Controllers\securityController;
use App\Http\Controllers\planToWatchController;
use App\Http\Controllers\favoriteShowsListController;
use App\Http\Controllers\genreController;
use App\Http\Controllers\newsController;
use App\Http\Controllers\rateController;
use App\Http\Controllers\showController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


/***********POST*********/
Route::post('/register', [securityController::class, 'register']);
Route::post('/login',[securityController::class,'login']);
Route::post('/logout',[securityController::class,'logout'])->middleware('auth:sanctum');


Route::post('/delete/show/planToWatch/', [planToWatchController::class, 'deleteShowPlanToWatchList'])->middleware('auth:sanctum');
Route::post('/delete/show/favorite/', [favoriteShowsListController::class, 'deleteShowFavoriteList'])->middleware('auth:sanctum');;


Route::post('/rate/show/', [rateController::class, 'updateRate'])->middleware('auth:sanctum');


Route::post('/edit/user/', [userController::class, 'editUser'])->middleware('auth:sanctum');
Route::post('/delete/user/{id}', [userController::class, 'deleteUser'])->middleware('auth:sanctum');


Route::post('/add/news',[newsController::class,'addNews']);

Route::post('/add/show',[showController::class,'addShow']);


/**********GET***************/


Route::get('/favorite/{id}', [favoriteShowsListController::class, 'getFavoriteShowsList']);
Route::get('/planToWatch/{id}', [planToWatchController::class, 'getPlanToWatchList']);



Route::get('/profile/topGenre/{id}',[genreController::class,'topGenre'])->middleware('auth:sanctum');
Route::get('/profile/activity/{id}',[activityController::class,'getActivities'])->middleware('auth:sanctum');


Route::get('/shows/genre/{id}',[genreController::class,'filterGenre']);
Route::get('/shows',[showController::class,'getShows']);
Route::get('/show/{id}',[showController::class,'getShow']);


Route::get('/news/all',[newsController::class,'getAllNews']);
Route::get('/news/{id}',[newsController::class,'getNews']);


Route::get('/admin/users',[userController::class,'getAllUsers']);




// // Email Verification Routes
// Route::get('/email/verify/{id}/{hash}', [securityController::class, 'verifyEmail'])
//     ->middleware(['signed'])
//     ->name('verification.verify');



// Route::post('/email/resend', [securityController::class, 'resendVerificationEmail'])
//     ->middleware(['auth:sanctum', 'throttle:6,1'])
//     ->name('verification.send');

// // Protected Routes (only accessible after email verification)
// Route::middleware(['auth:sanctum', 'verified'])->group(function () {
//     Route::get('/user', function (Request $request) {
//         return $request->user();
//     });
// });




