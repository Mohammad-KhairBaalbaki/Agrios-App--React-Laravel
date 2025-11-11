<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('/users')->controller(AuthController::class)->group(function(){
    Route::post('/signup','signup');
    Route::post('/login','login');
    Route::get('/logout','logout')->middleware('auth:sanctum');
});

Route::prefix('/products')->controller(ProductController::class)->middleware('auth:sanctum')->group(function(){
    Route::get('/','index');
    Route::post('/','store');
    Route::put('/{product}','update');
    Route::delete('/{product}','destroy');
});
