<?php

namespace Tests\Feature;

use App\Mail\ContactMessageMail;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ContactTest extends TestCase
{

    public function test_contact_page_is_accessible(): void
    {
        $response = $this->get('/contact');

        $response->assertOk();
    }

    public function test_contact_form_sends_email(): void
    {
        Mail::fake();

        config(['mail.contact_to' => 'team@prolampx.com']);

        $response = $this->post('/contact', [
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'subject' => 'Support request',
            'message' => 'Hello, I need help with the installer.',
        ]);

        $response->assertRedirect();
        $response->assertSessionHasNoErrors();

        Mail::assertSent(ContactMessageMail::class, function (ContactMessageMail $mail) {
            return $mail->hasTo('team@prolampx.com')
                && $mail->payload['email'] === 'jane@example.com';
        });
    }

    public function test_contact_form_validates_required_fields(): void
    {
        $response = $this->post('/contact', []);

        $response->assertSessionHasErrors(['name', 'email', 'subject', 'message']);
    }
}
