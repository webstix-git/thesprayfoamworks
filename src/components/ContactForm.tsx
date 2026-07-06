'use client';

import type { FormEvent } from 'react';

const WUFOO_ACTION = 'https://fireflymadison.wufoo.com/forms/r1euci3v1539v89/';

function splitPhoneDigits(value: string, form: HTMLFormElement) {
  const digits = value.replace(/\D/g, '');
  const area = digits.slice(0, 3);
  const prefix = digits.slice(3, 6);
  const line = digits.slice(6, 10);

  (form.elements.namedItem('Field11') as HTMLInputElement).value = area;
  (form.elements.namedItem('Field11-1') as HTMLInputElement).value = prefix;
  (form.elements.namedItem('Field11-2') as HTMLInputElement).value = line;
}

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const phoneInput = form.elements.namedItem('phone') as HTMLInputElement | null;

    if (phoneInput?.value) {
      splitPhoneDigits(phoneInput.value, form);
    }
  }

  return (
    <>
      <span className="sfw-project-label">Contact Us</span>
      <h2>Send us a message</h2>
      <p className="sfw-contact-form-intro">
        Have a question? Fill out the form below and we&apos;ll get back to you. Prefer to talk?
        Call or text us anytime.
      </p>

      <form className="sfw-contact-form" action={WUFOO_ACTION} method="post" onSubmit={handleSubmit}>
        <input type="hidden" name="idstamp" value="QQ4rupQQTQipmWeN1IXuxA==" />
        <input type="hidden" name="Field11" />
        <input type="hidden" name="Field11-1" />
        <input type="hidden" name="Field11-2" />

        <fieldset className="sfw-contact-form-section">
          <legend>Contact information</legend>

          <label className="sfw-contact-field">
            <span>
              Name <em className="sfw-contact-required">*</em>
            </span>
            <input type="text" name="Field2" required maxLength={255} autoComplete="name" />
          </label>

          <label className="sfw-contact-field">
            <span>
              Email <em className="sfw-contact-required">*</em>
            </span>
            <input type="email" name="Field10" required maxLength={255} autoComplete="email" />
          </label>

          <label className="sfw-contact-field">
            <span>
              Phone <em className="sfw-contact-required">*</em>
            </span>
            <input type="tel" name="phone" required autoComplete="tel" placeholder="(608) 279-0088" />
          </label>

          <label className="sfw-contact-field">
            <span>Questions or comments</span>
            <textarea
              name="Field22"
              rows={6}
              placeholder="How can we help you?"
            />
          </label>
        </fieldset>

        <div className="sfw-contact-honeypot" aria-hidden="true">
          <label htmlFor="contact-comment">Do not fill this out</label>
          <textarea id="contact-comment" name="comment" tabIndex={-1} autoComplete="off" />
        </div>

        <button type="submit" className="btnfx sfw-contact-submit">
          Send message
        </button>
      </form>
    </>
  );
}
