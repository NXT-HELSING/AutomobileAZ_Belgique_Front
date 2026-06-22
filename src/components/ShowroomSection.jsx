import React from 'react';

// ─── Inline styles as a design token object ───────────────────────────────
const tokens = {
  red: '#C0392B',
  redLight: '#FDF0EF',
  redDark: '#A93226',
  black: '#111111',
  charcoal: '#1A1A1A',
  grey: '#555555',
  greyLight: '#AAAAAA',
  bg: '#F5F2ED',
  white: '#FFFFFF',
  border: 'rgba(0,0,0,0.07)',
  green: '#1A8845',
  greenLight: '#EAFBF0',
};

// ─── Sub-components ───────────────────────────────────────────────────────

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.6 19.79 19.79 0 01.21 5h3.09A2 2 0 015.26 6.95c.24 1.37.72 2.7 1.38 3.93L5 12.5a16 16 0 006.5 6.5l1.62-1.64c1.23.66 2.56 1.14 3.93 1.38A2 2 0 0119 16.92z"/>
  </svg>
);

const NavIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

// ─── FeaturePill ──────────────────────────────────────────────────────────
const FeaturePill = ({ icon, title, desc }) => (
  <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    background: tokens.white,
    borderRadius: '14px',
    padding: '18px 20px',
    border: `1px solid ${tokens.border}`,
    transition: 'box-shadow 0.22s ease, transform 0.22s ease',
  }}
    onMouseEnter={e => {
      e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.09)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    <div style={{
      width: 42, height: 42,
      background: tokens.redLight,
      borderRadius: '10px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
      color: tokens.red,
    }}>
      {icon}
    </div>
    <div>
      <strong style={{
        display: 'block',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '14px',
        fontWeight: 700,
        color: tokens.black,
        marginBottom: '4px',
      }}>{title}</strong>
      <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.55, margin: 0 }}>{desc}</p>
    </div>
  </div>
);

// ─── StatStrip ───────────────────────────────────────────────────────────
const stats = [
  { num: '500+', label: 'Véhicules vendus' },
  { num: '12 ans', label: "D'expérience" },
  { num: '98%', label: 'Clients satisfaits' },
];

const StatStrip = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    background: tokens.black,
    borderRadius: '20px',
    overflow: 'hidden',
    marginTop: '48px',
  }}>
    {stats.map((s, i) => (
      <div key={i} style={{
        padding: '28px 20px',
        textAlign: 'center',
        borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}>
        <span style={{
          display: 'block',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '30px',
          fontWeight: 800,
          color: tokens.white,
          lineHeight: 1,
          marginBottom: '6px',
        }}>
          {s.num.replace(/\+|%|ans/g, '')}
          <span style={{ color: tokens.red }}>{s.num.match(/\+|%|ans/)?.[0]}</span>
        </span>
        <span style={{
          fontSize: '11px',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.42)',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
        }}>{s.label}</span>
      </div>
    ))}
  </div>
);

// ─── InfoRow ─────────────────────────────────────────────────────────────
const InfoRow = ({ icon, label, children, isLast }) => (
  <div style={{
    display: 'flex',
    gap: '18px',
    alignItems: 'flex-start',
    padding: '18px 0',
    borderBottom: isLast ? 'none' : `1px solid #F0EDE8`,
  }}>
    <div style={{
      width: 40, height: 40,
      background: tokens.redLight,
      borderRadius: '10px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
      color: tokens.red,
    }}>
      {icon}
    </div>
    <div>
      <strong style={{
        display: 'block',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '13px',
        fontWeight: 700,
        color: tokens.black,
        marginBottom: '4px',
        letterSpacing: '0.02em',
      }}>{label}</strong>
      {children}
    </div>
  </div>
);

// ─── Main Section Component ───────────────────────────────────────────────
const ShowroomSection = () => {
  return (
    <>
      {/* Google Font import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <section style={{
        background: tokens.bg,
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Montserrat', sans-serif",
      }}>

        {/* Ghost watermark text */}
        <div aria-hidden="true" style={{
          position: 'absolute',
          top: 40, right: -30,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '120px',
          fontWeight: 800,
          color: 'rgba(0,0,0,0.03)',
          letterSpacing: '0.15em',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        }}>SHOWROOM</div>

        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}>

            {/* ── LEFT ─────────────────────────────────────── */}
            <div>
              {/* Section label */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: tokens.red,
                marginBottom: '20px',
              }}>
                <span style={{ display: 'block', width: '28px', height: '2px', background: tokens.red, flexShrink: 0 }} />
                Notre Showroom Unique
              </div>

              {/* Title */}
              <h2 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(34px, 4vw, 50px)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: tokens.black,
                marginBottom: '24px',
                maxWidth: '480px',
              }}>
                Une expérience d'achat<br />
                de confiance{' '}
                <em style={{ fontStyle: 'normal', color: tokens.red }}>à Meise</em>
              </h2>

              {/* Body copy */}
              <p style={{
                fontSize: '15px',
                lineHeight: 1.75,
                color: tokens.grey,
                maxWidth: '440px',
                marginBottom: '16px',
              }}>
                Situé aux portes de Bruxelles à Meise, notre showroom vous accueille dans un cadre chaleureux et professionnel. Chaque véhicule est méticuleusement sélectionné, inspecté et préparé avant de vous être présenté.
              </p>
              <p style={{
                fontSize: '15px',
                lineHeight: 1.75,
                color: tokens.grey,
                maxWidth: '440px',
                marginBottom: '0',
              }}>
                Berline confortable, SUV familial ou citadine économique — notre équipe d'experts vous accompagne de l'essai routier jusqu'aux formalités administratives.
              </p>

              {/* Feature pills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '36px' }}>
                <FeaturePill
                  icon={<CheckIcon />}
                  title="Service Sur-Mesure"
                  desc="Essai personnalisé et conseils neutres d'experts adaptés à vos besoins réels."
                />
                <FeaturePill
                  icon={<ShieldIcon />}
                  title="Garantie Totale"
                  desc="Inspection complète et garantie certifiée sur chaque véhicule d'occasion."
                />
              </div>

              {/* Stat strip */}
              <StatStrip />
            </div>

            {/* ── RIGHT — INFO CARD ─────────────────────────── */}
            <div>
              <div style={{
                background: tokens.white,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.09)',
                position: 'sticky',
                top: '40px',
              }}>

                {/* Card header */}
                <div style={{
                  background: tokens.black,
                  padding: '34px 38px 30px',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Decorative circle */}
                  <div aria-hidden="true" style={{
                    position: 'absolute',
                    bottom: -40, right: -40,
                    width: 140, height: 140,
                    borderRadius: '50%',
                    background: 'rgba(192,57,43,0.22)',
                  }} />
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: tokens.red,
                    marginBottom: '8px',
                  }}>Retrouvez-nous</div>
                  <h3 style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '22px',
                    fontWeight: 800,
                    color: tokens.white,
                    lineHeight: 1.3,
                  }}>
                    Informations<br />Pratiques
                  </h3>
                </div>

                {/* Card body */}
                <div style={{ padding: '28px 38px 36px' }}>

                  <InfoRow icon={<MapPinIcon />} label="Adresse">
                    <p style={{ fontSize: '13.5px', color: tokens.grey, lineHeight: 1.55, margin: 0 }}>
                      Wellingstraat 89<br />1861 Meise, Belgique
                    </p>
                  </InfoRow>

                  <InfoRow icon={<ClockIcon />} label="Heures d'ouverture">
                    <p style={{ fontSize: '13.5px', color: tokens.grey, lineHeight: 1.55, margin: 0 }}>
                      Lundi — Samedi : 09h00 – 18h30
                    </p>
                    <p style={{ fontSize: '12px', color: tokens.greyLight, margin: '2px 0 6px' }}>
                      Dimanche &amp; Jours fériés : Fermé
                    </p>
                    {/* Open-now badge */}
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: tokens.greenLight,
                      color: tokens.green,
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      padding: '4px 10px',
                      borderRadius: '20px',
                    }}>
                      <span style={{
                        width: 6, height: 6,
                        background: tokens.green,
                        borderRadius: '50%',
                        display: 'inline-block',
                      }} />
                      Ouvert maintenant
                    </span>
                  </InfoRow>

                  <InfoRow icon={<PhoneIcon />} label="Contact direct" isLast>
                    <p style={{ fontSize: '13.5px', color: tokens.grey, lineHeight: 1.55, margin: 0 }}>
                      +32 (0)2 251 19 90<br />info@automobileaz.be
                    </p>
                  </InfoRow>

                  {/* CTA */}
                  <a
                    href="https://maps.google.com/?q=Wellingstraat+89,+1861+Meise,+Belgique"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      background: tokens.red,
                      color: tokens.white,
                      textDecoration: 'none',
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '14px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      borderRadius: '14px',
                      padding: '17px 24px',
                      marginTop: '28px',
                      transition: 'background 0.2s ease, transform 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = tokens.redDark;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = tokens.red;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <NavIcon />
                    Obtenir l'itinéraire
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ShowroomSection;