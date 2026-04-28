import { useState } from 'react'
import { Section, SectionHeader } from '@/components/ui'
import { faqItems } from '@/data/faq'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <Section id="faq" aria-labelledby="faq-heading" subtle>
      <SectionHeader
        id="faq-heading"
        label="FAQ"
        title="COMMON QUESTIONS"
        subtitle="Everything you need to know before your first class."
        center
      />

      <div className="max-w-2xl mx-auto flex flex-col gap-3">
        {faqItems.map((item) => {
          const isOpen = openId === item.id
          return (
            <div
              key={item.id}
              className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-inset"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                id={`faq-trigger-${item.id}`}
                onClick={() => toggle(item.id)}
              >
                <span className="text-base font-semibold text-[var(--color-text)]">
                  {item.question}
                </span>
                <span
                  className="shrink-0 text-[var(--color-accent)] transition-transform duration-200"
                  style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}
                  aria-hidden="true"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  className="px-6 pb-5"
                >
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
