<?php

if (! function_exists('acronym')) {
    function acronym($string): string
    {
        $words = explode(' ', $string);
        $acronym = '';

        foreach ($words as $word) {
            $acronym .= $word[0];
        }

        return $acronym;
    }
}

if (! function_exists('firstWord')) {
    function firstWord($string): string
    {
        $string = explode(' ', trim($string));

        return $string[0];
    }
}
