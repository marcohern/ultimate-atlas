<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Exceptions\NotFoundException;
use App\Exceptions\BadRequestException;
use App\Lib\In;

class State extends Model
{
    public function search($country_id, $name='',$limit=10,$offset=0) {
        if (empty($country_id)) throw new BadRequestException("Country ID not specified");
        $query = $this->where('country_id',$country_id)->take($limit)->skip($offset);
        if (!empty($name)) $this->where('name','LIKE',"%$name%");
        return $query->get();
    }

    public function view($id) {
        $state = $this->where('id',$id)->first();
        if ($state) return $state;
        throw new NotFoundException("State Not found");
    }

    public function create($data) {
        $id = $this->insertGetId($data);
        $data['created_at'] = In::now();
        return $this->where('id',$id)->first();
    }

    public function modify($id, $data) {
        $state = $this->where('id',$id)->first();
        if ($state) {
            $data['updated_at'] = In::now();
            $this->where('id',$id)->update($data);
            return $this->where('id',$id)->first();
        }
        throw new NotFoundException("State Not found");
    }

    public function erase($id) {
        $state = $this->where('id',$id)->first();
        if ($state) {
            $this->where('id',$id)->delete();
            return $state;
        }
        throw new NotFoundException("State Not found");
    }
}
