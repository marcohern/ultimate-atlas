@extends('theory.layout.theory')

@section('body')
<!-- One -->
<section id="one" class="wrapper">
    <div class="inner">
        <div class="flex flex-3">
            <article>
                <header>
                    <h3>Performance <br/> and Speed</h3>
                </header>
                <p>
                    {{config('app.name')}} is being developed with performance in mind.
                    It is a modular single page application that runs on the client side.
                </p>
                <footer>
                    <a href="#" class="button special">More</a>
                </footer>
            </article>
            <article>
                <header>
                    <h3>Security<br /> and Privacy</h3>
                </header>
                <p>{{config('app.name')}} is designed to be secure.</p>
                <footer>
                    <a href="#" class="button special">More</a>
                </footer>
            </article>
            <article>
                <header>
                    <h3>Simplicity<br />and Reliabilty</h3>
                </header>
                <p>{{config('app.name')}} relies on and compliments a stable platform on which it is being developed.</p>
                <footer>
                    <a href="#" class="button special">More</a>
                </footer>
            </article>
        </div>
    </div>
</section>

<!-- Two -->
<section id="two" class="wrapper style1 special">
    <div class="inner">
        <header>
            <h2>Our Team</h2>
            <p>The usual code-producing machines that run on coffe and pizza.</p>
        </header>
        <div class="flex flex-4">
            <div class="box person">
                <div class="image round">
                    <img src="{{ url('assets/theory/team/marco.jpg') }}" alt="Regular Marco" />
                </div>
                <h3>Regular Marco</h3>
                <p>Web, Full-Stack</p>
            </div>
            <div class="box person">
                <div class="image round">
                    <img src="{{ url('assets/theory/team/viking_marco.jpg') }}" alt="Viking Marco" />
                </div>
                <h3>Viking Marco</h3>
                <p>Front-End, Back-End</p>
            </div>
            <div class="box person">
                <div class="image round">
                    <img src="{{ url('assets/theory/team/serius_marco.jpg') }}" alt="Serius Marco" />
                </div>
                <h3>Serius Marco</h3>
                <p>DBA MySQL</p>
            </div>
            <div class="box person">
                <div class="image round">
                    <img src="{{ url('assets/theory/team/cool_marco.jpg') }}" alt="Cool Marco" />
                </div>
                <h3>Cool Marco</h3>
                <p>Javascript, Angular2</p>
            </div>
        </div>
    </div>
</section>

<!-- Three -->
<section id="three" class="wrapper special">
    <div class="inner">
        <header class="align-center">
            <h2>Nunc Dignissim</h2>
            <p>Aliquam erat volutpat nam dui </p>
        </header>
        <div class="flex flex-2">
            <article>
                <div class="image fit">
                    <img src="{{ url('assets/theory/images/pic01.jpg') }}" alt="Pic 01" />
                </div>
                <header>
                    <h3>Praesent placerat magna</h3>
                </header>
                <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor lorem ipsum.</p>
                <footer>
                    <a href="#" class="button special">More</a>
                </footer>
            </article>
            <article>
                <div class="image fit">
                    <img src="{{ url('assets/theory/images/pic02.jpg') }}" alt="Pic 02" />
                </div>
                <header>
                    <h3>Fusce pellentesque tempus</h3>
                </header>
                <p>Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna non comodo sodales tempus.</p>
                <footer>
                    <a href="#" class="button special">More</a>
                </footer>
            </article>
        </div>
    </div>
</section>

@stop