import { Resend } from "resend";
import { ENV } from "./env";

export type NotificationPayload = {
  title: string;
  content: string;
};

const TITLE_MAX_LENGTH = 1200;
const CONTENT_MAX_LENGTH = 20000;

const trimValue = (value: string): string => value.trim();
const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

class NotificationValidationError extends Error {}

const validatePayload = (input: NotificationPayload): NotificationPayload => {
  if (!isNonEmptyString(input.title)) {
    throw new NotificationValidationError("Notification title is required.");
  }
  if (!isNonEmptyString(input.content)) {
    throw new NotificationValidationError("Notification content is required.");
  }

  const title = trimValue(input.title);
  const content = trimValue(input.content);

  if (title.length > TITLE_MAX_LENGTH) {
    throw new NotificationValidationError(
      `Notification title must be at most ${TITLE_MAX_LENGTH} characters.`
    );
  }
  if (content.length > CONTENT_MAX_LENGTH) {
    throw new NotificationValidationError(
      `Notification content must be at most ${CONTENT_MAX_LENGTH} characters.`
    );
  }

  return { title, content };
};

let _resend: Resend | null = null;
function getResend() {
  if (!_resend && ENV.resendApiKey) {
    _resend = new Resend(ENV.resendApiKey);
  }
  return _resend;
}

/**
 * Emails the site owner about a new inquiry via Resend. Returns `false`
 * (rather than throwing) when Resend isn't configured or the send fails, so
 * callers can still confirm the inquiry was saved even if the email didn't
 * go out.
 */
export async function notifyOwner(payload: NotificationPayload): Promise<boolean> {
  const { title, content } = validatePayload(payload);

  const resend = getResend();
  if (!resend) {
    console.warn("[Notification] RESEND_API_KEY not configured; skipping owner email.");
    return false;
  }

  try {
    const { error } = await resend.emails.send({
      from: ENV.notificationFromEmail,
      to: ENV.notificationToEmail,
      subject: title,
      text: content,
    });

    if (error) {
      console.warn("[Notification] Resend rejected the email:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.warn("[Notification] Error sending email via Resend:", error);
    return false;
  }
}
