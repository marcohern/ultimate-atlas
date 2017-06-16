<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Country extends Model
{
    //
    public function search($name='',$limit=10,$offset=0) {
        $countries = $this->select()->take($limit)->from($offset);
        return $countries->list();
    }

    public function view($id) {
        $country = $this->where('id',$id)->first();
        if ($country) return $country;
        throw new NotFoundException("Country Not found");
    }

    public function create($data) {
        $id = $this->insertGetId($data);
        return $this->where('id',$id)->first();
    }

    public function modify($id, $data) {
        $country = $this->where('id',$id)->first();
        if ($country) {
            $this->where('id',$id)->update($data);
            return $country;
        }
        throw new NotFoundException("Country Not found");
    }

    public function erase($id) {
        $country = $this->where('id',$id)->first();
        if ($country) {
            $this->where('id',$id)->delete();
            return $country;
        }
        throw new NotFoundException("Country Not found");
    }
}
