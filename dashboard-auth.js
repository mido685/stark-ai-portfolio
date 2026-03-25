// ============================================
// STARK AI — Password-Protected Dashboard Auth
// ============================================
// 1. Place this file next to script.js
// 2. In index.html, load it BEFORE script.js:
//       <script src="dashboard-auth.js"></script>
//       <script src="script.js"></script>
// 3. Change the password on the next line ↓

const STARK_DASHBOARD_PASSWORD = 'stark2026'; // ← CHANGE THIS

// Session duration in minutes (stay unlocked after correct password)
const SESSION_MINUTES = 120;
const SESSION_KEY = 'stark_dash_auth';

// ============================================
// INJECT CSS — uses your exact CSS variables
// ============================================
function injectAuthStyles() {
    const css = `
    /* ── Auth Gate Backdrop ── */
    #starkAuthGate {
        display: none;
        position: fixed;
        inset: 0;
        z-index: 9999;
        background: rgba(10, 14, 39, 0.92);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        align-items: center;
        justify-content: center;
        animation: authFadeIn 0.3s ease;
    }
    #starkAuthGate.active { display: flex; }

    @keyframes authFadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* ── Auth Box — matches .dashboard-panel / .project-card style ── */
    .auth-modal {
        background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
        border: 2px solid var(--accent-color);
        border-radius: 10px;
        width: min(420px, 92vw);
        text-align: center;
        position: relative;
        overflow: hidden;
        box-shadow:
            0 0 40px rgba(0, 212, 255, 0.25),
            0 20px 60px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(0, 212, 255, 0.08);
        animation: authSlideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    /* shimmer sweep — same as .project-card::before */
    .auth-modal::before {
        content: '';
        position: absolute;
        top: 0; left: -100%;
        width: 100%; height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.12), transparent);
        animation: authShimmer 3s ease-in-out infinite;
        pointer-events: none;
    }
    @keyframes authShimmer {
        0%   { left: -100%; }
        60%  { left: 100%; }
        100% { left: 100%; }
    }

    @keyframes authSlideUp {
        from { transform: translateY(28px) scale(0.96); opacity: 0; }
        to   { transform: translateY(0) scale(1); opacity: 1; }
    }

    /* ── Header bar — matches .dashboard-header ── */
    .auth-header {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        padding: 22px 28px 18px;
        border-bottom: 1px solid var(--border-color);
        background: rgba(0, 212, 255, 0.05);
        position: relative;
    }

    /* spinning logo ring — matches .logo-img logoGlow + rotation */
    .auth-logo-wrap {
        width: 52px; height: 52px;
        position: relative;
        flex-shrink: 0;
    }
    .auth-logo-wrap img {
        width: 52px; height: 52px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid var(--accent-color);
        position: relative; z-index: 2;
        clip-path: circle(50%);
        animation: logoGlow 3s ease-in-out infinite;
    }
    .auth-ring {
        position: absolute;
        inset: -4px;
        border-radius: 50%;
        border: 2px solid transparent;
        border-top-color: var(--accent-color);
        border-right-color: var(--success-color);
        animation: authRingSpin 2s linear infinite;
        z-index: 3;
    }
    .auth-ring-slow {
        position: absolute;
        inset: -8px;
        border-radius: 50%;
        border: 1px solid transparent;
        border-bottom-color: rgba(0, 212, 255, 0.35);
        animation: authRingSpin 3.5s linear infinite reverse;
        z-index: 3;
    }
    @keyframes authRingSpin { to { transform: rotate(360deg); } }

    .auth-header-text h2 {
        font-family: 'Stardos Stencil', sans-serif;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 2px;
        background: linear-gradient(135deg, var(--accent-color), var(--success-color));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 0 0 2px;
    }
    .auth-header-text p {
        font-size: 11px;
        color: var(--text-secondary);
        letter-spacing: 1.5px;
        text-transform: uppercase;
        margin: 0;
    }

    /* restricted badge */
    .auth-badge {
        position: absolute;
        top: 14px; right: 16px;
        background: rgba(0, 212, 255, 0.1);
        border: 1px solid var(--accent-color);
        border-radius: 20px;
        padding: 3px 10px;
        font-size: 9px;
        color: var(--accent-color);
        letter-spacing: 1.5px;
        text-transform: uppercase;
        font-weight: 600;
    }

    /* ── Body ── */
    .auth-body {
        padding: 28px 32px 26px;
    }

    .auth-field-label {
        display: block;
        font-size: 11px;
        color: var(--text-secondary);
        letter-spacing: 1.5px;
        text-transform: uppercase;
        text-align: left;
        margin-bottom: 8px;
    }

    /* input — matches .contact-form input */
    .auth-input-row {
        position: relative;
        margin-bottom: 8px;
    }
    #starkPwInput {
        width: 100%;
        background: rgba(0, 212, 255, 0.05);
        border: 1px solid var(--border-color);
        color: var(--text-primary);
        padding: 14px 48px 14px 16px;
        border-radius: 8px;
        font-family: inherit;
        font-size: 15px;
        letter-spacing: 3px;
        outline: none;
        transition: var(--transition);
        box-sizing: border-box;
    }
    #starkPwInput::placeholder {
        letter-spacing: 0;
        color: rgba(176, 184, 212, 0.4);
    }
    #starkPwInput:focus {
        border-color: var(--accent-color);
        box-shadow: 0 0 15px rgba(0, 212, 255, 0.3);
        background: rgba(0, 212, 255, 0.1);
    }
    #starkPwInput.auth-shake {
        border-color: var(--danger-color);
        box-shadow: 0 0 15px rgba(255, 51, 102, 0.3);
        animation: authShake 0.4s ease;
    }
    @keyframes authShake {
        0%,100% { transform: translateX(0); }
        25%      { transform: translateX(-8px); }
        75%      { transform: translateX(8px); }
    }

    /* eye toggle */
    #starkEyeBtn {
        position: absolute;
        right: 14px; top: 50%;
        transform: translateY(-50%);
        background: none; border: none;
        cursor: pointer;
        color: var(--text-secondary);
        font-size: 15px;
        padding: 0; line-height: 1;
        transition: var(--transition);
    }
    #starkEyeBtn:hover { color: var(--accent-color); }

    /* error message */
    .auth-error {
        font-size: 12px;
        color: var(--danger-color);
        text-align: left;
        min-height: 18px;
        margin-bottom: 18px;
        opacity: 0;
        transition: opacity 0.2s;
    }
    .auth-error.visible { opacity: 1; }

    /* submit — matches .contact-form button */
    #starkAuthBtn {
        width: 100%;
        padding: 15px;
        background: linear-gradient(135deg, var(--accent-color), var(--success-color));
        border: none;
        border-radius: 8px;
        color: var(--primary-color);
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        cursor: pointer;
        font-family: inherit;
        transition: var(--transition);
        margin-bottom: 14px;
    }
    #starkAuthBtn:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 35px rgba(0, 212, 255, 0.4);
    }
    #starkAuthBtn:active { transform: scale(0.98); }

    /* cancel */
    #starkCancelBtn {
        background: none; border: none;
        font-size: 12px;
        color: var(--text-secondary);
        cursor: pointer;
        letter-spacing: 1px;
        font-family: inherit;
        transition: var(--transition);
        width: 100%;
    }
    #starkCancelBtn:hover { color: var(--accent-color); }

    /* ── Success flash overlay ── */
    .auth-success {
        position: absolute; inset: 0;
        background: rgba(10, 14, 39, 0.93);
        border-radius: 10px;
        display: flex; align-items: center; justify-content: center;
        flex-direction: column; gap: 14px;
        opacity: 0; pointer-events: none;
        transition: opacity 0.3s;
        z-index: 10;
    }
    .auth-success.visible { opacity: 1; }
    .auth-success-icon {
        font-size: 48px;
        color: var(--success-color);
        text-shadow: 0 0 30px rgba(0, 255, 136, 0.7);
        animation: authPopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes authPopIn {
        from { transform: scale(0) rotate(-20deg); }
        to   { transform: scale(1) rotate(0deg); }
    }
    .auth-success-text {
        font-family: 'Stardos Stencil', sans-serif;
        background: linear-gradient(135deg, var(--accent-color), var(--success-color));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-size: 18px;
        letter-spacing: 3px;
        text-transform: uppercase;
    }

    /* 🔒 lock icon prefix on the nav Dashboard button */
    #dashboardToggle::before {
        content: '🔒 ';
        font-size: 11px;
    }
    `;
    const el = document.createElement('style');
    el.id = 'stark-auth-css';
    el.textContent = css;
    document.head.appendChild(el);
}

// ============================================
// INJECT HTML
// ============================================
function injectAuthHTML() {
    const html = `
    <div id="starkAuthGate">
        <div class="auth-modal">

            <div class="auth-header">
                <div class="auth-logo-wrap">
                    <img src="logo.gif" alt="STARK AI">
                    <div class="auth-ring"></div>
                    <div class="auth-ring-slow"></div>
                </div>
                <div class="auth-header-text">
                    <h2>STARK AI</h2>
                    <p>Dashboard Access</p>
                </div>
                <span class="auth-badge">Restricted</span>
            </div>

            <div class="auth-body">
                <label class="auth-field-label" for="starkPwInput">Enter Password</label>
                <div class="auth-input-row">
                    <input
                        type="password"
                        id="starkPwInput"
                        placeholder="••••••••"
                        autocomplete="current-password"
                        spellcheck="false"
                    />
                    <button id="starkEyeBtn" type="button" title="Show/hide password">👁</button>
                </div>
                <p class="auth-error" id="starkAuthErr">Incorrect password. Try again.</p>

                <button id="starkAuthBtn" type="button">Unlock Dashboard</button>
                <button id="starkCancelBtn" type="button">Cancel</button>
            </div>

            <div class="auth-success" id="starkAuthSuccess">
                <div class="auth-success-icon">✓</div>
                <div class="auth-success-text">Access Granted</div>
            </div>

        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
}

// ============================================
// SESSION HELPERS
// ============================================
function isSessionValid() {
    try {
        const raw = sessionStorage.getItem(SESSION_KEY);
        if (!raw) return false;
        const { ts } = JSON.parse(raw);
        return (Date.now() - ts) < SESSION_MINUTES * 60 * 1000;
    } catch { return false; }
}
function startSession() {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ ts: Date.now() }));
}

// ============================================
// GATE LOGIC
// ============================================
function openAuthGate(onSuccess) {
    const gate    = document.getElementById('starkAuthGate');
    const input   = document.getElementById('starkPwInput');
    const btn     = document.getElementById('starkAuthBtn');
    const eye     = document.getElementById('starkEyeBtn');
    const err     = document.getElementById('starkAuthErr');
    const cancel  = document.getElementById('starkCancelBtn');
    const success = document.getElementById('starkAuthSuccess');

    // reset state on every open
    input.value = '';
    input.type  = 'password';
    eye.textContent = '👁';
    err.classList.remove('visible');
    success.classList.remove('visible');
    input.classList.remove('auth-shake');

    gate.classList.add('active');
    setTimeout(() => input.focus(), 380);

    function closeGate() { gate.classList.remove('active'); }

    function attempt() {
        if (input.value === STARK_DASHBOARD_PASSWORD) {
            startSession();
            err.classList.remove('visible');
            success.classList.add('visible');
            setTimeout(() => {
                closeGate();
                success.classList.remove('visible');
                onSuccess();
            }, 1300);
        } else {
            err.classList.add('visible');
            input.classList.remove('auth-shake');
            void input.offsetWidth; // force reflow so animation restarts
            input.classList.add('auth-shake');
            input.addEventListener('animationend', () => {
                input.classList.remove('auth-shake');
            }, { once: true });
        }
    }

    btn.onclick     = attempt;
    cancel.onclick  = closeGate;
    input.onkeydown = (e) => { if (e.key === 'Enter') attempt(); };
    eye.onclick = () => {
        input.type = input.type === 'password' ? 'text' : 'password';
        eye.textContent = input.type === 'password' ? '👁' : '🙈';
    };
    // click outside modal to cancel
    gate.onclick = (e) => { if (e.target === gate) closeGate(); };
}

// ============================================
// OPEN DASHBOARD PANEL
// ============================================
function openDashboardPanel() {
    const panel   = document.getElementById('dashboardPanel');
    const overlay = document.getElementById('dashboardOverlay');
    if (panel)   panel.classList.add('active');
    if (overlay) overlay.classList.add('active');
}

// ============================================
// INTERCEPT DASHBOARD BUTTON
// ============================================
function initDashboardAuth() {
    injectAuthStyles();
    injectAuthHTML();

    setTimeout(() => {
        const btn = document.getElementById('dashboardToggle');
        if (!btn) return;

        // clone to remove existing listeners from script.js
        const fresh = btn.cloneNode(true);
        btn.parentNode.replaceChild(fresh, btn);

        fresh.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            if (isSessionValid()) {
                openDashboardPanel();
            } else {
                openAuthGate(() => openDashboardPanel());
            }
        });
    }, 120);
}

document.addEventListener('DOMContentLoaded', initDashboardAuth);
