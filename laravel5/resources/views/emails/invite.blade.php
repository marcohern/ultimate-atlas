<?php ?>
<div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif">
    <div>
        <h1>{{ $title }}</h1>
        <h2>{{ $subject }}</h2>
    </div>
    <div style="font-size:12px;color:darkgrey;">
        <p>Hello, {{$user->fname}}! You have been invited to log into the app! Click the following link:</p>
        <p>
            <a href="{{ URL::to('/') }}/invite/{{$token}}">{{ URL::to('/') }}/invite/{{$token}}</a>
        </p>
    </div>
</div>