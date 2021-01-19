<?php

namespace App\Http\Controllers;

use App\Models\SMS;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SMSController extends Controller
{
    // for identification type=1
    public function typeOne(Request $request){

        $phone = $request->input('phone');
        $code = $request->input('code');
        $source = $request->input('source');

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
            if (!$source){
                $result['message'] = 'Не передан ссылка на сайт';
                break;
            }

            DB::beginTransaction();
            $login = env('SMS_CONSULT_LOGIN');
            $password = env('SMS_CONSULT_PASSWORD');
            $sender = env('SMS_CONSULT_SENDER');
            $text = "Код для подтверждения на сайте $source $code";

            $smsID = SMS::insertGetId([
                'type' => 1,
                'text' => $text,
                'phone' => $phone,
                'status' => 100,
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
                $res = $response->getBody()->getContents();
                var_dump($res);
                if ($res == 'status=100' || $res == 'status=101' || $res == 'status=102'){
                    $result['success'] = true;
                }
            } catch (BadResponseException $e) {
                info($e);
                if ($e->getCode() == 400) {

                    info('Something went wrong. Bad request' . $phone);
                } elseif ($e->getCode() == 401) {

                    info('Something went wrong. Bad request' . $phone);
                }

            }
            DB::commit();
//            $result['success'] = true;
        }while(false);
      //  return response()->json($result);

    }


    public function typeTwo(Request $request){

    }
}
