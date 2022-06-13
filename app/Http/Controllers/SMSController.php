<?php

namespace App\Http\Controllers;

use App\Models\SMS;
use App\Models\User;
use Carbon\Carbon;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;
use http\Exception\BadConversionException;
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
            $first = DB::table('sms')->where('type', 2)->where('leadID', $leadID)->first();
            if (isset($first)) {
                $result['message'] = 'Уже отправлено смс';
                break;
            }
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


    // отказ клиенту
    public function failureClient(Request $request)
    {
        //leadgid - https://kaz-zaem.online/
        //upsala - https://bistriedengi.kz/index.php?adname=hpnlx
        $phone = $request->input('phone');
        $leadID = $request->input('leadID');

        $text = 'Вам ОДОБРЕНО 150 тысяч тенге https://bit.ly/3yXD1xH';
        $type = 3;
        $result['success'] = false;

        do {
            if (!$phone) {
                $result['message'] = 'Не передан телефон';
                break;
            }

            if (!$leadID) {
                $result['message'] = 'Не передан лид ';
            }

            $check = SMS::where('leadID', $leadID)->where('phone', $phone)->first();
            if (isset($check)) {
                break;
            }

            DB::beginTransaction();

            $smsID = SMS::insertGetId([
                'type' => $type,
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
            $s = DB::table('failure')->insertGetId([
                'phone' => $phone,
                'status' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);

            if ($send == false) {
                $result['message'] = 'Send SMS';
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
            $send = $this->sendSMS($sms, $phone, $text);

            if (!$send) {
                $result['message'] = 'Отправка смс';
                break;
            }
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
            $send = $this->sendSMS($smsID, $phone, $text);
            if (!$send) {
                break;
            }
            $result['success'] = true;
            DB::commit();
        } while (false);
        return response()->json($result);
    }

    // просрочка софт
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
                $text = 'Segodnya mi Peredadim Vas v HARD KOLEKSHEN za ' . $prolongation . ' Prodlite Srok Kredita BEZ Shtrafov I Peni oplatite v Qiwi,kassa24 iLi na Site';
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
            $send = $this->sendSMS($smsID, $phone, $text);
            if (!$send) {
                break;
            }
            $result['success'] = true;
            DB::commit();
        } while (false);
        return response()->json($result);
    }

    // просрочка хард
    public function hardPeriod(Request $request)
    {
        $dealID = $request->input('dealID');
        $phone = $request->input('phone');
        $type = $request->input('type');

        $result['message'] = false;

        do {
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
            if ($type == 18) {
                $text = "Uvedomlyaem Vas o tom,chto Vash zaem peredan v otdel vzy`skaniya.I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 27) {
                $text = "Ne pereplachivayte! Vozpol`zujtes` uslugoj PRODLENIE ZAJMA! I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 28) {
                $text = "Segodnya samiy udachniy den`,chto by` prodlit` svoj zaem! Ne upustite takuyu vozmozhnost`! I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 29) {
                $text = "Srochno pogasite svoyu zadolzhennost` ili vospol`zujtes` uslugoj prodleniya! I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 30) {
                $text = "Srochno pogasite svoyu zadolzhennost` ili vospol`zujtes` uslugoj prodleniya! I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 31) {
                $text = "V sluchae dal`nejshego ignorirovaniya zvonkov, Kompaniya budet vy`nuzhdena obratit`sya v Pravookhranitel`ny`e organy`. I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 32) {
                $text = "Dobry`j den`! Ignoriruya zvonki kompanii Vy` ne reshite problemu s zadolzhennost`yu! I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 33) {
                $text = "DOLG po Vashemu zaymu uvelichivayetsya s kazhdym dnyom! Vam neobhodimo SROCNO oplatit` svoyu zadolzhennost`  ili svyazat`sya s kompaniej I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 34) {
                $text = "DOLG po Vashemu zaymu uvelichivayetsya s kazhdym dnyom! Vam neobhodimo SROCNO oplatit` svoyu zadolzhennost`  ili svyazat`sya s kompaniej I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 35) {
                $text = "DOLG po Vashemu zaymu uvelichivayetsya s kazhdym dnyom! Vam neobhodimo SROCNO oplatit` svoyu zadolzhennost`  ili svyazat`sya s kompaniej I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 36) {
                $text = "Vam neobhodimo SROCNO oplatit` svoyu zadolzhennost`  ili svyazat`sya s kompaniej I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 37) {
                $text = "DOLG po Vashemu zaymu uvelichivayetsya s kazhdym dnyom! Vam neobhodimo SROCNO oplatit` svoyu zadolzhennost`  ili svyazat`sya s kompaniej I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 38) {
                $text = "DOLG po Vashemu zaymu uvelichivayetsya s kazhdym dnyom! Vam neobhodimo SROCNO oplatit` svoyu zadolzhennost`  ili svyazat`sya s kompaniej I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 39) {
                $text = "Vash neobosnovanny`j otkaz ot oplaty` oficzial`no zafiksirovan. Esli oplaty` ne budet v techenii dvukh posleduyushhikh dnej, kompaniya  primenit mery` prinuditel`no vzy`skaniya.  I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 40) {
                $text = "DOLG po Vashemu zaymu uvelichivayetsya s kazhdym dnyom! Vam neobhodimo SROCNO oplatit` svoyu zadolzhennost`  ili svyazat`sya s kompaniej I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 41) {
                $text = "Vy vse eshhe ne proizveli pogasheniya svoej zadolzhennosti. Segodnya poslednij den` pered peredachej dogovora v otdel dosudebnogo vzy`skaniya. I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 42) {
                $text = "Vash dogovor by`l peredan v otdel dosudebnogo vzy`skaniya! SROCHNO oplatite svoyu zadolzhennost` !  I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 43) {
                $text = "Vash dogovor by`l peredan v otdel dosudebnogo vzy`skaniya! SROCHNO oplatite svoyu zadolzhennost` !  I-credit: +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 44) {
                $text = "Uvazhaemiy klient, cherez 6 dnej  Vash zaem budet peredan v KOLLEKTORSKUYU KOMPANIYU! Uspejte Oplatit` dolg BEZ proczentov i peni  pryamo sejchas! I-credit +7 778 870 10 29;What's app: +77752163255";
            }
            if ($type == 45) {
                $text = "Uvazhaemiy  klient, cherez 5 dnej Vash zaem budet peredan v KOLLEKTORSKUYU KOMPANIYU! Uspejte Oplatit` dolg BEZ proczentov i peni  pryamo sejchas! I-credit +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 46) {
                $text = "Uvazhaemiy klient, cherez 4 dnya Vash zaem budet peredan v KOLLEKTORSKUYU KOMPANIYU! Uspejte Oplatit` dolg BEZ proczentov i peni  pryamo sejchas! I-credit +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 47) {
                $text = "Uvazhaemiy klient, cherez 3 dnya Vash zaem budet peredan v KOLLEKTORSKUYU KOMPANIYU! Uspejte Oplatit` dolg BEZ proczentov i peni  pryamo sejchas! I-credit +7 778 870 10 29; What's app: +77752163255";
            }
            if ($type == 48) {
                $text = "Uvazhaemiy klient, cherez 2 dnya Vash zaem budet peredan v KOLLEKTORSKUYU KOMPANIYU! Uspejte Oplatit` dolg BEZ proczentov i peni  pryamo sejchas! I-credit +7 778 870 10 29; What's app: 8 701 538 24 40";
            }
            if ($type == 49) {
                $text = "Uvazhaemiy klient! Zavtra Vash zaem budet peredan v kollektorskuyu kompaniyu dlya dal`neyshego vzy`skaniya zadolzhennosti.  I-credit +7 778 870 10 29; What's app: 8 701 538 24 40";
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
            $send = $this->sendSMS($smsID, $phone, $text);
            if (!$send) {
                $result['message'] = 'Отправка смс';
                break;
            }
            $result['success'] = true;
            DB::commit();
        } while (false);
        return response()->json($result);
    }

    // пролонгация
    public function prolongationPeriod(Request $request)
    {
        $type = $request->input('type');
        $amount = $request->input('amount');
        $phone = $request->input('phone');
        $prolongation = $request->input('prolongation');
        $dealID = $request->input('dealID');

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
            if ($type == 24) {
                $text = 'ZAVTRA Srok Pogasheniya Kredita Vi moJete prolongirovat Kredit oplativ ' . $prolongation . 'tg iLi zakrit ego Polnostu ' . $amount . 'tg';
            } else if ($type == 25) {
                $text = 'SEGODYA Srok Pogasheniya Kredita Vi moJete prolongirovat Kredit oplativ ' . $prolongation . 'tg iLi zakrit ego Polnostu' . $amount . 'tg';
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
            $send = $this->sendSMS($smsID, $phone, $text);
            if (!$send) {
                break;
            }
            $result['success'] = true;
            DB::commit();
        } while (false);
        return response()->json($result);
    }

    //для подписи продление
    public function prolongation(Request $request)
    {
        $url = $request->input('url');
        $dealID = $request->input('dealID');
        $phone = $request->input('phone');
        $result['success'] = false;
        do {
            if (!$url) {
                $result['message'] = 'Не передан ссылка';
                break;
            }
            if (!$dealID) {
                $result['message'] = 'Не передан номер сделки';
                break;
            }
            if (!$phone) {
                $result['message'] = 'Не передан номер телефона';
                break;
            }
            DB::beginTransaction();
            $text = "Dlya prodlenie zayma proydite po ssilke $url";
            $type = 24;
            $smsID = DB::table('sms')->insertGetId([
                'type' => $type,
                'status' => 100,
                'phone' => $phone,
                'text' => $text,
                'dealID' => $dealID,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
            if (!$smsID) {
                DB::rollBack();
                $result['message'] = 'Попробуйте позже';
                break;
            }
            $sendSMS = $this->sendSMS($smsID, $phone, $text);
            if (!$sendSMS) {
                DB::rollBack();
                $result['message'] = 'Попробуйте позже';
                break;
            }
            $result['success'] = true;
            DB::commit();
        } while (false);

        return response()->json($result);
    }

    //смс о продление займа

    public function sign(Request $request)
    {
        $dealID = $request->input('dealID');
        $phone = $request->input('phone');
        $type = $request->input('type');
        $date = $request->input('date');
        $result['success'] = false;
        do {
            if (!$dealID) {
                $result['message'] = 'Не передан номер сделки';
                break;
            }
            if (!$phone) {
                $result['message'] = 'Не передан номер телефона';
                break;
            }
            DB::beginTransaction();
            $text = "Ваш займ продлен до $date";
            $smsID = DB::table('sms')->insertGetId([
                'type' => $type,
                'status' => 100,
                'phone' => $phone,
                'text' => $text,
                'dealID' => $dealID,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
            if (!$smsID) {
                DB::rollBack();
                $result['message'] = 'Попробуйте позже';
                break;
            }
            $sendSMS = $this->sendSMS($smsID, $phone, $text);
            if (!$sendSMS) {
                DB::rollBack();
                $result['message'] = 'Попробуйте позже';
                break;
            }
            $result['success'] = true;
            DB::commit();
        } while (false);

        return response()->json($result);
    }

    // метод отправление смс
    public function sendSMS($smsID, $phone, $text)
    {
        // $access = DB::table('access')->where('id',1)->first();

        /*        $login = trim($access->login);
                $password = trim($access->password);
                $sender = trim($access->sender);
                $url = "http://service.sms-consult.kz/get.ashx?login=$login&password=$password&id=$smsID&type='message'&recipient=$phone&sender=$sender&text='$text'";
                $s = file_get_contents($url);
                if ($s == 'status=100'){
                    return true;
                }
                var_dump($s);
                return false;*/
        $login = 'icredit';
        $password = '7hSBsTvk';
        $sender = 'MESSAGE';
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
            info($response->getBody());
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

    public function checkCron()
    {
        $sql = DB::table('sms')->where('status', 100)->orWhere('status', 101)->get();
        var_dump($sql);
        echo "test";
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
                var_dump($result);
                if ($result == 'status=100') {
                    $t = 100;
                }
                if ($result == 'status=101') {
                    $t = 101;
                }
                if ($result == 'status=102') {
                    $t = 102;
                }
                if ($result == 'status=103') {
                    $t = 103;
                }
                if ($result == 'status=104') {
                    $t = 104;
                }
                if ($result == 'status=105') {
                    $t = 105;
                }
                if ($result == 'status=106') {
                    $t = 106;
                }
                if ($result == 'status=107') {
                    $t = 107;
                }
                if ($result == 'status=108') {
                    $t = 108;
                }
                if ($result == 'status=109') {
                    $t = 109;
                }
                if ($result == 'status=200') {
                    $t = 200;
                }
                if ($result == 'status=201') {
                    $t = 201;
                }
                if ($result == 'status=202') {
                    $t = 202;
                }
                if ($result == 'status=203') {
                    $t = 203;
                }
                if ($result == 'status=204') {
                    $t = 204;
                }
                if ($result == 'status=205') {
                    $t = 205;
                }
                if ($result == 'status=206') {
                    $t = 206;
                }
                if ($result == 'status=207') {
                    $t = 207;
                }
                $update = SMS::where('id', $s->id)->update(['status' => $t, 'updated_at' => Carbon::now()]);
                $status_text = DB::table('sms_statuses')->select('description')->where('status', $t)->first();
                if (isset($s) && isset($s->dealID)) {
                    $url = "https://icredit-crm.kz/api/webhock/responseDeal.php?dealID=$s->dealID&status_text='$status_text'&text=$s->text";
                } else if (isset($s) && isset($s->leadID)) {
                    $url = "https://icredit-crm.kz/api/webhock/responseLead.php?leadID=$s->leadID&status_text='$status_text'&text=$s->text";
                }
                if (isset($url)) {
                    file_get_contents($url);
                }
            } catch (BadConversionException $e) {
                info($e);
            }
            break;
        }
    }

    //Ваш займ погашен
    public function repayment(Request $request)
    {
        $phone = $request->input('phone');
        $dealID = $request->input('dealID');
        $smsType = $request->input('smsType');
        $text = 'Ваш кредит полностью ПОГАШЕН- Спасибо что выбрали НАС';
        $result['success'] = false;

        do {
            if (!$phone) {
                $result['message'] = 'Не передан номер телефона';
                break;
            }
            if (!$dealID) {
                $result['message'] = 'Не передан номер сделки';
                break;
            }
            if (!$smsType) {
                $result['message'] = 'Не передан тип сообщение';
                break;
            }
            DB::beginTransaction();

            $smsID = SMS::insertGetId([
                'type' => $smsType,
                'text' => $text,
                'phone' => $phone,
                'status' => 100,
                'dealID' => $dealID,
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

    //Рекламный
    public function advertisement(Request $request)
    {
        $dealID = $request->input('dealID');
        $phone = $request->input('phone');
        $type = $request->input('type');
        $amount = $request->input('amount');
        $result['success'] = false;
        do {
            if (!$dealID) {
                $result['message'] = 'Не передан номер сделки';
                break;
            }
            if (!$phone) {
                $result['message'] = 'Не передан номер телефона';
                break;
            }
            if (!$type) {
                $result['message'] = 'Не передан тип сообщение';
                break;
            }

            if (!$amount) {
                $result['message'] = 'Не передан сумма';
                break;
            }
            $text = "ВАМ Одобрен Кредит под 0% с УВЕЛИЧЕННОЙ суммой $amount Ваш I-Credit";
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
            $send = $this->sendSMS($smsID, $phone, $text);
            if (!$send) {
                break;
            }
            $result['success'] = true;
            DB::commit();
        } while (false);
        return response()->json($result);
    }

    public function prolongationReminder(Request $request)
    {
        $amount = $request->input('amount');
        $type = $request->input('type');
        $phone = $request->input('phone');
        $dealID = $request->input('dealID');
        $result['success'] = false;
        do {
            if (!$dealID) {
                $result['message'] = 'Не передан номер сделки';
                break;
            }
            if (!$phone) {
                $result['message'] = 'Не передан номер телефона';
                break;
            }
            if (!$type) {
                $result['message'] = 'Не передан тип сообщение';
                break;
            }

            if (!$amount) {
                $result['message'] = 'Не передан сумма';
                break;
            }
            $text = "Для продление вам не хватает $amount";

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
            $send = $this->sendSMS($smsID, $phone, $text);
            if (!$send) {
                break;
            }
            $result['success'] = true;
            DB::commit();
        } while (false);
        return response()->json($result);
    }

    public function repaymentReminder(Request $request)
    {
        $amount = $request->input('amount');
        $type = $request->input('type');
        $phone = $request->input('phone');
        $dealID = $request->input('dealID');
        $result['success'] = false;
        do {
            if (!$dealID) {
                $result['message'] = 'Не передан номер сделки';
                break;
            }
            if (!$phone) {
                $result['message'] = 'Не передан номер телефона';
                break;
            }
            if (!$type) {
                $result['message'] = 'Не передан тип сообщение';
                break;
            }

            if (!$amount) {
                $result['message'] = 'Не передан сумма';
                break;
            }
            $text = "Для полного погашение вам не хватает $amount";

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
            $send = $this->sendSMS($smsID, $phone, $text);
            if (!$send) {
                break;
            }
            $result['success'] = true;
            DB::commit();
        } while (false);
        return response()->json($result);
    }

    public function resetPassword(Request $request)
    {
        $phone = $request->input('phone');
        $url = $request->input('url');
        $result['success'] = false;
        do {
            if (!$phone) {
                $result['message'] = 'Не передан телефон';
                break;
            }
            if (!$url) {
                $result['message'] = 'Не передан ссылка';
                break;
            }
            $date = date('Y-m-d');
            $check = DB::table('sms')->where('phone', $phone)->where('type', 51)->where('created_at', '>=', $date)->first();
            if ($check) {
                $result['message'] = 'Сегодня вам уже отправлен смс';
                break;
            }
            $text = "dlya vosstanovlenie parolya pereydite po ssilke $url";
            DB::beginTransaction();
            $smsID = DB::table('sms')->insertGetId([
                'type' => 51,
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
            $send = $this->sendSMS($smsID, $phone, $text);
            if (!$send) {
                break;
            }
            $result['success'] = true;
            DB::commit();
        } while (false);
        return response()->json($result);
    }

    public function index(Request $request)
    {
        $token = $request->input('token');
        $user = User::where('remember_token', $token)->first();

        $sms = DB::table('sms')
            ->join('sms_statuses', 'sms.status', '=', 'sms_statuses.status')
            ->join('sms_types', 'sms.type', '=', 'sms_types.id')
            ->select('sms.text', 'sms_types.name as type', 'sms.phone', 'sms_statuses.name as status', 'sms.status as status_id', 'sms.created_at')->orderBy('created_at', 'desc')->paginate(15);
        if ($token && $user) {
            return response()->json($sms);
        }
        $result['success'] = false;
        $result['message'] = 'Не передан токен или пользователь не найден';
        return response()->json($result);
    }

    public function getSmsTypes(Request $request)
    {
        $sms_types = DB::table('sms_types')->get();
        return response()->json($sms_types);
    }

    public function getSmsStatuses(Request $request)
    {
        $sms_types = DB::table('sms_statuses')->get();
        return response()->json($sms_types);
    }

    public function indexFile(Request $request)
    {
        $token = $request->input('token');
        $user = User::where('remember_token', $token)->first();
        $phone = $request->input('phone');
        $sms_type = $request->input('sms_type');
        $date_from = $request->input('date_from');
        $date_to = $request->input('date_to');


        $sms = DB::table('sms')->orderBy('updated_at', 'desc');
        if ($phone != '') {
            $sms = $sms->where('phone', $phone);
        }
        if ($sms_type != '') {
            $sms = $sms->where('type', $sms_type);
        }
        if ($date_from != '' && $date_to == '') {
            $sms = $sms->whereBetween('created_at', [$date_from, Carbon::now()]);
        }
        if ($date_from == '' && $date_to != '') {
            $sms = $sms->whereBetween('created_at', [$date_from === '2000-01-01', $date_to]);
        }
        if ($date_from != '' && $date_to != '') {
            $sms = $sms->whereBetween('created_at', [$date_from, $date_to]);
        }
        $sms = $sms->get();

        $types = DB::table('sms_types')->get();
        $statuses = DB::table('sms_statuses')->get();
        $smsStatuses = [];
        foreach ($statuses as $status) {
            $smsStatuses[$status->status] = $status->name;
        }
        $typesData = [];
        foreach ($types as $type) {
            $typesData[$type->id] = $type->name;
        };
        $data = [];
        $index = 0;
        foreach ($sms as $s) {
            $data[$index] = [
                'Номер' => $s->phone,
                'Тип сообщений' => $typesData[$s->type],
                'Текст' => $s->text,
                'Статус сообщений' => $smsStatuses[$s->status],
                'Изменено' => date('d.m.Y H:i:s', strtotime($s->updated_at)),
            ];
            $index++;
        }

        if ($token && $user) {
            return response()->json($data);
        }

        $result['success'] = false;
        $result['message'] = 'Не передан токен или пользователь не найден';

        return response()->json($result);
    }

    public function filter(Request $request)
    {
        $token = $request->input('token');
        $phone = $request->input('phone');
        $user = User::where('remember_token', $token)->first();
        $date_from = $request->input('date_from');
        $date_to = $request->input('date_to');
        $sms_type = $request->input('sms_type');
        //->join('sms_statuses', 'sms.status', '=', 'sms_statuses.status')
        $status = [];
        $type = [];
        $statusTable = DB::table('sms_statuses')->select('status', 'name')->get();
        $typeTable = DB::table('sms_types')->select('id', 'name')->get();
        foreach ($statusTable as $s) {
            $status[$s->status] = $s->name;
        }
        foreach ($typeTable as $t) {
            $type[$t->id] = $t->name;
        }
        //'sms_statuses.name as status',
        //->join('sms_types', 'sms.type', '=', 'sms_types.id')
        $sms = DB::table('sms')
            ->select('sms.text', 'sms.type', 'sms.type as sms_type', 'sms.phone', 'sms.status', 'sms.status as status_id', 'sms.created_at')
            ->orderBy('created_at', 'desc');
        if ($token && $user) {
            if ($phone != '') {
                $sms = $sms->where('sms.phone', $phone);
            }
            if ($sms_type != '') {
                $sms = $sms->where('sms.type', $sms_type);
            }
            if ($date_from != '' && $date_to == '') {
                $sms = $sms->where('sms.created_at', '>=', $date_from);
            }
            if ($date_from == '' && $date_to != '') {
                $sms = $sms->where('sms.created_at', '<=', $date_to);
            }
            if ($date_from != '' && $date_to != '') {
                $sms = $sms->where('sms.created_at', '>=', $date_from)->where('sms.created_at', '<=', $date_to);
            }

            $sms = $sms->paginate(15)->appends($request->all());
            foreach ($sms as $sm) {
                $sm->status = $status[$sm->status];
                $sm->type = $type[$sm->type];
            }


            return response()->json($sms);
        }


        $result['success'] = false;
        $result['message'] = 'Не передан токен телефон или пользователь не найден';
        return response()->json($result);
    }

    public function test()
    {
        $source = "i-credit.kz";
        $phone = 77471656497;
        $code = 7292;
        $result['success'] = false;
        do {

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
            $login = 'icredit';
            $password = '7hSBsTvk';
            $sender = 'ICREDIT';
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
                info($response->getBody());
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

            DB::commit();
        } while (false);
        return response()->json($result);
    }
}
