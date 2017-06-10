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
['id'=>101,'name'=>'Amazonas','country_id'=>1,'lat'=>-1.453129,'lng'=>-71.570435],
['id'=>102,'name'=>'Antioquia','country_id'=>1,'lat'=>6.574234,'lng'=>-75.261841],
['id'=>103,'name'=>'Arauca','country_id'=>1,'lat'=>6.641248,'lng'=>-70.957947],
['id'=>104,'name'=>'Atlántico','country_id'=>1,'lat'=>10.538361,'lng'=>-75.054474],
['id'=>105,'name'=>'Cordoba','country_id'=>1,'lat'=>8.299472,'lng'=>-75.80156],
['id'=>106,'name'=>'Bogotá D.C.','country_id'=>1,'lat'=>4.650469,'lng'=>-74.10365],
['id'=>107,'name'=>'Bolivar','country_id'=>1,'lat'=>8.818412,'lng'=>-74.248352],
['id'=>108,'name'=>'Boyacá','country_id'=>1,'lat'=>5.750461,'lng'=>-72.85665],
['id'=>109,'name'=>'Caldas','country_id'=>1,'lat'=>5.322431,'lng'=>-75.274113],
['id'=>110,'name'=>'Caquetá','country_id'=>1,'lat'=>0.733316,'lng'=>-73.960297],
['id'=>111,'name'=>'Casanare','country_id'=>1,'lat'=>5.477931,'lng'=>-71.456311],
['id'=>112,'name'=>'Cauca','country_id'=>1,'lat'=>2.528654,'lng'=>-76.907346],
['id'=>113,'name'=>'Cesar','country_id'=>1,'lat'=>9.302566,'lng'=>-73.563395],
['id'=>114,'name'=>'Chocó','country_id'=>1,'lat'=>6.066983,'lng'=>-76.982358],
['id'=>115,'name'=>'Cundinamarca','country_id'=>1,'lat'=>4.945787,'lng'=>-74.009959],
['id'=>116,'name'=>'Guainía','country_id'=>1,'lat'=>2.691669,'lng'=>-68.727992],
['id'=>117,'name'=>'Guaviare','country_id'=>1,'lat'=>1.972105,'lng'=>-72.150951],
['id'=>118,'name'=>'Huila','country_id'=>1,'lat'=>2.51268,'lng'=>-75.534837],
['id'=>119,'name'=>'La Guajira','country_id'=>1,'lat'=>11.501009,'lng'=>-72.433776],
['id'=>120,'name'=>'Magdalena','country_id'=>1,'lat'=>10.29083,'lng'=>-74.366833],
['id'=>121,'name'=>'Meta','country_id'=>1,'lat'=>3.536468,'lng'=>-72.804837],
['id'=>122,'name'=>'Nariño','country_id'=>1,'lat'=>1.567068,'lng'=>-77.817427],
['id'=>123,'name'=>'Norte de Santander','country_id'=>1,'lat'=>8.09624,'lng'=>-72.943641],
['id'=>124,'name'=>'Putumayo','country_id'=>1,'lat'=>0.50414,'lng'=>-75.769285],
['id'=>125,'name'=>'Quindío','country_id'=>1,'lat'=>4.437354,'lng'=>-75.675441],
['id'=>126,'name'=>'Risaralda','country_id'=>1,'lat'=>4.950547,'lng'=>-75.934904],
['id'=>127,'name'=>'San Andres y Providencia','country_id'=>1,'lat'=>12.547823,'lng'=>-81.719821],
['id'=>128,'name'=>'Santander','country_id'=>1,'lat'=>6.681111,'lng'=>-73.410259],
['id'=>129,'name'=>'Sucre','country_id'=>1,'lat'=>9.157046,'lng'=>-75.11442],
['id'=>130,'name'=>'Tolima','country_id'=>1,'lat'=>3.983598,'lng'=>-75.239176],
['id'=>131,'name'=>'Valle del Cauca','country_id'=>1,'lat'=>3.81294,'lng'=>-76.357066],
['id'=>132,'name'=>'Vaupés','country_id'=>1,'lat'=>0.468462,'lng'=>-70.688684],
['id'=>133,'name'=>'Vichada','country_id'=>1,'lat'=>4.704206,'lng'=>-69.434001],
        ]);
    }
}
