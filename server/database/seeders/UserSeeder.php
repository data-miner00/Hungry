<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'fname' => 'Greg',
            'lname' => 'Houston',
            'handle' => 'useradmin',
            'email' => 'useradmin@gmail.com',
            'phone_number' => '+60108886565',
            'about' => 'A newbie mod or user?',
            'balance' => 123.45,
            'password' => Hash::make('admin123'),
            'is_admin' => true,
        ]);

        DB::table('users')->insert([
            'fname' => 'Jim',
            'lname' => 'Williams',
            'handle' => 'jimwilliams',
            'email' => 'jimwilliams@gmail.com',
            'phone_number' => '+651475785',
            'about' => 'Hellow rold!',
            'balance' => 110.00,
            'password' => Hash::make('user123'),
        ]);
    }
}
