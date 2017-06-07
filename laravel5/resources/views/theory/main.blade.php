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
            <h2>Another Section</h2>
            <p>Sop the template had this section, but I'm not sure what to put here...</p>
        </header>
        <div class="flex flex-2">
            <article>
                <div class="image fit">
                    <img src="{{ url('assets/theory/images/pic01.jpg') }}" alt="Valley Road Picture" />
                </div>
                <header>
                    <h3>Cool picture of a Road in a Valley</h3>
                </header>
                <p>It's a really cool picture, maybe I'll leave it here permanently.</p>
                <footer>
                    <a href="#" class="button special">More</a>
                </footer>
            </article>
            <article>
                <div class="image fit">
                    <img src="{{ url('assets/theory/images/pic02.jpg') }}" alt="Guy who took Valley Road Picture" />
                </div>
                <header>
                    <h3>Guy with a Camera</h3>
                </header>
                <p>I'm no Sherlock Holmes, but I would imagine that this individual is the one who took the picture of the Vaalley Road.</p>
                <footer>
                    <a href="#" class="button special">More</a>
                </footer>
            </article>
        </div>
    </div>
</section>

@stop