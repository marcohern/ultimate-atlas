<?php

namespace App\Exceptions;
use Exception;
use App\Exceptions\UAException;

class BadRequestException extends UAException {
    public function __construct($message, $code = 400, Exception $previous = null) {
        parent::__construct($message, $code, $previous);
    }
}