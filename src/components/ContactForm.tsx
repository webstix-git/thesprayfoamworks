'use client';

import { useState, type FormEvent } from 'react';

const FORM_SUBMIT_ACTION =
  'https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/37471101-5436-487b-a7a2-9bbf7ebd2793';

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setSubmitting(true);
    setSubmitError(false);

    try {
      const formData = new FormData(form);
      const honeypot = formData.get('comment');

      if (typeof honeypot === 'string' && honeypot.trim()) {
        setSubmitting(false);
        return;
      }

      formData.delete('comment');
      formData.set('form_submitted_from', window.location.href);

      const response = await fetch(FORM_SUBMIT_ACTION, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Form submission failed');
      window.location.assign('/contact/thank-you');
    } catch {
      setSubmitting(false);
      setSubmitError(true);
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

      {submitError && (
        <p className="sfw-contact-form-error" role="alert">
          Something went wrong while sending your message. Please try again or call us directly.
        </p>
      )}

      <form
        className="sfw-contact-form"
        action={FORM_SUBMIT_ACTION}
        method="post"
        onSubmit={handleSubmit}
      >
        <fieldset className="sfw-contact-form-section">
          <legend>Contact information</legend>

          <label className="sfw-contact-field">
            <span>
              Name <em className="sfw-contact-required">*</em>
            </span>
            <input type="text" name="name" required maxLength={255} autoComplete="name" />
          </label>

          <label className="sfw-contact-field">
            <span>
              Email <em className="sfw-contact-required">*</em>
            </span>
            <input type="email" name="email" required maxLength={255} autoComplete="email" />
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
              name="message"
              rows={6}
              placeholder="How can we help you?"
            />
          </label>
        </fieldset>

        <div className="sfw-contact-honeypot" aria-hidden="true">
          <label htmlFor="contact-comment">Do not fill this out</label>
          <textarea id="contact-comment" name="comment" tabIndex={-1} autoComplete="off" />
        </div>

        <button type="submit" className="btnfx sfw-contact-submit" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send message'}
        </button>
      </form>
    </>
  );
}
