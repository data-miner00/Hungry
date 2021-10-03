<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDelicaciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('delicacies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type');
            $table->string('description');
            $table->decimal('price');
            $table->integer('avail_start_time'); // in 24 hr format 1430;
            $table->integer('avail_end_time'); 
            $table->integer('waiting_time'); // in minutes
            $table->string('image');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('delicacies');
    }
}
