<?php

namespace Database\Seeders;

use App\Models\SmsType;
use Illuminate\Database\Seeder;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SmsType::create([
            'name' => 'Идентификация',
            'description' => 'Код потверждения',
        ]);
        SmsType::create([
            'name' => 'Подпись ',
            'description' => 'Подпись',
        ]);
        SmsType::create([
            'name' => 'Отказ клиенту',
            'description' => 'Отказ клиенту при регистрации',
        ]);
        SmsType::create([
            'name' => 'Отказ клиента',
            'description' => 'Клиент сам отказался при одобрении',
        ]);
        SmsType::create([
            'name' => 'Льготный период-1',
            'description' => '1 день осталось до окончании Льготного периода',
        ]);
        SmsType::create([
            'name' => 'Льготный период',
            'description' => 'Последний день Льготного периода',
        ]);
        SmsType::create([
            'name' => 'Стандартный-3',
            'description' => '3 дня осталось до окончании Стандартного периода',
        ]);
        SmsType::create([
            'name' => 'Стандартный-2',
            'description' => '2 дня осталось до окончании Стандартного периода',
        ]);
        SmsType::create([
            'name' => 'Стандартный-1',
            'description' => '1 день осталось до окончании Стандартного периода',
        ]);
        SmsType::create([
            'name' => 'Стандартный',
            'description' => 'Последний день Стандартного периода',
        ]);
        SmsType::create([
            'name' => 'Софт-1',
            'description' => 'Просрочка Софт 1 день',
        ]);
        SmsType::create([
            'name' => 'Софт-2',
            'description' => 'Просрочка Софт 2 дня',
        ]);
        SmsType::create([
            'name' => 'Софт-3',
            'description' => 'Просрочка Софт 3 дня',
        ]);
        SmsType::create([
            'name' => 'Софт-4',
            'description' => 'Просрочка Софт 4 дня',
        ]);
        SmsType::create([
            'name' => 'Софт-5',
            'description' => 'Просрочка Софт 5 дня',
        ]);
        SmsType::create([
            'name' => 'Софт-6',
            'description' => 'Просрочка Софт 6 дня',
        ]);
        SmsType::create([
            'name' => 'Софт-7',
            'description' => 'Просрочка Софт 7 дня',
        ]);
        SmsType::create([
            'name' => 'Хард',
            'description' => 'Просрочка Хард',
        ]);
        SmsType::create([
            'name' => 'Дата обещание',
            'description' => 'Дата обещание',
        ]);
        SmsType::create([
            'name' => 'Продление подпись',
            'description' => 'Продление подпись',
        ]);
        SmsType::create([
            'name' => 'Заим продлен успешно',
            'description' => 'Ваш заим продлен',
        ]);
        SmsType::create([
            'name' => 'Погашен',
            'description' => 'Заим Погашен',
        ]);
        SmsType::create([
            'name' => 'Рекламный',
            'description' => 'Рекламная рассылка смс',
        ]);
        SmsType::create([
            'name' => 'Реструктуризация',
            'description' => 'Реструктуризация',
        ]);
    }
}
