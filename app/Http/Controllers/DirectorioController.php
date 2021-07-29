<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateDirectorioRequest;
use App\Http\Requests\UpdateDirectorioRequest;
use Illuminate\Http\Request;
use App\Models\Directorio;
use PhpParser\Node\Scalar\MagicConst\Dir;
use Symfony\Component\Console\Input\Input;

class DirectorioController extends Controller
{

    public function index(Request $request)
    {
        if ($request->has('txtBuscar')) {

            $directorios = Directorio::where('nombre', 'like', '%' . $request->txtBuscar . '%')
                ->orWhere('telefono',  $request->txtBuscar)->get();
        } else {

            $directorios = Directorio::all();
        }

        return $directorios;
    }

    public function cargarArchivo($file)
    {

        $nombreArchivo = time() . "." . $file->getClientOriginalExtension();
        $file->move(public_path('fotografias'), $nombreArchivo);
        return $nombreArchivo;
    }

    public function foto(Request $request)
    {
        if ($request->hasFile('foto')) {

            $file = $request->file('foto');
            $nombreArchivo = time() . "." . $file->getClientOriginalExtension();
            $file->move(public_path('fotografias'), $nombreArchivo);
            return response()->json([
                'res' => true,
                'message' => $nombreArchivo
            ], 200);
        } else {
            return response()->json([
                'res' => false,
                'message' => $request
            ], 200);
        }
    }


    public function store(CreateDirectorioRequest $request)
    {
        $input = $request->all();
        if ($request->has('foto'))
            $input['foto'] = $this->cargarArchivo($request->foto);

        Directorio::create($input);
        return response()->json([
            'res' => true,
            'message' => 'Registro creado correctamente'
        ], 200);
    }


    public function show(Directorio $directorio)
    {
        return $directorio;
    }


    public function update(UpdateDirectorioRequest $request, Directorio $directorio)
    {
        $input = $request->all();
        if ($request->has('foto'))
            $input['foto'] = $this->cargarArchivo($request->foto);

        $directorio->update($input);
        return response()->json([
            'res' => true,
            'message' => 'Registro actualizado correctamente'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        // Directorio::destroy($id);
        $directorios = Directorio::find($id);
        unlink(public_path().'/fotografias/'.$directorios->foto);
        $directorios->delete();
        return response()->json([
            'res' => true,
            'message' => 'Registro eliminado correctamente'
        ], 200);
    }
}
