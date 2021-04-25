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

            $schedule->call(function (){
                $sql = SMS::where('status',100)->where('status',101)->get();
                foreach ($sql as $s){
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
                            $t = 100;
                        }
                        if ($result == 'status=101'){
                            $t = 101;
                        }
                        if ($result == 'status=102'){
                            $t = 102;
                        }
                        if ($result == 'status=103'){
                            $t = 103;
                        }if ($result == 'status=104'){
                            $t = 104;
                        }if ($result == 'status=105'){
                            $t = 105;
                        }if ($result == 'status=106'){
                            $t = 106;
                        }if ($result == 'status=107'){
                            $t = 107;
                        }if ($result == 'status=108'){
                            $t = 108;
                        }if ($result == 'status=109'){
                            $t = 109;
                        }if ($result == 'status=200'){
                            $t = 200;
                        }if ($result == 'status=201'){
                            $t = 201;
                        }
                        if ($result == 'status=202'){
                            $t = 202;
                        }if ($result == 'status=203'){
                            $t = 203;
                        }if ($result == 'status=204'){
                            $t = 204;
                        }
                        if ($result == 'status=205'){
                            $t = 205;
                        }
                        if ($result == 'status=206'){
                            $t = 206;
                        }
                        if ($result == 'status=207'){
                            $t = 207;
                        }
                        $update = SMS::where('id',$s->id)->update(['status' => $t,'updated_at' => Carbon::now()]);
                        $status_text = DB::table('sms_statuses')->select('description')->where('status',$t)->first();
                        if (isset($s) && isset($s->dealID)){
                            $url = "https://icredit-crm.kz/api/webhock/responseDeal.php?dealID=$s->dealID&status_text='$status_text'&text=$s->text";
                        }else if (isset($s) && isset($s->leadID)){
                            $url = "https://icredit-crm.kz/api/webhock/responseLead.php?leadID=$s->leadID&status_text='$status_text'&text=$s->text";
                        }
                    } catch (BadConversionException $e) {
                        info($e);
                    }
                }

            })->everyFiveMinutes();
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
