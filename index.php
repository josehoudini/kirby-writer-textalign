<?php

Kirby::plugin('josehoudini/kirby-writer-textalign', [
    'translations' => [
        'en' => [
            'Align Left' => 'Align Left',
            'Align Center' => 'Align Center',
            'Align Right' => 'Align Right',
        ],
    ],
    'panel' => [
        'js' => 'dist/index.js',
        'css'=> 'dist/index.css'
    ],
]);
