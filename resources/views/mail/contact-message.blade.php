<x-mail::message>
# New contact form message

**From:** {{ $senderName }} ({{ $senderEmail }})

**Subject:** {{ $subjectLine }}

---

{{ $body }}

---

You can reply directly to this email to respond to {{ $senderName }}.

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
