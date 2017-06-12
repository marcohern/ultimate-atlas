<?php

interface ITabulator {
    function start();
    function write(array $row);
    function end();
}