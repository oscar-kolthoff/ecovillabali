export const ENV = {
  databaseUrl: process.env.DATABASE_URL ?? "",
  resendApiKey: process.env.RESEND_API_KEY ?? "",
  // Must be on a domain verified in Resend. Falls back to Resend's shared
  // sandbox sender, which only delivers to the Resend account's own email.
  notificationFromEmail: process.env.NOTIFICATION_FROM_EMAIL ?? "onboarding@resend.dev",
  notificationToEmail: process.env.NOTIFICATION_TO_EMAIL ?? "oscarkolthoff@gmail.com",
};
