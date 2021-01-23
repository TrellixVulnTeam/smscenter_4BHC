<?php

namespace App\Console;

use App\Models\SMS;
use Carbon\Carbon;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Symfony\Component\HttpKernel\HttpClientKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
    //     $schedule->command('statusSMS')->hourly();
            $schedule->call(function (){
               $sql = SMS::where('type','!=',1)->get();
               foreach ($sql as $s){
                   $http = new Client();
                   try{
                       $response = $http->get('http://service.sms-consult.kz/get.ashx?', [
                           'query' => [
                               'login' => env('SMS_CONSULT_LOGIN'),
                               'password' => env('SMS_CONSULT_PASSWORD'),
                               'id' => $s->id,
                               'type' => 'status',
                           ],
                       ]);
                       $result = $response->getBody()->getContents();
                       if ($result == 'status=100'){
                           $update = SMS::where('id',$s->id)->update(['status'=>100,'updated_at'=>Carbon::now()]);
                           $url = "https://icredit-crm.kz/api/webhock/responseDeal.php?dealID=$s->id&status=100";
                           file_get_contents($url);
                       }
                       if ($result == 'status=101'){
                           $url = "https://icredit-crm.kz/api/webhock/responseDeal.php?dealID=$s->id&status=101";
                           file_get_contents($url);
                           $update = SMS::where('id',$s->id)->update(['status'=>101,'updated_at'=>Carbon::now()]);
                       }
                       if ($result == 'status=102'){
                           $url = "https://icredit-crm.kz/api/webhock/responseDeal.php?dealID=$s->id&status=102";
                           file_get_contents($url);
                           $update = SMS::where('id',$s->id)->update(['status'=>102,'updated_at'=>Carbon::now()]);
                       }
                   }catch (BadResponseException $e){
                       info($e);
                   }



               }

            })->everyFiveMinutes();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
