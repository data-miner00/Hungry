<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Delicacy;

class DelicaciesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Delicacy::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'type' => 'required',
            'description' => 'required',
            'price' => 'required',
            'avail_start_time' => 'required',
            'avail_end_time' => 'required',
            'waiting_time' => 'required',
            'image' => 'required',
        ]);
        
        return Delicacy::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Delicacy::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $delicacy = Delicacy::find($id);
        $delicacy->update($request->all());
        return $delicacy;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Delicacy::destroy($id);
    }

    /**
     * Search for a product with name.
     *
     * @param  str  $name
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        return Delicacy::where('name', 'like', '%'.$name.'%')->get();
    }
}
