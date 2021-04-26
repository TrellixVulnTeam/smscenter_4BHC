<?php

namespace App\Console;

use App\Models\SMS;
use Carbon\Carbon;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;
use http\Exception\BadConversionException;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\HttpClientKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $signature = 'sms:cron';
    protected $description = 'for checking status';
    protected $commands = [
        Commands\CheckStatus::class,
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
        /*    $schedule->call(function (){
                $sql = SMS::where('type','!=',1)->where('status','!=',102)->get();
                foreach ($sql as $s) {
                    $http = new Client();
                    try {
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
                            if (isset($s) && isset($s->dealID)){
                                $status = DB::table('status')->where('dealID',$s->dealID)
                                    ->where('status',100)
                                    ->where('sms_id',$s->id)
                                    ->first();
                                if (!isset($status)){
                                    $statusInsert = DB::table('status')->insertGetId([
                                        'status' => 100,
                                        'dealID' => $s->dealID,
                                        'sms_id' => $s->id,
                                        'created_at' => Carbon::now(),
                                        'updated_at' => Carbon::now(),
                                    ]);
                                    $url = "https://icredit-crm.kz/api/webhock/responseDeal.php?dealID=$s->dealID&status=100";
                                }

                            }else if (isset($s) && isset($s->leadID)){
                                $status = DB::table('status')->where('leadID',$s->leadID)
                                    ->where('status',100)
                                    ->where('sms_id',$s->id)
                                    ->first();
                                if (!isset($status)){
                                    $statusInsert = DB::table('status')->insertGetId([
                                        'status' => 100,
                                        'leadID' => $s->leadID,
                                        'sms_id' => $s->id,
                                        'created_at' => Carbon::now(),
                                        'updated_at' => Carbon::now(),
                                    ]);
                                    $url = "https://icredit-crm.kz/api/webhock/responseLead.php?leadID=$s->leadID&status=100";
                                }
                            }
                            if (isset($url)){

                                file_get_contents($url);
                            }

                        }

                        if ($result == 'status=101'){
                            $update = SMS::where('id',$s->id)->update(['status'=>101,'updated_at'=>Carbon::now()]);

                            if (isset($s) && isset($s->dealID)){
                                $status = DB::table('status')->where('dealID',$s->dealID)
                                    ->where('status',101)
                                    ->where('sms_id',$s->id)
                                    ->first();
                                if (!isset($status)){
                                    $statusInsert = DB::table('status')->insertGetId([
                                        'status' => 101,
                                        'dealID' => $s->dealID,
                                        'sms_id' => $s->id,
                                        'created_at' => Carbon::now(),
                                        'updated_at' => Carbon::now(),
                                    ]);
                                    $url = "https://icredit-crm.kz/api/webhock/responseDeal.php?dealID=$s->dealID&status=101";
                                }
                            }else if (isset($s) && isset($s->leadID)){
                                $status = DB::table('status')->where('leadID',$s->leadID)
                                    ->where('status',101)
                                    ->where('sms_id',$s->id)
                                    ->first();
                                if (!isset($status)){
                                    $statusInsert = DB::table('status')->insertGetId([
                                        'status' => 101,
                                        'leadID' => $s->leadID,
                                        'sms_id' => $s->id,
                                        'created_at' => Carbon::now(),
                                        'updated_at' => Carbon::now(),
                                    ]);
                                    $url = "https://icredit-crm.kz/api/webhock/responseLead.php?leadID=$s->leadID&status=101";
                                }
                            }

                            if (isset($url)){
                                file_get_contents($url);
                            }
                        }

                        if ($result == 'status=102'){
                            $update = SMS::where('id',$s->id)->update(['status'=>102,'updated_at'=>Carbon::now()]);
                            if (isset($s) && isset($s->dealID)){
                                $status = DB::table('status')->where('dealID',$s->dealID)
                                    ->where('status',102)
                                    ->where('sms_id',$s->id)
                                    ->first();
                                if (!isset($status)){
                                    $statusInsert = DB::table('status')->insertGetId([
                                        'status' => 102,
                                        'dealID' => $s->dealID,
                                        'sms_id' => $s->id,
                                        'created_at' => Carbon::now(),
                                        'updated_at' => Carbon::now(),
                                    ]);
                                    $url = "https://icredit-crm.kz/api/webhock/responseDeal.php?dealID=$s->dealID&status=102";
                                }
                            }else if (isset($s) && isset($s->leadID)){
                                $status = DB::table('status')->where('leadID',$s->leadID)
                                    ->where('status',102)
                                    ->where('sms_id',$s->id)
                                    ->first();
                                if (!isset($status)){
                                    $statusInsert = DB::table('status')->insertGetId([
                                        'status' => 102,
                                        'leadID' => $s->leadID,
                                        'sms_id' => $s->id,
                                        'created_at' => Carbon::now(),
                                        'updated_at' => Carbon::now(),
                                    ]);
                                    $url = "https://icredit-crm.kz/api/webhock/responseLead.php?leadID=$s->leadID&status=102";
                                }
                            }

                            if (isset($url)){
                                file_get_contents($url);
                            }
                        }
                    } catch (BadResponseException $e) {
                        info($e);
                    }
                }

            })->everyFiveMinutes();*/

            //$schedule->call(function (){

            $schedule->command('check:status')->everyFiveMinutes();
    }

    public function writeToBase($status,$leadID,$dealID,$smsID){
        if (is_null($dealID)){
            $stat = DB::table('status')->insert([
                'status' => $status,
                'leadID' => $leadID,
                'sms_id' => $smsID
            ]);
        }
        if (is_null($leadID)){
            $stat = DB::table('status')->insert([
                'status' => $status,
                'dealID' => $dealID,
                'sms_id' => $smsID
            ]);
        }
        return true;

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
