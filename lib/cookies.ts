"use client"

export const COOKIE_CONSENT_KEY = "letras-hispanas-cookie-consent"

export function getCookieConsent(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted"
}

export function setCookieConsent(accepted: boolean): void {
  if (typeof window === "undefined") return
  localStorage.setItem(COOKIE_CONSENT_KEY, accepted ? "accepted" : "declined")
}

export function shouldShowCookieBanner(): boolean {
  if (typeof window === "undefined") return false
  return !localStorage.getItem(COOKIE_CONSENT_KEY)
}
