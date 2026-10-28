'use client';

import { useState, type FormEvent } from 'react';

const FORM_SUBMIT_ACTION =
  'https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/37471101-5436-487b-a7a2-9bbf7ebd2793';
const PHONE = '(608) 279-0088';
const PHONE_TEL = 'tel:6082790088';

export function QuoteRequestForm() {
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
      window.location.assign('/get-a-quote/thank-you');
    } catch {
      setSubmitting(false);
      setSubmitError(true);
    }
  }

  return (
    <>
      <span className="sfw-project-label">Request a Quote</span>
      <h2>Fill out the form below</h2>
      <p className="sfw-contact-form-intro">
        Please complete this form to tell us a little about your project, and we&apos;ll contact you
        to discuss your insulation needs.
        <br />
        <span className="sfw-contact-phone-prompt">
          You can also call us at{' '}
          <a href={PHONE_TEL} className="sfw-contact-phone-link">
            {PHONE}
          </a>
          .
        </span>
      </p>

      {submitError && (
        <p className="sfw-contact-form-error" role="alert">
          Something went wrong while sending your request. Please try again or call us at{' '}
          <a href={PHONE_TEL}>{PHONE}</a>.
        </p>
      )}

      <form
        className="sfw-contact-form"
        action={FORM_SUBMIT_ACTION}
        method="post"
        onSubmit={handleSubmit}
      >
        <fieldset className="sfw-contact-form-section">
          <fieldset className="sfw-contact-choice-fieldset">
            <legend>I am a</legend>
            <div className="sfw-contact-choice-grid">
              {['Homeowner', 'Contractor / Builder', 'Business Owner', 'Other'].map((option) => (
                <label key={option} className="sfw-contact-choice">
                  <input type="radio" name="contact_type" value={option} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            <label className="sfw-contact-field sfw-contact-other-field">
              <span>Other</span>
              <input type="text" name="contact_type_other" maxLength={255} />
            </label>
          </fieldset>
        </fieldset>

        <fieldset className="sfw-contact-form-section">
          <legend className="sfw-contact-section-title">Project information</legend>

          <label className="sfw-contact-field">
            <span>Project location (address or area)</span>
            <input type="text" name="project_location" maxLength={255} />
          </label>

          <fieldset className="sfw-contact-choice-fieldset">
            <legend>Project type</legend>
            <div className="sfw-contact-choice-grid">
              {[
                'New Construction',
                'Addition',
                'Remodel / Renovation',
                'Pole Building',
                'Commercial Building',
                'Agricultural Building',
                'Other',
              ].map((option) => (
                <label key={option} className="sfw-contact-choice">
                  <input type="radio" name="project_type" value={option} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="sfw-contact-field">
            <span>Briefly describe your project</span>
          <textarea name="project_description" rows={5} />
          </label>

          <fieldset className="sfw-contact-choice-fieldset">
            <legend>Desired timeline</legend>
            <label className="sfw-contact-choice">
              <input type="radio" name="timeline" value="Complete by a specific date" />
              <span>I would like to complete the project by:</span>
            </label>
            <input type="date" name="desired_completion_date" className="sfw-contact-date-input" />
            <label className="sfw-contact-choice">
              <input type="radio" name="timeline" value="Just gathering information" />
              <span>Just gathering information</span>
            </label>
          </fieldset>
        </fieldset>

        <fieldset className="sfw-contact-form-section">
          <legend>Contact information</legend>

          <label className="sfw-contact-field">
            <span>Name</span>
            <input type="text" name="name" maxLength={255} autoComplete="name" />
          </label>

          <label className="sfw-contact-field">
            <span>Business name (if applicable)</span>
            <input type="text" name="business_name" maxLength={255} autoComplete="organization" />
          </label>

          <div className="sfw-contact-field-row sfw-contact-email-phone-row">
            <label className="sfw-contact-field">
              <span>Email</span>
              <input type="email" name="email" maxLength={255} autoComplete="email" />
            </label>

            <div className="sfw-contact-field">
              <span>
                Phone <em className="sfw-contact-required">*</em>
              </span>
              <div className="sfw-contact-phone-row">
                <input
                  type="tel"
                  name="phone_area_code"
                  required
                  maxLength={3}
                  inputMode="numeric"
                  placeholder="608"
                  aria-label="Area code"
                />
                <span className="sfw-contact-phone-sep" aria-hidden="true">
                  -
                </span>
                <input
                  type="tel"
                  name="phone_prefix"
                  required
                  maxLength={3}
                  inputMode="numeric"
                  placeholder="279"
                  aria-label="Phone prefix"
                />
                <span className="sfw-contact-phone-sep" aria-hidden="true">
                  -
                </span>
                <input
                  type="tel"
                  name="phone_line"
                  required
                  maxLength={4}
                  inputMode="numeric"
                  placeholder="0088"
                  aria-label="Phone line number"
                />
              </div>
            </div>
          </div>

          <label className="sfw-contact-field">
            <span>Mailing address</span>
            <input type="text" name="mailing_address" autoComplete="address-line1" />
          </label>

          <label className="sfw-contact-field">
            <span>Address line 2</span>
            <input type="text" name="address_line_2" autoComplete="address-line2" />
          </label>

          <div className="sfw-contact-field-row sfw-contact-field-row-3">
            <label className="sfw-contact-field">
              <span>City</span>
              <input type="text" name="city" autoComplete="address-level2" />
            </label>
            <label className="sfw-contact-field">
              <span>State</span>
              <input type="text" name="state" autoComplete="address-level1" />
            </label>
            <label className="sfw-contact-field">
              <span>ZIP code</span>
              <input type="text" name="zip_code" maxLength={15} autoComplete="postal-code" />
            </label>
          </div>

          <fieldset className="sfw-contact-choice-fieldset">
            <legend>Best way to reach you</legend>
            <div className="sfw-contact-choice-grid">
              {['Phone Call', 'Text Message', 'Email'].map((option) => (
                <label key={option} className="sfw-contact-choice">
                  <input type="radio" name="preferred_contact_method" value={option} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </fieldset>

        <fieldset className="sfw-contact-form-section">
          <legend>Additional details</legend>

          <label className="sfw-contact-field">
            <span>How did you hear about us?</span>
            <input type="text" name="referral_source" maxLength={255} />
          </label>

          <label className="sfw-contact-field">
            <span>Questions or comments</span>
          <textarea name="message" rows={4} />
          </label>
        </fieldset>

        <div className="sfw-contact-honeypot" aria-hidden="true">
          <label htmlFor="comment">Do not fill this out</label>
          <textarea id="comment" name="comment" tabIndex={-1} autoComplete="off" />
        </div>

        <button type="submit" className="btnfx sfw-contact-submit" disabled={submitting}>
          {submitting ? 'Sending…' : 'Submit request'}
        </button>
      </form>
    </>
  );
}
