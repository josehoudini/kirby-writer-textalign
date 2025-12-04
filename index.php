<?php

use Kirby\Cms\App;

App::plugin('josehoudini/kirby-writer-textalign', [
    'translations' => [
        'en' => [
            'Align Left' => 'Align Left',
            'Align Center' => 'Align Center',
            'Align Right' => 'Align Right',
        ],
    ],
    'assets' => [
        'js' => 'index.js',
        'css' => 'index.css'
    ],
]);
