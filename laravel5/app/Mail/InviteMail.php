<?php

namespace App\Mail;

use App\PasswordReset;
use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class InviteMail extends Mailable
{
    use Queueable, SerializesModels;

    public $title = 'Ultimate Atlas';
    public $subject = 'Invitation';
    public $user;
    public $pr;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user, PasswordReset $pr)
    {
        $this->user = $user;
        $this->pr = $pr;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.invite');
    }
}
