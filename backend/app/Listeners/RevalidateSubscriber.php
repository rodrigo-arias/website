<?php

namespace App\Listeners;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Statamic\Events\EntrySaved;
use Statamic\Events\EntryDeleted;
use Statamic\Events\GlobalVariablesSaved;
use Statamic\Facades\CP\Toast;

class RevalidateSubscriber
{
    protected array $listeners = [
        EntrySaved::class => 'handle',
        EntryDeleted::class => 'handle',
        GlobalVariablesSaved::class => 'handle',
    ];

    public function handle(): void
    {
        $url = config('revalidation.webhook_url');
        $secret = config('revalidation.webhook_secret');

        if (! $url || ! $secret) {
            return;
        }

        try {
            $response = Http::timeout(5)->post($url, ['secret' => $secret]);

            if ($response->successful()) {
                Toast::success('Site cache refreshed');
            } else {
                Toast::error('Cache refresh failed: '.$response->status());
                Log::warning('Revalidation webhook failed with status: '.$response->status());
            }
        } catch (\Throwable $e) {
            Toast::error('Cache refresh failed');
            Log::warning('Revalidation webhook failed: '.$e->getMessage());
        }
    }

    public function subscribe($events): void
    {
        foreach ($this->listeners as $event => $method) {
            $events->listen($event, [static::class, $method]);
        }
    }
}
