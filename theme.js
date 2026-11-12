/* =========================================================================
   LOL Mails - Dynamic Color System based on Time of Day
   - Automatic Real-Time Syncing (Default):
       Morning Theme (6 AM – 11 AM)
       Noon Theme    (11 AM – 4 PM)
       Evening Theme (4 PM – 8 PM)
       Night Theme   (8 PM – 6 AM)
   - Manual Override via: 🌅 ☀️ 🌆 🌙 buttons
   - Carried over across page navigation in the same session!
   - On page refresh (reload), automatically resets back to Automatic Real-Time Syncing!
   Zero-delay instant application before paint + real-time automatic syncing
   ========================================================================= */

const THEMES = {
  morning: {
    '--bg-gradient-start': '#CBE2FB',
    '--bg-gradient-mid': '#EAF3FD',
    '--bg-gradient-end': '#FAFCFF',
    '--glass-bg': 'rgba(255, 255, 255, 0.42)',
    '--glass-border': 'rgba(255, 255, 255, 0.75)',
    '--glass-shadow': 'rgba(80, 140, 210, 0.16)',
    '--surface-elevated': 'rgba(255, 255, 255, 0.75)',
    '--accent-primary': '#3B82F6',
    '--accent-secondary': '#1D4ED8',
    '--text-primary': '#0F172A',
    '--text-secondary': '#475569',
    '--text-muted': '#64748B',
    '--glow-color': 'rgba(186, 230, 253, 0.6)',
    '--card-hover-glow': 'rgba(59, 130, 246, 0.22)',
    '--qr-card-bg': 'rgba(255, 255, 255, 0.88)',
    '--qr-card-border': 'rgba(186, 230, 253, 0.9)',
    '--qr-inner-bg': 'linear-gradient(180deg, rgba(219, 234, 254, 0.5) 0%, rgba(240, 247, 255, 0.85) 100%)',
    '--qr-inner-border': 'rgba(191, 219, 254, 0.8)',
    '--qr-orb-glow': 'rgba(59, 130, 246, 0.35)',
    '--qr-badge-bg': 'rgba(59, 130, 246, 0.12)',
    '--qr-badge-border': 'rgba(59, 130, 246, 0.25)',
    '--qr-badge-color': '#3B82F6',
    '--qr-btn-gradient': 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
    '--qr-btn-shadow': 'rgba(59, 130, 246, 0.35)',
    name: '🌅 Morning Mode'
  },
  noon: {
    '--bg-gradient-start': '#FFFBEB',
    '--bg-gradient-mid': '#FEF3C7',
    '--bg-gradient-end': '#F8FAFC',
    '--glass-bg': 'rgba(255, 255, 255, 0.48)',
    '--glass-border': 'rgba(252, 211, 77, 0.45)',
    '--glass-shadow': 'rgba(245, 158, 11, 0.16)',
    '--surface-elevated': 'rgba(255, 255, 255, 0.82)',
    '--accent-primary': '#F59E0B',
    '--accent-secondary': '#D97706',
    '--text-primary': '#1E293B',
    '--text-secondary': '#475569',
    '--text-muted': '#94A3B8',
    '--glow-color': 'rgba(254, 240, 138, 0.5)',
    '--card-hover-glow': 'rgba(245, 158, 11, 0.25)',
    '--qr-card-bg': 'rgba(255, 254, 246, 0.92)',
    '--qr-card-border': 'rgba(252, 211, 77, 0.75)',
    '--qr-inner-bg': 'linear-gradient(180deg, rgba(254, 243, 199, 0.55) 0%, rgba(255, 251, 235, 0.85) 100%)',
    '--qr-inner-border': 'rgba(253, 230, 138, 0.8)',
    '--qr-orb-glow': 'rgba(245, 158, 11, 0.35)',
    '--qr-badge-bg': 'rgba(245, 158, 11, 0.14)',
    '--qr-badge-border': 'rgba(245, 158, 11, 0.3)',
    '--qr-badge-color': '#F59E0B',
    '--qr-btn-gradient': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    '--qr-btn-shadow': 'rgba(245, 158, 11, 0.35)',
    name: '☀️ Noon Mode'
  },
  evening: {
    '--bg-gradient-start': '#1e113a',
    '--bg-gradient-mid': '#2e1957',
    '--bg-gradient-end': '#581c4a',
    '--glass-bg': 'rgba(38, 22, 70, 0.48)',
    '--glass-border': 'rgba(244, 114, 182, 0.25)',
    '--glass-shadow': 'rgba(236, 72, 153, 0.22)',
    '--surface-elevated': 'rgba(54, 30, 95, 0.68)',
    '--accent-primary': '#F43F5E',
    '--accent-secondary': '#E11D48',
    '--text-primary': '#FFF1F2',
    '--text-secondary': '#FECDD3',
    '--text-muted': '#FDA4AF',
    '--glow-color': 'rgba(244, 63, 94, 0.25)',
    '--card-hover-glow': 'rgba(244, 63, 94, 0.35)',
    '--qr-card-bg': 'rgba(32, 18, 56, 0.9)',
    '--qr-card-border': 'rgba(244, 63, 94, 0.35)',
    '--qr-inner-bg': 'linear-gradient(180deg, rgba(54, 30, 85, 0.7) 0%, rgba(28, 16, 48, 0.9) 100%)',
    '--qr-inner-border': 'rgba(244, 114, 182, 0.25)',
    '--qr-orb-glow': 'rgba(244, 63, 94, 0.4)',
    '--qr-badge-bg': 'rgba(244, 63, 94, 0.18)',
    '--qr-badge-border': 'rgba(244, 63, 94, 0.35)',
    '--qr-badge-color': '#F43F5E',
    '--qr-btn-gradient': 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)',
    '--qr-btn-shadow': 'rgba(244, 63, 94, 0.45)',
    name: '🌆 Evening Mode'
  },
  night: {
    '--bg-gradient-start': '#07070a',
    '--bg-gradient-mid': '#0f0e17',
    '--bg-gradient-end': '#161327',
    '--glass-bg': 'rgba(18, 17, 28, 0.68)',
    '--glass-border': 'rgba(255, 255, 255, 0.08)',
    '--glass-shadow': 'rgba(0, 0, 0, 0.6)',
    '--surface-elevated': 'rgba(26, 25, 40, 0.75)',
    '--accent-primary': '#8B5CF6',
    '--accent-secondary': '#7C3AED',
    '--text-primary': '#F8FAFC',
    '--text-secondary': '#94A3B8',
    '--text-muted': '#64748B',
    '--glow-color': 'rgba(139, 92, 246, 0.18)',
    '--card-hover-glow': 'rgba(139, 92, 246, 0.3)',
    '--qr-card-bg': 'rgba(16, 15, 26, 0.94)',
    '--qr-card-border': 'rgba(139, 92, 246, 0.3)',
    '--qr-inner-bg': 'linear-gradient(180deg, rgba(32, 23, 56, 0.8) 0%, rgba(18, 17, 28, 0.95) 100%)',
    '--qr-inner-border': 'rgba(139, 92, 246, 0.2)',
    '--qr-orb-glow': 'rgba(139, 92, 246, 0.38)',
    '--qr-badge-bg': 'rgba(139, 92, 246, 0.18)',
    '--qr-badge-border': 'rgba(139, 92, 246, 0.35)',
    '--qr-badge-color': '#8B5CF6',
    '--qr-btn-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
    '--qr-btn-shadow': 'rgba(139, 92, 246, 0.45)',
    name: '🌙 Night Mode'
  }
};

// Calculate current theme strictly by time of day
function getTimeThemeKey() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 11) return 'morning';  // 6 AM – 11 AM
  if (hour >= 11 && hour < 16) return 'noon';    // 11 AM – 4 PM
  if (hour >= 16 && hour < 20) return 'evening'; // 4 PM – 8 PM
  return 'night';                                // 8 PM – 6 AM
}

// Detect if current page load is a browser refresh / reload
function isPageRefresh() {
  try {
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries && navEntries.length > 0) {
      return navEntries[0].type === 'reload';
    }
    if (performance.navigation) {
      return performance.navigation.type === 1; // TYPE_RELOAD
    }
  } catch (e) {}
  return false;
}

function getStoredOverride() {
  try {
    return sessionStorage.getItem('theme_override');
  } catch (e) {
    return null;
  }
}

let currentAppliedKey = null;

function applyTheme(theme, key) {
  const root = document.documentElement;
  currentAppliedKey = key;

  // Set CSS custom properties on :root
  for (const [prop, val] of Object.entries(theme)) {
    if (prop !== 'name') {
      root.style.setProperty(prop, val);
    }
  }

  // Set data-theme attribute on root and body for targeted CSS matching
  root.setAttribute('data-theme', key);
  if (document.body) document.body.setAttribute('data-theme', key);

  // Set theme classes
  const allThemeClasses = ['theme-morning', 'theme-noon', 'theme-evening', 'theme-night'];
  root.classList.remove(...allThemeClasses);
  root.classList.add('theme-' + key);
  if (document.body) {
    document.body.classList.remove(...allThemeClasses);
    document.body.classList.add('theme-' + key);
  }

  // Toggle night-mode helper class
  const isDark = key === 'night' || key === 'evening';
  if (isDark) {
    root.classList.add('night-mode');
    if (document.body) document.body.classList.add('night-mode');
  } else {
    root.classList.remove('night-mode');
    if (document.body) document.body.classList.remove('night-mode');
  }

  // Update theme badge
  const badge = document.getElementById('theme-badge');
  if (badge) {
    badge.textContent = theme.name;
  }

  // Update active state on 🌅 ☀️ 🌆 🌙 buttons
  updateSwitcherButtons(key);
}

function updateSwitcherButtons(activeKey) {
  const themeKeys = ['morning', 'noon', 'evening', 'night'];
  themeKeys.forEach(k => {
    const btn = document.getElementById(`theme-btn-${k}`);
    if (btn) {
      if (k === activeKey) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    }
  });
}

// Automatic theme update
function updateTheme(force = false) {
  const override = getStoredOverride();
  let targetKey;

  if (override && THEMES[override]) {
    targetKey = override;
  } else {
    targetKey = getTimeThemeKey();
  }

  // Only re-apply if theme key changed or forced (avoids redundant DOM writes)
  if (force || targetKey !== currentAppliedKey) {
    applyTheme(THEMES[targetKey], targetKey);
  } else {
    updateSwitcherButtons(targetKey);
  }
}

// User manually selects a theme via 🌅 ☀️ 🌆 🌙 buttons
function setThemeOverride(themeKey) {
  const currentOverride = getStoredOverride();

  if (currentOverride === themeKey) {
    // Clicking the already-selected manual button toggles back to automatic time-of-day
    try {
      sessionStorage.removeItem('theme_override');
    } catch (e) {}
    if (typeof STATE !== 'undefined') STATE.themeOverride = null;
    const autoKey = getTimeThemeKey();
    applyTheme(THEMES[autoKey], autoKey);
    if (typeof showToast === 'function') {
      showToast(`Automatic time-of-day restored (${THEMES[autoKey].name})`, 'info');
    }
    return;
  }

  try {
    sessionStorage.setItem('theme_override', themeKey);
  } catch (e) {}
  if (typeof STATE !== 'undefined') STATE.themeOverride = themeKey;
  applyTheme(THEMES[themeKey], themeKey);
  if (typeof showToast === 'function') {
    showToast(`Theme set to ${THEMES[themeKey].name}`, 'success');
  }
}

// Inject standard switcher and preload styles into document
function injectThemeStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('lol-theme-styles')) return;
  const style = document.createElement('style');
  style.id = 'lol-theme-styles';
  style.textContent = `
    html.preload-theme,
    html.preload-theme *,
    html.preload-theme body {
      transition: none !important;
      -webkit-transition: none !important;
    }
    .theme-switcher-manual {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      margin-top: 14px;
    }
    .theme-btn {
      background: var(--glass-bg, rgba(255, 255, 255, 0.4));
      border: 1.5px solid var(--glass-border, rgba(0, 0, 0, 0.08));
      border-radius: 50%;
      width: 32px;
      height: 32px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      line-height: 1;
      opacity: 0.7;
      transition: all 0.25s ease;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
      padding: 0;
    }
    .theme-btn:hover {
      opacity: 1;
      transform: translateY(-1px) scale(1.08);
      border-color: var(--accent-primary);
    }
    .theme-btn.active {
      opacity: 1;
      transform: scale(1.12);
      border-color: var(--accent-primary);
      box-shadow: 0 0 0 2px var(--card-hover-glow, rgba(245, 166, 35, 0.3)), 0 4px 10px rgba(0, 0, 0, 0.08);
      background: var(--surface-elevated, rgba(255, 255, 255, 0.65));
    }
  `;
  if (document.head) {
    document.head.appendChild(style);
  }
}

// Expose globally
window.THEMES = THEMES;
window.getTimeThemeKey = getTimeThemeKey;
window.updateTheme = updateTheme;
window.applyTheme = applyTheme;
window.setThemeOverride = setThemeOverride;

/* =========================================================================
   INSTANT EXECUTION ON PAGE LOAD
   - On Refresh (reload): ALWAYS resets to Automatic Real-Time Syncing!
   - On Navigation: keeps manual selection across pages in current session!
   ========================================================================= */
(function initImmediate() {
  // If page was refreshed/reloaded, reset to Automatic Real-Time Syncing (Default)
  if (isPageRefresh()) {
    try {
      sessionStorage.removeItem('theme_override');
    } catch (e) {}
  }

  // Purge any old localStorage override from previous versions
  try {
    localStorage.removeItem('theme_override');
  } catch (e) {}

  // Apply styles & disable transition during initial paint
  document.documentElement.classList.add('preload-theme');
  injectThemeStyles();

  // Immediately apply theme (0ms delay)
  updateTheme(true);

  // Enable smooth CSS transitions right after the first frame is rendered
  if (typeof window !== 'undefined' && window.requestAnimationFrame) {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.documentElement.classList.remove('preload-theme');
      });
    });
  } else {
    setTimeout(() => {
      document.documentElement.classList.remove('preload-theme');
    }, 50);
  }
})();

/* =========================================================================
   AUTOMATIC CONTINUOUS REAL-TIME SYNC
   ========================================================================= */
// Fast polling every 10 seconds to catch hour transitions without delay
setInterval(() => updateTheme(false), 10000);

// Instant re-check on tab visibility change, focus, and DOMContentLoaded
if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) updateTheme(false);
  });
  window.addEventListener('focus', () => updateTheme(false));
  document.addEventListener('DOMContentLoaded', () => {
    injectThemeStyles();
    updateTheme(true);
  });
}
