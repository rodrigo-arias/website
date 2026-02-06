<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Revalidation Webhook URL
    |--------------------------------------------------------------------------
    |
    | The URL of the Next.js revalidation endpoint that will be called
    | when content is saved in Statamic to trigger on-demand ISR.
    |
    */

    'webhook_url' => env('REVALIDATE_WEBHOOK_URL'),

    /*
    |--------------------------------------------------------------------------
    | Revalidation Webhook Secret
    |--------------------------------------------------------------------------
    |
    | A secret token used to authenticate revalidation requests. This should
    | match the REVALIDATION_SECRET configured in the Next.js frontend.
    |
    */

    'webhook_secret' => env('REVALIDATE_WEBHOOK_SECRET'),

];
