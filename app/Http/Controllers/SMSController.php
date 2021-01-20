<?php

namespace App\Http\Controllers;

use App\Models\SMS;
use Carbon\Carbon;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SMSController extends Controller
{
    // for identification type=1
    public function typeOne(Request $request)
    {

        $phone = $request->input('phone');
        $code = $request->input('code');
        $source = $request->input('source');

        $result['success'] = false;
        do {
            if (!$phone) {
                $result['message'] = 'Не передан телефон';
                break;
            }
            if (!$code) {
                $result['message'] = 'Не передан код';
                break;
            }
            if (!$source) {
                $result['message'] = 'Не передан ссылка на сайт';
                break;
            }

            DB::beginTransaction();
            $text = "Код для подтверждения на сайте $source $code";

            $smsID = SMS::insertGetId([
                'type' => 1,
                'text' => $text,
                'phone' => $phone,
                'status' => 100,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);

            if (!$smsID) {
                DB::rollBack();
                $result['message'] = 'Something went wrong';
                break;
            }

            $send = $this->sendSMS($smsID, $phone, $text);
            echo 'send ' . ($send);
            if ($send == true) {
                $result['success'] = true;
            } else {
                break;
            }
            DB::commit();

        } while (false);
        return response()->json($result);

    }

    // для подписа договора
    public function typeTwo(Request $request)
    {
        $phone = $request->input('phone');
        $amount = $request->input('amount');
        $leadID = $request->input('leadID');
        $url = $request->input('url');
        $result['success'] = false;

        do {
            if (!$phone) {
                $result['message'] = 'Не передан телефон';
                break;
            }

            if (!$amount) {
                $result['message'] = 'Не передан сумма';
                break;
            }

            if (!$leadID) {
                $result['message'] = 'Не передан id лида';
                break;
            }

            if (!$url) {
                $result['message'] = 'Не передан ссылка';
                break;
            }

            $text = 'Vam ODOBRENO ' . $amount . ' tg. Dlya polucheniya pereydite ' . $url;
            DB::beginTransaction();
            $smsID = SMS::insertGetId([
                'type' => 2,
                'text' => $text,
                'phone' => $phone,
                'status' => 100,
                'leadID' => $leadID,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);

            if (!$smsID) {
                DB::rollBack();
                $result['message'] = 'Something went wrong!';
                break;
            }
            $send = $this->sendSMS($smsID, $phone, $text);
            if ($send == false) {
                break;
            }
            $result['success'] = true;

            DB::commit();
        } while (false);
        return response()->json($result);

    }

    // льготный период
    public function gracePeriod(Request $request)
    {
        $dealID = $request->input('dealID');
        $type = $request->input('type');
        $phone = $request->input('phone');
        $amount = $request->input('amount');
        $result['success'] = false;

        do {
            if (!$dealID) {
                $result['message'] = 'Не передан ID сделки';
                break;
            }
            if (!$type) {
                $result['message'] = 'Не передан тип льготного периода';
                break;
            }
            if (!$phone) {
                $result['message'] = 'Не передан телефон';
                break;
            }
            if (!$amount) {
                $result['message'] = 'Не передан сумма';
                break;
            }

            if ($type == 5) {
                $text = 'Zavtra Posledniy den LGOTNOGO perioda Oplatite do zavtra' . $amount . 'tg po 0% www.i-credit.kz I mojete snova Vzyat KREDIT no uzhe BOLSHE- vash i-Credit';
            } else if ($type == 6) {
                $text = 'Segodnya Posledniy den LGOTNOGO perioda Oplatite do zavtra' . $amount . 'tg po 0% www.i-credit.kz I mojete snova Vzyat KREDIT no uzhe BOLSHE- vash i-Credit';
            }
            DB::beginTransaction();

            $sms = SMS::insertGetId([
                'type' => $type,
                'status' => 100,
                'phone' => $phone,
                'text' => $text,
                'dealID' => $dealID,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
            if (!$sms) {
                DB::rollBack();
                $result['message'] = 'Something wrong';
                break;
            }
           /* $send = $this->sendSMS($sms, $phone, $text);
            if (!$send) {
                break;
            }*/
            $result['success'] = true;
            DB::commit();
        } while (false);

        return response()->json($result);
    }

    // стандартный период
    public function standardPeriod(Request $request)
    {
        $amount = $request->input('amount');
        $prolongation = $request->input('prolongation');
        $phone = $request->input('phone');
        $dealID = $request->input('dealID');
        $type = $request->input('type');
        $result['success'] = true;

        do {
            if (!$amount) {
                $result['message'] = 'Не передан сумма';
                break;
            }
            if (!$prolongation) {
                $result['message'] = 'Не передан сумма пролонгации';
                break;
            }
            if (!$phone) {
                $result['message'] = 'Не передан телефон';
                break;
            }
            if (!$dealID) {
                $result['message'] = 'Не передан номер сделки';
                break;
            }
            if (!$type) {
                $result['message'] = 'Не передан тип сообщение';
                break;
            }
            if ($type == 7) {
                $text = 'Cherez 3dnya Srok Pogasheniya Kredita Vi moJete prolongirovat Kredit oplativ' . $prolongation . 'tg iLi zakrit ego Polnostu ' . $amount . 'tg';
            } else if ($type == 8) {
                $text = 'Cherez 2dnya Srok Pogasheniya Kredita Vi moJete prolongirovat Kredit oplativ' . $prolongation . 'tg iLi zakrit ego Polnostu ' . $amount . 'tg';
            } else if ($type == 9) {
                $text = 'ZAVTRA Srok Pogasheniya Kredita Vi moJete prolongirovat Kredit oplativ' . $prolongation . 'tg iLi zakrit ego Polnostu ' . $amount . 'tg';
            } else if ($type == 10) {
                $text = 'SEGODYA Srok Pogasheniya Kredita Vi moJete prolongirovat Kredit oplativ' . $prolongation . 'tg iLi zakrit ego Polnostu' . $amount . 'tg';
            }
            DB::beginTransaction();
            $smsID = SMS::insertGetId([
                'status' => 100,
                'type' => $type,
                'text' => $text,
                'dealID' => $dealID,
                'phone' => $phone,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
            if (!$smsID) {
                DB::rollBack();
                $result['message'] = 'Something went wrong';
                break;
            }
            $result['success'] = true;
            DB::commit();

        } while (false);
        return response()->json($result);
    }


    public function softPeriod(Request $request)
    {
        $amount = $request->input('amount');
        $prolongation = $request->input('prolongation');
        $dealID = $request->input('dealID');
        $phone = $request->input('phone');
        $type = $request->input('type');
        $result['success'] = false;
        do {
            if (!$amount) {
                $result['message'] = 'Не передан сумма';
                break;
            }
            if (!$prolongation) {
                $result['message'] = 'Не передан сумма пролонгации';
                break;
            }
            if (!$phone) {
                $result['message'] = 'Не передан телефон';
                break;
            }
            if (!$dealID) {
                $result['message'] = 'Не передан номер сделки';
                break;
            }
            if (!$type) {
                $result['message'] = 'Не передан тип сообщение';
                break;
            }
            if ($type == 11) {
                $text = 'U Vas Prosrichka NO Mi POKA ne Nachislyaem SHTRAF za ' . $prolongation . 'tg Prodlite Srok Kredita oplatite v Qiwi,kassa24 iLi na Site www.i-credit.kz';
            } else if ($type == 12) {
                $text = '2 DEN Prosrochki, Mi POKA ne Nachislyaem SHTRAF za ' . $prolongation . 'tg Prodlite Srok Kredita oplatite v Qiwi,kassa24 iLi na Site www.i-credit.kz';
            } else if ($type == 13) {
                $text = 'Segodnya 3 DEN Prosrochki, Mi POKA ne Nachislyaem SHTRAF za ' . $prolongation . 'tg Prodlite Srok Kredita oplatite v Qiwi,kassa24 iLi na Site www.i-credit.kz';
            } else if ($type == 14) {
                $text = 'Vi Prosrochili svoy Kredit na 4 dnya za ' . $prolongation . ' Prodlite Srok Kredita BEZ Shtrafov I Peni oplatite v Qiwi,kassa24 iLi na Site';
            } else if ($type == 16) {
                $text = 'ZAVTRA mi Peredadim Vas v HARD KOLEKSHEN za ' . $prolongation . 'tg Prodlite Srok Kredita BEZ Shtrafov I Peni oplatite v Qiwi,kassa24 iLi na Site';
            } else if ($type == 17) {
                $text = 'Segodnya mi Peredadim Vas v HARD KOLEKSHEN za '.$prolongation.' Prodlite Srok Kredita BEZ Shtrafov I Peni oplatite v Qiwi,kassa24 iLi na Site';
            }

            DB::beginTransaction();

            $smsID = SMS::insertGetId([
                'status' => 100,
                'type' => $type,
                'text' => $text,
                'dealID' => $dealID,
                'phone' => $phone,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);

            if (!$smsID) {
                DB::rollBack();
                $result['message'] = 'Something went wrong';
                break;
            }
            $result['success'] = true;
            DB::commit();

        } while (false);
        return response()->json($result);

    }

    public function hardPeriod(Request $request){
        $amount = $request->input('amount');
        $prolongation = $request->input('prolongation');
        $dealID = $request->input('dealID');
        $phone = $request->input('phone');
        $type = $request->input('type');

        $result['message'] = false;

        do {
            if (!$amount) {
                $result['message'] = 'Не передан сумма';
                break;
            }
            if (!$prolongation) {
                $result['message'] = 'Не передан сумма пролонгации';
                break;
            }
            if (!$phone) {
                $result['message'] = 'Не передан телефон';
                break;
            }
            if (!$dealID) {
                $result['message'] = 'Не передан номер сделки';
                break;
            }
            if (!$type) {
                $result['message'] = 'Не передан тип сообщение';
                break;
            }
            if ($type == 18){
                $text = 'Vash Dolg Uvelichilsa Vas Peredali KOLLEKTORAM i Nachisslili vse Peni mojete Oplatit v Qiwi,kassa24 iLi na Site www.';
            }

            DB::beginTransaction();

            $smsID = SMS::insertGetId([
                'status' => 100,
                'type' => $type,
                'text' => $text,
                'dealID' => $dealID,
                'phone' => $phone,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);

            if (!$smsID) {
                DB::rollBack();
                $result['message'] = 'Something went wrong';
                break;
            }
            $result['success'] = true;
            DB::commit();

        } while (false);
        return response()->json($result);
    }

    public function sendSMS($smsID, $phone, $text)
    {
        $login = env('SMS_CONSULT_LOGIN');
        $password = env('SMS_CONSULT_PASSWORD');
        $sender = env('SMS_CONSULT_SENDER');
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
            if ($res == 'status=100' || $res == 'status=101' || $res == 'status=102') {
                return true;
            }
        } catch (BadResponseException $e) {
            info($e);
            if ($e->getCode() == 400) {
                info('Something went wrong. Bad request' . $phone);
            } elseif ($e->getCode() == 401) {

                info('Something went wrong. Bad request' . $phone);
            }

        }
    }
}
