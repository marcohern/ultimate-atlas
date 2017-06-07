<?php ?>
<div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif">
    <div>
        <h1>{{ $title }}</h1>
        <h2>{{ $subject }}</h2>
    </div>
    <div style="font-size:12px;color:darkgrey;">
        <p>Your account has been activated!</p>
        <p>User: <b>{{$user->username}}</b></p>
        <p>Email: <b>{{$user->email}}</b></p>
        <p>Name: <b>{{$user->fname}} {{$user->lname}}</b></p>
        Click <a href="{{ URL::to('/') }}/ua/login">here</a> to login.
    </div>
</div>