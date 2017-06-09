<?php

use Illuminate\Database\Seeder;
use App\Models\State;

class StatesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        State::insert([
// States
['id'=>101,'name'=>'Amazonas','country_id'=>1],
['id'=>102,'name'=>'Antioquia','country_id'=>1],
['id'=>103,'name'=>'Arauca','country_id'=>1],
['id'=>104,'name'=>'Atlántico','country_id'=>1],
['id'=>105,'name'=>'Cordoba','country_id'=>1],
['id'=>106,'name'=>'Bogotá D.C.','country_id'=>1],
['id'=>107,'name'=>'Bolivar','country_id'=>1],
['id'=>108,'name'=>'Boyacá','country_id'=>1],
['id'=>109,'name'=>'Caldas','country_id'=>1],
['id'=>110,'name'=>'Caquetá','country_id'=>1],
['id'=>111,'name'=>'Casanare','country_id'=>1],
['id'=>112,'name'=>'Cauca','country_id'=>1],
['id'=>113,'name'=>'Cesar','country_id'=>1],
['id'=>114,'name'=>'Chocó','country_id'=>1],
['id'=>115,'name'=>'Cundinamarca','country_id'=>1],
['id'=>116,'name'=>'Guainía','country_id'=>1],
['id'=>117,'name'=>'Guaviare','country_id'=>1],
['id'=>118,'name'=>'Huila','country_id'=>1],
['id'=>119,'name'=>'La Guajira','country_id'=>1],
['id'=>120,'name'=>'Magdalena','country_id'=>1],
['id'=>121,'name'=>'Meta','country_id'=>1],
['id'=>122,'name'=>'Nariño','country_id'=>1],
['id'=>123,'name'=>'Norte de Santander','country_id'=>1],
['id'=>124,'name'=>'Putumayo','country_id'=>1],
['id'=>125,'name'=>'Quindío','country_id'=>1],
['id'=>126,'name'=>'Risaralda','country_id'=>1],
['id'=>127,'name'=>'San Andres y Providencia','country_id'=>1],
['id'=>128,'name'=>'Santander','country_id'=>1],
['id'=>129,'name'=>'Sucre','country_id'=>1],
['id'=>130,'name'=>'Tolima','country_id'=>1],
['id'=>131,'name'=>'Valle del Cauca','country_id'=>1],
['id'=>132,'name'=>'Vaupés','country_id'=>1],
['id'=>133,'name'=>'Vichada','country_id'=>1],
        ]);
    }
}
