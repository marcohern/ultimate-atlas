<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

use App\Exceptions\NotFoundException;
use App\Lib\In;

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
        $data['created_at'] = In::now();
        $id = $this->insertGetId($data);
        return $this->where('id',$id)->first();
    }

    public function modify($id, $data) {
        $country = $this->select('id')->where('id',$id)->first();
        if ($country) {
            $data['updated_at'] = In::now();
            $this->where('id',$id)->update($data);
            return $this->where('id',$id)->first();
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
