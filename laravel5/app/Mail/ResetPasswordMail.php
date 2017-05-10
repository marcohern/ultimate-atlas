<?php

namespace App\Mail;

use App\PasswordReset;
use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ResetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public $title = "Ultimate Atlas";
    public $subject = "Password Recovery";
    public $pr;
    public $user;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(PasswordReset $pr, User $user)
    {
        $this->user = $user;
        $this->pr = $pr;
    }

    public function invite() {
        $this->subject = "Invitation";
        return $this;
    }

    public function createUser() {
        $this->subject = "Set your password.";
        return $this;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.reset-password');
    }
}
