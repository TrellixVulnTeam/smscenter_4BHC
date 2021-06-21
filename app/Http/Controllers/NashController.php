<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NashController extends Controller
{
    public function identification(Request $request)
    {
        $phone = $request->input('phone');
        $code = $request->input('code');
        $result['success'] = false;

        do{
            if (!$phone){
                $result['message'] = 'Не передан телефон';
                break;
            }
            if (!$code){
                $result['message'] = 'Не передан код';
                break;
            }
            $text = "Код подтверждение на сайте nashcompany.kz $code";
            DB::beginTransaction();
            $smsID = DB::table('sms')->insertGetId([
                'type' => 50,
                'status' => 100,
                'phone' => $phone,
                'text' => $text,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
            if (!$smsID) {
                DB::rollBack();
                $result['message'] = 'Попробуйте позже';
                break;
            }
            $sendSMS = $this->sendSms($smsID, $phone, $text);
            if (!$sendSMS) {
                DB::rollBack();
                $result['message'] = 'Попробуйте позже';
                break;
            }
            $result['success'] = true;
            DB::commit();


        }while(false);
        return response()->json($result);
    }

    public function nashSign(Request $request)
    {
        $leadID = $request->input('leadID');
        $phone = $request->input('phone]');
        $url = $request->input('url');
        $result['success'] = false;
        do{
            if (!$leadID){
                break;
            }
            if (!$phone){
                break;
            }
            if (!$url){
                break;
            }
            $text = "Dlya podpisanie dogovora proydite po ssilke $url";
            DB::beginTransaction();
            $smsID = DB::table('sms')->insertGetId([
                'type' => 52,
                'status' => 100,
                'phone' => $phone,
                'text' => $text,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
            if (!$smsID) {
                DB::rollBack();
                $result['message'] = 'Попробуйте позже';
                break;
            }
            $sendSMS = $this->sendSms($smsID, $phone, $text);
            if (!$sendSMS) {
                DB::rollBack();
                $result['message'] = 'Попробуйте позже';
                break;
            }

            DB::commit();
            $result['success'] = true;
        }while(false);
        return response()->json($result);
    }

    public function sendSms($smsID,$phone,$text){
        $login = env('SMS_NASH_LOGIN');
        $password = env('SMS_NASH_PASSWORD');
        $sender = env('SMS_NASH_SENDER');
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

            if ($s == 'status=100') {
                return true;
            }

        } catch (BadResponseException $e) {

            if ($e->getCode() == 400) {
                info('Something went wrong. Bad request' . $phone);
            } elseif ($e->getCode() == 401) {

                info('Something went wrong. Bad request' . $phone);
            }
            return false;

        }
        return false;
    }
}
