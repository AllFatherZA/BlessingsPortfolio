import { Col } from "react-bootstrap";
import React, { memo } from "react";

const ProjectIllustration = memo(({ variant }) => {
  const shared = (
    <>
      <defs>
        <linearGradient id="artGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="320" height="240" rx="22" fill="#0b1120" />
      <circle className="art-orbit orbit-1" cx="60" cy="55" r="40" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
      <circle className="art-orbit orbit-2" cx="250" cy="175" r="52" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
    </>
  );

  const variantMap = {
    trading: (
      <svg viewBox="0 0 320 240" className="proj-art-svg" role="img" aria-label="Trading illustration">
        {shared}
        <g className="float-slow">
          <path d="M35 170 L85 138 L120 149 L160 98 L200 122 L250 74 L290 105" fill="none" stroke="url(#artGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="chart-line" />
          <path d="M35 193 H290" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <rect x="40" y="150" width="20" height="40" rx="4" fill="#22d3ee" opacity="0.85" />
          <rect x="70" y="128" width="20" height="62" rx="4" fill="#8b5cf6" opacity="0.9" />
          <rect x="100" y="140" width="20" height="50" rx="4" fill="#ec4899" opacity="0.85" />
          <rect x="130" y="110" width="20" height="80" rx="4" fill="#a78bfa" opacity="0.8" />
          <path d="M255 45 L285 45 L285 75" stroke="#8b5cf6" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M285 45 L268 58" stroke="#8b5cf6" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 320 240" className="proj-art-svg" role="img" aria-label="AI illustration">
        {shared}
        <g className="pulse-glow">
          <rect x="66" y="68" width="188" height="110" rx="22" fill="rgba(15,23,42,0.8)" stroke="rgba(255,255,255,0.18)" />
          <circle cx="110" cy="120" r="18" fill="#22d3ee" />
          <circle cx="160" cy="120" r="18" fill="#8b5cf6" />
          <circle cx="210" cy="120" r="18" fill="#ec4899" />
          <path d="M110 120 H160 M160 120 H210" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
          <path d="M132 95 L148 120 L132 145 M188 95 L172 120 L188 145" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
          <circle className="dot-pulse" cx="90" cy="78" r="5" fill="#22d3ee" />
          <circle className="dot-pulse delay-1" cx="230" cy="170" r="5" fill="#ec4899" />
        </g>
      </svg>
    ),
    systems: (
      <svg viewBox="0 0 320 240" className="proj-art-svg" role="img" aria-label="Systems illustration">
        {shared}
        <g className="float-slow">
          <rect x="40" y="82" width="65" height="58" rx="12" fill="rgba(139,92,246,0.8)" />
          <rect x="128" y="60" width="75" height="82" rx="14" fill="rgba(34,211,238,0.75)" />
          <rect x="220" y="92" width="58" height="52" rx="12" fill="rgba(236,72,153,0.8)" />
          <path d="M105 111 H128 M203 101 H220 M156 142 V175 H110 V152 M156 175 H120" stroke="rgba(255,255,255,0.75)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="110" cy="152" r="8" fill="#f8fafc" />
          <rect x="72" y="170" width="170" height="24" rx="12" fill="rgba(255,255,255,0.07)" />
        </g>
      </svg>
    ),
    data: (
      <svg viewBox="0 0 320 240" className="proj-art-svg" role="img" aria-label="Data science illustration">
        {shared}
        <g className="pulse-glow">
          <path d="M40 170 C80 145, 110 150, 138 120 S202 90, 242 120 S280 70, 290 50" fill="none" stroke="url(#artGradient)" strokeWidth="4" strokeLinecap="round" className="chart-line" />
          <circle cx="118" cy="118" r="8" fill="#8b5cf6" />
          <circle cx="204" cy="102" r="8" fill="#22d3ee" />
          <rect x="60" y="184" width="16" height="35" rx="4" fill="#8b5cf6" opacity="0.8" />
          <rect x="92" y="160" width="16" height="59" rx="4" fill="#22d3ee" opacity="0.8" />
          <rect x="124" y="138" width="16" height="81" rx="4" fill="#ec4899" opacity="0.8" />
          <rect x="156" y="150" width="16" height="69" rx="4" fill="#a78bfa" opacity="0.8" />
        </g>
      </svg>
    ),
    website: (
      <svg viewBox="0 0 320 240" className="proj-art-svg" role="img" aria-label="Website illustration">
        {shared}
        <g className="float-slow">
          <rect x="48" y="48" width="224" height="144" rx="18" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.15)" />
          <rect x="48" y="48" width="224" height="24" rx="18" fill="rgba(255,255,255,0.05)" />
          <circle cx="68" cy="60" r="5" fill="#ec4899" />
          <circle cx="86" cy="60" r="5" fill="#22d3ee" />
          <circle cx="104" cy="60" r="5" fill="#a78bfa" />
          <rect x="66" y="92" width="118" height="12" rx="6" fill="rgba(255,255,255,0.75)" />
          <rect x="66" y="113" width="164" height="10" rx="5" fill="rgba(255,255,255,0.3)" />
          <rect x="66" y="133" width="132" height="10" rx="5" fill="rgba(255,255,255,0.18)" />
          <rect x="214" y="95" width="42" height="46" rx="10" fill="url(#artGradient)" opacity="0.9" />
        </g>
      </svg>
    ),
    chatbot: (
      <svg viewBox="0 0 320 240" className="proj-art-svg" role="img" aria-label="Chatbot illustration">
        {shared}
        <g className="pulse-glow">
          <rect x="66" y="58" width="188" height="112" rx="20" fill="rgba(15,23,42,0.82)" stroke="rgba(255,255,255,0.14)" />
          <rect x="84" y="80" width="104" height="18" rx="9" fill="rgba(255,255,255,0.24)" />
          <rect x="84" y="110" width="150" height="18" rx="9" fill="rgba(255,255,255,0.16)" />
          <rect x="84" y="140" width="130" height="18" rx="9" fill="rgba(255,255,255,0.12)" />
          <circle cx="224" cy="125" r="26" fill="url(#artGradient)" />
          <circle cx="224" cy="125" r="11" fill="#0f172a" />
          <path d="M220 126 L224 130 L234 116" stroke="#f8fafc" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    ),
    community: (
      <svg viewBox="0 0 320 240" className="proj-art-svg" role="img" aria-label="Community illustration">
        {shared}
        <g className="float-slow">
          <rect x="58" y="52" width="68" height="50" rx="14" fill="rgba(139,92,246,0.8)" />
          <rect x="144" y="72" width="76" height="58" rx="16" fill="rgba(34,211,238,0.76)" />
          <rect x="96" y="138" width="130" height="44" rx="16" fill="rgba(236,72,153,0.75)" />
          <circle cx="90" cy="80" r="8" fill="#fff" />
          <circle cx="176" cy="100" r="8" fill="#fff" />
          <circle cx="150" cy="160" r="8" fill="#fff" />
          <path d="M120 80 H160 M200 100 H220 M170 160 H210" stroke="rgba(255,255,255,0.8)" strokeWidth="3" strokeLinecap="round" />
        </g>
      </svg>
    ),
  };

  return variantMap[variant] || (
    <svg viewBox="0 0 320 240" className="proj-art-svg" role="img" aria-label="Project illustration">
      {shared}
      <g className="pulse-glow">
        <rect x="70" y="80" width="180" height="84" rx="18" fill="rgba(15,23,42,0.82)" stroke="rgba(255,255,255,0.18)" />
        <circle cx="110" cy="122" r="22" fill="url(#artGradient)" opacity="0.9" />
        <path d="M102 122 L109 129 L124 112" stroke="#f8fafc" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="150" y="102" width="72" height="12" rx="6" fill="rgba(255,255,255,0.8)" />
        <rect x="150" y="124" width="56" height="10" rx="5" fill="rgba(255,255,255,0.35)" />
      </g>
    </svg>
  );
});

export const ProjectCard = memo(({ title, description, imgUrl, link, variant }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {variant ? (
          <div className="proj-art">
            <ProjectIllustration variant={variant} />
          </div>
        ) : (
          <img src={imgUrl} alt={title} className="img" />
        )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <span style={{ display: 'block', marginTop: '10px' }}>
            <a href={link} className="pill-button">Go to</a>
          </span>
        </div>
      </div>
    </Col>
  )
});