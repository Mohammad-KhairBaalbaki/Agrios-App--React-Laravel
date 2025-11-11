<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use App\Http\Services\ProductService;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
    protected $productService;
    public function __construct(ProductService $productService)
    {
        $this->productService=$productService;
    }
    public function index()
    {
        $products = $this->productService->index();
        return response()->json([
            "message" => "products retrieved successfully",
            "data"=>ProductResource::collection($products)
        ]);
    }
    public function store(StoreProductRequest $request)
    {
        $file = $request->file('image');
        $product = $this->productService->store($request->validated(),$file);
        return response()->json([
            "message"=>"product created successfully",
            "data" =>ProductResource::make($product)
        ]);
    }
    public function update(UpdateProductRequest $request, Product $product)
    {

    }
    public function destroy(Product $product)
    {
        $this->productService->delete($product);
    }
}
