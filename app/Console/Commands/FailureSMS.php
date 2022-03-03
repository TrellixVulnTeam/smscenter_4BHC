<?php

namespace App\Console\Commands;

use App\Http\Controllers\SMSController;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class FailureSMS extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'failure:sms';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'failure sms every 20 minutes';

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
        $sql = DB::table('failure')
            ->whereTime('created_at','>',Carbon::now()->subHours(1))
            ->where('status',1)->get();
        $send = new SMSController();
        $text = 'K sozhaleniju u Vas otkaz, no Vas zhdjot 100% odobrenie u nashih partnjorov https://oformitzaymvkz.com/';
        foreach ($sql as $s){
            $smsID = DB::table('sms')->insertGetId([
                'type' => 52,
                'status' => 100,
                'phone' => $s->phone,
                'text' => $text,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
            $send->sendSMS($smsID,$s->phone,$text);
            DB::table('failure')->where('id',$s->id)->update(['status' => 2]);
        }
        return true;
    }
}
