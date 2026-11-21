'use client';
import { useEffect, useRef } from 'react';

/** Shared keyboard/focus behavior for the church contact dialogs. */
export function useAccessibleModal(open: boolean, close: () => void) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const oldFocus = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const dialog = dialogRef.current;
    (dialog?.querySelector<HTMLElement>('input:not([disabled]), button:not([disabled]), textarea:not([disabled])') ?? dialog)?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') { event.preventDefault(); close(); return; }
      if (event.key !== 'Tab' || !dialog) return;
      const available = Array.from(dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter(el => el.getClientRects().length > 0);
      if (!available.length) { event.preventDefault(); dialog.focus(); return; }
      const first = available[0], last = available[available.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = oldOverflow;
      if (oldFocus?.isConnected) oldFocus.focus(); else triggerRef.current?.focus();
    };
  }, [open, close]);
  return { triggerRef, dialogRef };
}
