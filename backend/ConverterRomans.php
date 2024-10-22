<?php

declare(strict_types=1);

namespace App\Handler;

class ConverterRomans
{
    private static $romansSymbols = [
        'I' => 1,
        'V' => 5,
        'X' => 10,
        'L' => 50,
        'C' => 100,
        'D' => 500,
        'M' => 1000,
    ];

    public static function romansSymbolsToInteger(string $symbols): int
    {
        if (empty($symbols))
            return 0;

        $result     = 0;
        $prevChar   = 0;
        $i          = 0;

        do {
            $currentChar    = self::$romansSymbols[$symbols[$i]];
            $result         += $currentChar - ($currentChar > $prevChar ? $prevChar * 2 : 0);
            $prevChar       = $currentChar;
            ++$i;
        } while($symbols[$i]);

        return $result;
    }
}