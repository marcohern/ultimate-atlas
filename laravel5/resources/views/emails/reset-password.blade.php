<?php ?>
<div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif">
    <div>
        <h1>{{ $title }}</h1>
        <h2>{{ $subject }}</h2>
    </div>
    <div style="font-size:12px;color:darkgrey;">
        <p>Click on the following to reset your password.</p>
        <p>
            <a href="{{ URL::to('/') }}/reset-password/{{$pr->token}}">
                    {{ URL::to('/') }}/reset-password/{{$pr->token}}
            </a>
        </p>
    </div>
</div>