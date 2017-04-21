<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Support\Facades\Log;
use App\Exceptions\UnauthorizedException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        \Illuminate\Auth\AuthenticationException::class,
        \Illuminate\Auth\Access\AuthorizationException::class,
        \Symfony\Component\HttpKernel\Exception\HttpException::class,
        \Illuminate\Database\Eloquent\ModelNotFoundException::class,
        \Illuminate\Session\TokenMismatchException::class,
        \Illuminate\Validation\ValidationException::class,

        \App\Exceptions\UAException::class,
        \App\Exceptions\UnauthorizedException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    private function exceptionToJson(Exception $ex=null) {
        if (!is_null($ex)) {
            $error = [
                'type' => get_class($ex),
                'message' => $ex->getMessage(),
                'code' => $ex->getCode(),
                'inner' => $this->exceptionToJson($ex->getPrevious())
            ];
            //$error['inner'] = $this->exceptionToJson($ex->getPrevious());
            
            return $error;
        }
        return null;
    }

    private function renderJsonError($request, Exception $exception, $includeData=false) {
        $code = (empty($exception->getCode())) ? 400 : 0+$exception->getCode();
        $errCode=0;
        if ($code < 100 || $code > 699) {
            $errCode = $code;
            $code = 400;
        }
        $error = [
            'type' => get_class($exception),
            'message' => $exception->getMessage(),
            'code' => $code,
            'errCode' => $errCode,
            'inner' => $this->exceptionToJson($exception->getPrevious())
        ];
        $req = [
            'url' => $request->fullUrl(),
            'method' => $request->method()
        ];

        if ($includeData) {
            $req['data'] = $request->all();
        }
        return response()->json(['error' => $error, 'request' => $req], $code);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        if ($request->expectsJson()) {
            if ($exception instanceof UnauthorizedException)
                return $this->renderJsonError($request, $exception);

            return $this->renderJsonError($request, $exception, true);
        }
        return parent::render($request, $exception);
    }

    /**
     * Convert an authentication exception into an unauthenticated response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Auth\AuthenticationException  $exception
     * @return \Illuminate\Http\Response
     */
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        if ($request->expectsJson()) {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }

        return redirect()->guest(route('login'));
    }
}
