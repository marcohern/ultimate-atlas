<?php

namespace App\Exceptions;

use Exception;
use App\Exceptions\UAException;

class ForbiddenException extends UAException {
    public function __construct($message, $code = 403, Exception $previous = null) {
        parent::__construct($message, $code, $previous);
    }
}