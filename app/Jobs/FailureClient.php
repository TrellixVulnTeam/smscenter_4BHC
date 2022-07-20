<?php

namespace App\Jobs;

use Carbon\Carbon;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;

class FailureClient implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $data;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $data = $this->data;
        $phone = $data['phone'];
        $text = $data['text'];
        $type = $data['type'];
        $leadID = $data['leadID'];
        $login = 'icredit';
        $password = '7hSBsTvk';
        $sender = 'ICREDIT';
        $smsID = DB::table('sms')->insertGetId([
            'type' => $type,
            'text' => $text,
            'status' => 100,
            'phone' => $phone,
            'leadID' => $leadID,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        $http = new Client(['verify' => false]);
        try {
            $response = $http->get('http://service.sms-consult.kz/get.ashx?', [
                'query' => [
                    'login' => $login,
                    'password' => $password,
                    'id' => $smsID,
                    'type' => 'message',
                    'recipient' => $phone,
                    'sender' => $sender,
                    'text' => $text
                ],
            ]);

            $s = $response->getBody()->getContents();

        } catch (BadResponseException $e) {

            if ($e->getCode() == 400) {
                info('Something went wrong. Bad request' . $phone);
            } elseif ($e->getCode() == 401) {

                info('Something went wrong. Bad request' . $phone);
            }

        }

    }
}
