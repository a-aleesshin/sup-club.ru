<?php

declare(strict_types=1);

include 'ConverterRomans.php';
use App\Handler\ConverterRomans;

$string = 'CXCV';
echo ConverterRomans::romansSymbolsToInteger($string) . PHP_EOL;
