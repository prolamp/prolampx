<?php

namespace App\Observers;

use App\Models\Software;
use App\Services\SoftwareCatalogService;

class SoftwareObserver
{
    public function saved(Software $software): void
    {
        $this->notify();
    }

    public function deleted(Software $software): void
    {
        $this->notify();
    }

    private function notify(): void
    {
        app(SoftwareCatalogService::class)->flushAll();
    }
}
