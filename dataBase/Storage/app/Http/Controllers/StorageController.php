<?php

namespace App\Http\Controllers;
use App\Storage;
use Illuminate\Http\Request;

class StorageController extends Controller
{
    public  function index() {
        return Storage::all() ;
    }

  

    public  function store(Request $request) {
        $request->validate([
            'name'=>'required',
            'note'=>'',
            'price'=>'required',
            'cost'=>'required',
            'count'=>'required',
            'sale_count'=>''

        ]);
        
        $person= Storage::create($request->all());
        return $person;
    }

    public  function show($id) {
        return Storage::findOrFail($id) ;
    }

    public  function update(Request $request , Storage $storage) {
        $request->validate([
            'name'=>'required',
            'note'=>'',
            'price'=>'required',
            'cost'=>'required',
            'count'=>'required'
        ]);
        $storage->update($request->all());
        return $storage ;
    }


    public  function destroy(Storage $storage) {
        $storage->delete();
        return response()->json() ;
    }



}
