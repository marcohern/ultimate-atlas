<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Exceptions\ForbiddenException;
use App\Exceptions\NotFoundException;
use App\Models\Token;

class Secure
{
    private $token;

    public function __construct(Token $token) {
        $this->token = $token;
    }
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $r, Closure $next)
    {
        try {
            $tok = $r->header('Token');
            $t = $this->token->getToken($tok);
            return $next($r);
        } catch (NotFoundException $ex) {
            throw new ForbiddenException("The user is forbidden to execute this action.");
        }
    }
}
