<?php

namespace App\Enums;

enum AccessTier: string
{
    case Public = 'public';
    case Subscription = 'subscription';
}
