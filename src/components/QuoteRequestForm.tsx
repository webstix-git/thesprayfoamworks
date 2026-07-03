'use client';

import type { FormEvent } from 'react';

const WUFOO_ACTION = 'https://fireflymadison.wufoo.com/forms/r1euci3v1539v89/';

export function QuoteRequestForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const dateInput = form.elements.namedItem('service-date') as HTMLInputElement | null;

    if (dateInput?.value) {
      const [year, month, day] = dateInput.value.split('-');
      (form.elements.namedItem('Field24') as HTMLInputElement).value = year;
      (form.elements.namedItem('Field24-1') as HTMLInputElement).value = month;
      (form.elements.namedItem('Field24-2') as HTMLInputElement).value = day;
    }
  }

  return (
    <>
      <span className="sfw-project-label">Request a Quote</span>
      <h2>Fill out the form below</h2>
      <p className="sfw-contact-form-intro">
        Tell us about your project and we&apos;ll get back to you with straight-up, direct pricing.
        Prefer to talk? Call or text us anytime.
      </p>

      <form className="sfw-contact-form" action={WUFOO_ACTION} method="post" onSubmit={handleSubmit}>
        <input type="hidden" name="idstamp" value="QQ4rupQQTQipmWeN1IXuxA==" />

        <fieldset className="sfw-contact-form-section">
          <legend>Contact information</legend>

          <label className="sfw-contact-field">
            <span>Company</span>
            <input type="text" name="Field1" maxLength={255} autoComplete="organization" />
          </label>

          <div className="sfw-contact-field-row">
            <label className="sfw-contact-field">
              <span>First name</span>
              <input type="text" name="Field2" maxLength={255} autoComplete="given-name" />
            </label>
            <label className="sfw-contact-field">
              <span>Last name</span>
              <input type="text" name="Field3" maxLength={255} autoComplete="family-name" />
            </label>
          </div>

          <div className="sfw-contact-field-row sfw-contact-email-phone-row">
            <label className="sfw-contact-field">
              <span>
                Email <em className="sfw-contact-required">*</em>
              </span>
              <input type="email" name="Field10" required maxLength={255} autoComplete="email" />
            </label>

            <div className="sfw-contact-field">
              <span>Phone</span>
              <div className="sfw-contact-phone-row">
                <input
                  type="tel"
                  name="Field11"
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
                  name="Field11-1"
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
                  name="Field11-2"
                  maxLength={4}
                  inputMode="numeric"
                  placeholder="0088"
                  aria-label="Phone line number"
                />
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="sfw-contact-form-section">
          <legend>Address</legend>

          <label className="sfw-contact-field">
            <span>Street address</span>
            <input type="text" name="Field14" autoComplete="address-line1" />
          </label>

          <label className="sfw-contact-field">
            <span>Address line 2</span>
            <input type="text" name="Field15" autoComplete="address-line2" />
          </label>

          <div className="sfw-contact-field-row sfw-contact-field-row-3">
            <label className="sfw-contact-field">
              <span>City</span>
              <input type="text" name="Field16" autoComplete="address-level2" />
            </label>
            <label className="sfw-contact-field">
              <span>State</span>
              <input type="text" name="Field17" autoComplete="address-level1" />
            </label>
            <label className="sfw-contact-field">
              <span>ZIP code</span>
              <input type="text" name="Field18" maxLength={15} autoComplete="postal-code" />
            </label>
          </div>

          <label className="sfw-contact-field">
            <span>Country</span>
            <select name="Field19" defaultValue="United States">
              <option value="United States">United States</option>
            </select>
          </label>
        </fieldset>

        <fieldset className="sfw-contact-form-section">
          <legend>Project details</legend>

          <label className="sfw-contact-field">
            <span>Please tell us about your project</span>
            <textarea name="Field20" rows={5} placeholder="Space type, location, timeline, and what you need insulated." />
          </label>

          <label className="sfw-contact-field">
            <span>Preferred date of service</span>
            <input type="date" name="service-date" className="sfw-contact-date-input" />
            <input type="hidden" name="Field24" />
            <input type="hidden" name="Field24-1" />
            <input type="hidden" name="Field24-2" />
          </label>
        </fieldset>

        <fieldset className="sfw-contact-form-section">
          <legend>Anything else?</legend>

          <label className="sfw-contact-field">
            <span>How did you hear about us?</span>
            <textarea name="Field21" rows={3} />
          </label>

          <label className="sfw-contact-field">
            <span>Questions or comments</span>
            <textarea name="Field22" rows={4} />
          </label>
        </fieldset>

        <div className="sfw-contact-honeypot" aria-hidden="true">
          <label htmlFor="comment">Do not fill this out</label>
          <textarea id="comment" name="comment" tabIndex={-1} autoComplete="off" />
        </div>

        <button type="submit" className="btnfx sfw-contact-submit">
          Submit request
        </button>
      </form>
    </>
  );
}
