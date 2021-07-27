<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class directorioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('directorios')->insert([
            [
                'nombre' => 'Oscar Sanchez Ramirez',
                'direccion' => 'Nezahualcoyotl, CP: 57300',
                'telefono' => 18278234,
                'foto' => null
            ],
            [
                'nombre' => 'Carlos Sanchez Sanchez',
                'direccion' => 'Queretaro, CP: 605800',
                'telefono' => 45678345,
                'foto' => null
            ],
        ]);
    }
}
