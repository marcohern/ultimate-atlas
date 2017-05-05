<?php ?>
<div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif">
    <div>
        <h1>{{ $title }}</h1>
        <h2>{{ $subject }}</h2>
    </div>
    <div style="font-size:12px;color:darkgrey;">
        <p>User: <b>{{$user->username}}</b></p>
        <p>Email: <b>{{$user->email}}</b></p>
        <p>Name: <b>{{$user->fname}} {{$user->lname}}</b></p>
        <p>Click on the following link to activate your account.</p>
        <a href="{{ URL::to('/') }}/signup/activate/{{$user->activated_token}}">
            {{ URL::to('/') }}/signup/activate/{{$user->activated_token}}
        </a>
    </div>
</div>