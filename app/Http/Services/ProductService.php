<?php

namespace App\Http\Services;

use App\Models\Product;

class ProductService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }


    public function index()
    {
        $products = Product::with('image')->get();
        return $products;
    }
    public function store(array $data,$image)
    {
        $product = Product::create($data);
        if(isset($image)){
            $path = $image->store('products', 'public');
            $product->image()->create(['url' => $path]);
        }
        return $product->load('image');
    }
    public function update(array $data,Product $product)
    {

    }
    public function delete(Product $product)
    {
        $product->delete();
    }
}
