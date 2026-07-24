<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Mail\ContactMessageMail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('contact/index', [
            'contactEmail' => config('mail.contact_to'),
            'seo' => [
                'title' => 'Contact Us — ProLampX',
                'description' => 'Get in touch with the ProLampX team for support, feedback, privacy requests, or business inquiries.',
            ],
        ]);
    }

    public function store(StoreContactRequest $request): RedirectResponse
    {
        $recipient = config('mail.contact_to');

        if (! $recipient) {
            return back()->withErrors([
                'email' => 'Contact email is not configured yet. Please try again later.',
            ]);
        }

        Mail::to($recipient)->send(new ContactMessageMail($request->validated()));

        Inertia::flash('toast', [
            'type' => 'success',
            'message' => 'Thanks for reaching out. We will get back to you soon.',
        ]);

        return back();
    }
}
