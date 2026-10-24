/**
 * Logik für das Kontaktformular (wie bei alcartron-hifi):
 * - Spam-Schutz im Browser: Fallenfeld „website“ (wertet auch Mailtory aus) und Zeitsperre
 *   (Bots füllen in < 3 s aus). Erkannter Spam wird nicht gesendet, der Bot sieht trotzdem „Danke“.
 * - Telefonnummern prüfen (Felder mit data-phone).
 * - Absenden im Hintergrund, Erfolg bzw. Fehler erscheint direkt unter dem Formular.
 *   Mailtory antwortet ohne CORS-Freigabe, deshalb wird im Modus „no-cors“ gesendet: Die Anfrage geht
 *   normal raus, die Antwort ist für die Seite aber nicht lesbar. Als Erfolg gilt, wenn sie ohne
 *   Netzwerkfehler durchgeht. Leere Felder werden nicht mitgeschickt.
 * - Ohne JavaScript sendet das Formular normal und der Besucher sieht die Danke-Seite von Mailtory.
 */
import { HONEYPOT_FIELD } from './forms';

const MIN_FILL_MS = 3000;

/** Erlaubt +, Ziffern, Leerzeichen, / - ( ) . und verlangt 7–15 Ziffern (z. B. 0391 59769033, +49 391 59769033). */
export function isValidPhone(value: string): boolean {
  const v = value.trim();
  if (!/^\+?[\d\s/().-]+$/.test(v)) return false;
  const digits = v.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

export function guardForm(form: HTMLFormElement) {
  let loadedAt = Date.now();
  const success = form.querySelector<HTMLElement>('[data-form-success]');
  const error = form.querySelector<HTMLElement>('[data-form-error]');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const label = button?.textContent ?? 'Senden';

  const show = (el: HTMLElement | null) => {
    if (success) success.hidden = el !== success;
    if (error) error.hidden = el !== error;
    if (el) {
      el.focus({ preventScroll: true });
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Telefonfelder live prüfen
  form.querySelectorAll<HTMLInputElement>('input[data-phone]').forEach((input) => {
    const check = () =>
      input.setCustomValidity(
        input.value.trim() === '' || isValidPhone(input.value)
          ? ''
          : 'Bitte eine gültige Telefonnummer eingeben, z. B. 0391 59769033.',
      );
    input.addEventListener('input', check);
    input.addEventListener('blur', check);
  });

  // Sobald jemand nach einer Meldung weitertippt, verschwindet sie
  form.addEventListener('input', () => show(null));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const isBot = String(data.get(HONEYPOT_FIELD) ?? '') !== '' || Date.now() - loadedAt < MIN_FILL_MS;
    if (isBot) {
      form.reset();
      show(success);
      return;
    }

    // Leere Felder weglassen (das leere Fallenfeld bleibt – Mailtory erwartet es)
    for (const [key, value] of [...data.entries()]) {
      if (key !== HONEYPOT_FIELD && typeof value === 'string' && value.trim() === '') data.delete(key);
    }

    show(null);
    if (button) {
      button.disabled = true;
      button.textContent = 'Wird gesendet …';
    }

    try {
      await fetch(form.action, { method: 'POST', body: data, mode: 'no-cors' });
      form.reset();
      form.dispatchEvent(new Event('form:reset'));
      loadedAt = Date.now();
      show(success);
    } catch {
      show(error);
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = label;
      }
    }
  });
}
