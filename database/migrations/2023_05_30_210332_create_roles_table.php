<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->boolean('can_create_posts')->default(true);
            $table->boolean('can_delete_posts')->default(false); // can delete posts/comments/replies belonging to other users
            $table->boolean('can_update_posts')->default(false); // can edit posts/comments/replies belonging to other users
            $table->boolean('can_create_comments')->default(true);
            $table->boolean('can_ban_users')->default(false);
            $table->boolean('can_delete_users')->default(false);
            $table->boolean('can_send_messages')->default(true); // send messages to other users
            $table->boolean('can_report_content')->default(true); // report content to admins
            $table->boolean('can_view_reports')->default(false); // if user can view reported content
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('roles');
    }
};
