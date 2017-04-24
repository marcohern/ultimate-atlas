<?php

namespace App\Http\Middleware;

use Closure;
use App\Exceptions\ForbiddenException;
use App\Token;

class Secure
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($r, Closure $next)
    {
        $token = $r->header('Token');
        if (empty($token)) throw new ForbiddenException("The user is forbidden to execute this action.");
        else {
            $t = Token::where('token',$token)->first();
            if (!$t) throw new ForbiddenException("Invalid token.");
        }
        return $next($r);
    }
}
