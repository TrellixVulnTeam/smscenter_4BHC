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
        SmsType::create([
            'name' => 'Ваш займ продлен',
            'description' => 'Ваш займ продлен',
        ]);
        SmsType::create([
            'name' => 'Для продление вам не хватает',
            'description' => 'Для продление вам не хватает',
        ]);
        SmsType::create([
            'name' => 'Для продление вам не хватает',
            'description' => 'Для продление вам не хватает',
        ]);
        SmsType::create([
            'name' => 'Хард-9',
            'description' => 'Хард-9',
        ]);
        SmsType::create([
            'name' => 'Хард-10',
            'description' => 'Хард-10',
        ]);
        SmsType::create([
            'name' => 'Хард-11',
            'description' => 'Хард-11',
        ]);
        SmsType::create([
            'name' => 'Хард-14',
            'description' => 'Хард-14',
        ]);
        SmsType::create([
            'name' => 'Хард-20',
            'description' => 'Хард-20',
        ]);
        SmsType::create([
            'name' => 'Хард-25',
            'description' => 'Хард-25',
        ]);
        SmsType::create([
            'name' => 'Хард-30',
            'description' => 'Хард-30',
        ]);
        SmsType::create([
            'name' => 'Хард-35',
            'description' => 'Хард-35',
        ]);
        SmsType::create([
            'name' => 'Хард-40',
            'description' => 'Хард-40',
        ]);
        SmsType::create([
            'name' => 'Хард-45',
            'description' => 'Хард-45',
        ]);
        SmsType::create([
            'name' => 'Хард-50',
            'description' => 'Хард-50',
        ]);
        SmsType::create([
            'name' => 'Хард-55',
            'description' => 'Хард-55',
        ]);
        SmsType::create([
            'name' => 'Хард-60',
            'description' => 'Хард-60',
        ]);
        SmsType::create([
            'name' => 'Хард-65',
            'description' => 'Хард-65',
        ]);
        SmsType::create([
            'name' => 'Хард-69',
            'description' => 'Хард-69',
        ]);
        SmsType::create([
            'name' => 'Хард-70',
            'description' => 'Хард-70',
        ]);
        SmsType::create([
            'name' => 'Хард-80',
            'description' => 'Хард-80',
        ]);
        SmsType::create([
            'name' => 'Хард-85',
            'description' => 'Хард-85',
        ]);
        SmsType::create([
            'name' => 'Хард-86',
            'description' => 'Хард-86',
        ]);
        SmsType::create([
            'name' => 'Хард-87',
            'description' => 'Хард-87',
        ]);
        SmsType::create([
            'name' => 'Хард-88',
            'description' => 'Хард-88',
        ]);
        SmsType::create([
            'name' => 'Хард-89',
            'description' => 'Хард-89',
        ]);
        SmsType::create([
            'name' => 'Хард-90',
            'description' => 'Хард-90',
        ]);
        SmsType::create([
            'name' => 'Код подтверждение NashCompany',
            'description' => 'Код подтверждение NashCompany',
        ]);
        SmsType::create([
            'name' => 'Восстановление пароля',
            'description' => 'Восстановление пароля',
        ]);
        SmsType::create([
            'name' => 'Отказной трафик',
            'description' => 'Отказной трафик',
        ]);
        SmsType::create([
            'name' => 'Для полного погашение не хватает',
            'description' => 'Для полного погашение не хватает',
        ]);
        SmsType::create([
            'name' => 'Хард-13',
            'description' => 'Хард-13',
        ]);
        SmsType::create([
            'name' => 'Хард-16',
            'description' => 'Хард-16',
        ]);
        SmsType::create([
            'name' => 'Хард-19',
            'description' => 'Хард-19',
        ]);
        SmsType::create([
            'name' => 'Хард-22',
            'description' => 'Хард-22',
        ]);
        SmsType::create([
            'name' => 'Хард-28',
            'description' => 'Хард-28',
        ]);
        SmsType::create([
            'name' => 'Хард-29',
            'description' => 'Хард-29',
        ]);
        SmsType::create([
            'name' => 'Хард-75',
            'description' => 'Хард-75',
        ]);


    }
}
