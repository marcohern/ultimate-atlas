<?php

namespace App\Exceptions;

use Exception;
use App\Exceptions\UAException;

class NotFoundException extends UAException {
    public function __construct($message, $code = 404, Exception $previous = null) {
        parent::__construct($message, $code, $previous);
    }
}