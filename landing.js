/**
 * Better Tab — Landing Page Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Interactive Demo Tab Search Filter
  const demoSearchInput = document.getElementById('demo-search-input');
  const demoCards = document.querySelectorAll('.demo-card');

  if (demoSearchInput) {
    demoSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      demoCards.forEach(card => {
        const title = (card.getAttribute('data-title') || '').toLowerCase();
        const url = (card.getAttribute('data-url') || '').toLowerCase();
        if (!q || title.includes(q) || url.includes(q)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // 2. Interactive Duplicate Tab Cleaner Demo
  const cleanDupeBtn = document.getElementById('demo-clean-dupes-btn');
  const dupeBanner = document.getElementById('demo-dupe-banner');
  const tabCountBadge = document.getElementById('demo-tab-count');
  const ramSavedBadge = document.getElementById('demo-ram-saved');

  let activeTabCount = 14;
  let currentRamMB = 4280;

  if (cleanDupeBtn) {
    cleanDupeBtn.addEventListener('click', () => {
      cleanDupeBtn.disabled = true;
      cleanDupeBtn.textContent = 'Cleaning...';

      setTimeout(() => {
        const dupeCards = document.querySelectorAll('.demo-card.duplicate');
        dupeCards.forEach(card => card.remove());
        
        if (dupeBanner) dupeBanner.style.display = 'none';
        activeTabCount -= 3;
        currentRamMB -= 640;

        if (tabCountBadge) tabCountBadge.textContent = `${activeTabCount} Tabs Active`;
        if (ramSavedBadge) ramSavedBadge.textContent = `${(currentRamMB / 1024).toFixed(1)} GB RAM Used`;

        // Toast feedback
        showDemoToast('🧹 Cleaned 3 duplicate tabs! Freed 640 MB RAM.');
      }, 400);
    });
  }

  // 3. Interactive Hibernate / RAM Saver Demo
  const hibernateBtn = document.getElementById('demo-hibernate-btn');
  if (hibernateBtn) {
    hibernateBtn.addEventListener('click', () => {
      hibernateBtn.disabled = true;
      hibernateBtn.textContent = 'Hibernating...';

      setTimeout(() => {
        const nonAudibleCards = document.querySelectorAll('.demo-card:not(.audible)');
        nonAudibleCards.forEach(card => {
          card.classList.add('sleeping');
          let badge = card.querySelector('.demo-card-badge');
          if (!badge) {
            badge = document.createElement('span');
            badge.className = 'demo-card-badge badge-sleeping';
            badge.textContent = '💤 45m';
            card.querySelector('.demo-card-top').appendChild(badge);
          }
        });

        currentRamMB = Math.round(currentRamMB * 0.28);
        if (ramSavedBadge) {
          ramSavedBadge.textContent = `${currentRamMB} MB RAM (Saved 72%)`;
          ramSavedBadge.style.color = '#10b981';
        }
        hibernateBtn.textContent = '🌿 Hibernated (Saved 72% RAM)';
        showDemoToast('🌿 9 Inactive tabs hibernated! Browser memory dropped to 850 MB.');
      }, 500);
    });
  }

  // 4. Pricing Switcher (Lifetime vs Annual)
  const btnLifetime = document.getElementById('switch-lifetime');
  const btnAnnual = document.getElementById('switch-annual');
  const proPriceEl = document.getElementById('pro-plan-price');
  const proBillingEl = document.getElementById('pro-plan-billing');
  const proBadgeEl = document.getElementById('pro-plan-badge');

  if (btnLifetime && btnAnnual && proPriceEl) {
    btnLifetime.addEventListener('click', () => {
      btnLifetime.classList.add('active');
      btnAnnual.classList.remove('active');
      proPriceEl.textContent = '$12.00';
      proBillingEl.textContent = 'One-time payment • Lifetime access to all future updates';
      if (proBadgeEl) proBadgeEl.textContent = '🔥 LAUNCH SPECIAL — BEST VALUE';
    });

    btnAnnual.addEventListener('click', () => {
      btnAnnual.classList.add('active');
      btnLifetime.classList.remove('active');
      proPriceEl.textContent = '$19.99';
      proBillingEl.textContent = 'Billed annually • Cancel anytime';
      if (proBadgeEl) proBadgeEl.textContent = 'ANNUAL SUBSCRIPTION';
    });
  }

  // 5. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });

  // Demo Toast Notification Helper
  function showDemoToast(msg) {
    let toast = document.getElementById('demo-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'demo-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: #141926;
        color: #f8fafc;
        border: 1px solid #10b981;
        box-shadow: 0 10px 30px rgba(0,0,0,0.6), 0 0 15px rgba(16,185,129,0.3);
        padding: 12px 20px;
        border-radius: 9999px;
        font-size: 13.5px;
        font-weight: 600;
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.25s ease;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
    }, 3200);
  }
});
