<?php

use Illuminate\Database\Seeder;
use App\Daily\DailyCat;

class DailyCategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DailyCat::insert([
            //Categories
['name' => 'Bus/Metro', 'hypercat' => 'TRANSPORT','created_at'=>new \Datetime()],
['name' => 'Café', 'hypercat' => 'FOOD','created_at'=>new \Datetime()],
['name' => 'Dispensador', 'hypercat' => 'FOOD','created_at'=>new \Datetime()],
['name' => 'Desayuno', 'hypercat' => 'FOOD','created_at'=>new \Datetime()],
['name' => 'Pos-Desayuno', 'hypercat' => 'FOOD','created_at'=>new \Datetime()],
['name' => 'Almuerzo', 'hypercat' => 'FOOD','created_at'=>new \Datetime()],
['name' => 'Pos-Almuerzo', 'hypercat' => 'FOOD','created_at'=>new \Datetime()],
['name' => 'Comida', 'hypercat' => 'FOOD','created_at'=>new \Datetime()],
['name' => 'Pos-Comida', 'hypercat' => 'FOOD','created_at'=>new \Datetime()],
['name' => 'Compras Almacen', 'hypercat' => 'PURCHASES','created_at'=>new \Datetime()],
['name' => 'Trago + Comida', 'hypercat' => 'SORTIE','created_at'=>new \Datetime()],
['name' => 'Cover', 'hypercat' => 'OTHER','created_at'=>new \Datetime()],
['name' => 'Cine', 'hypercat' => 'OTHER','created_at'=>new \Datetime()],
['name' => 'Limosna', 'hypercat' => 'OTHER','created_at'=>new \Datetime()],
['name' => 'Monedas', 'hypercat' => 'OTHER','created_at'=>new \Datetime()],
['name' => 'Regalo', 'hypercat' => 'PURCHASES','created_at'=>new \Datetime()],
['name' => 'Aseo', 'hypercat' => 'OTHER','created_at'=>new \Datetime()],
['name' => 'Postre', 'hypercat' => 'FOOD','created_at'=>new \Datetime()],
['name' => 'Taxi', 'hypercat' => 'TRANSPORT','created_at'=>new \Datetime()],
['name' => 'Uber', 'hypercat' => 'TRANSPORT','created_at'=>new \Datetime()],
['name' => 'Copias de Llaves', 'hypercat' => 'PURCHASES','created_at'=>new \Datetime()],
['name' => 'Sortie', 'hypercat' => 'SORTIE','created_at'=>new \Datetime()],
['name' => 'Helado', 'hypercat' => 'FOOD','created_at'=>new \Datetime()],
['name' => 'Retiro Cajero', 'hypercat' => 'OTHER','created_at'=>new \Datetime()],
['name' => 'Pago Movil', 'hypercat' => 'PURCHASES','created_at'=>new \Datetime()],
['name' => 'Donación', 'hypercat' => 'OTHER','created_at'=>new \Datetime()],
['name' => 'Cerveza', 'hypercat' => 'SORTIE','created_at'=>new \Datetime()],
['name' => 'Pestramo', 'hypercat' => 'OTHER','created_at'=>new \Datetime()],
['name' => 'Arriendo', 'hypercat' => 'OTHER','created_at'=>new \Datetime()],
['name' => 'Sueldo', 'hypercat' => 'OTHER','created_at'=>new \Datetime()],
['name' => 'Pago Citibank', 'hypercat' => 'OTHER','created_at'=>new \Datetime()],
['name' => 'Papeleria', 'hypercat' => 'OTHER','created_at'=>new \Datetime()],
['name' => 'Notaria', 'hypercat' => 'OTHER','created_at'=>new \Datetime()],
['name' => 'Cerveza', 'hypercat' => 'OTHER','created_at'=>new \Datetime()]
        ]);
    }
}
