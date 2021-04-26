<?php

namespace App\Console\Commands;

use App\Models\SMS;
use Carbon\Carbon;
use GuzzleHttp\Client;
use http\Exception\BadConversionException;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class CheckStatus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:status';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Every five minutes check sms status';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $access = DB::table('access')->where('id',1)->first();

        $sql = SMS::where('status',100)->orWhere('status',101)->get();
        foreach ($sql as $s){
            $http = new Client();
            try {
                $response = $http->get('http://service.sms-consult.kz/get.ashx?', [
                    'query' => [
                        'login' => $access->login,
                        'password' => $access->password,
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
                    $url = "https://icredit-crm.kz/api/webhock/responseDeal.php?dealID=$s->dealID&status_text='$status_text'&text='$s->text'";
                }else if (isset($s) && isset($s->leadID)){
                    $url = "https://icredit-crm.kz/api/webhock/responseLead.php?leadID=$s->leadID&status_text='$status_text'&text='$s->text'";
                }
            } catch (BadConversionException $e) {
                info($e);
            }
        }
    }
}
