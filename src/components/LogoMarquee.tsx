import { memo, useEffect, useRef, useState, type CSSProperties } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

type Logo = {
  src: string;
  alt?: string;
};

type MarqueeRowData = {
  id: string;
  logos: Logo[];
  speed?: number;
  reverse?: boolean;
};

type MarqueeRowProps = Omit<MarqueeRowData, "id">;

type LogoMarqueeProps = {
  rows: MarqueeRowData[];
  ctaLabel?: string;
  ctaHref?: string;
};

const MOBILE = "@media (max-width: 640px)";

const CAN_HOVER = "@media (hover: hover)";

const scroll = keyframes({
  from: { transform: "translateX(0)" },
  to: { transform: "translateX(calc(-100% / var(--copies)))" },
});

const Wrapper = styled.section({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: 48,
  width: "100%",
  padding: "40px 0",
  overflow: "hidden",
  maskImage:
    "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",

  [CAN_HOVER]: {
    "&:hover > div, &:focus-within > div": {
      filter: "blur(4px) grayscale(1)",
      opacity: 0.7,
    },

    "&:hover > div > div": {
      animationPlayState: "paused",
    },

    "&:hover > a, &:focus-within > a": {
      opacity: 1,
      transform: "translate(-50%, -50%)",
      pointerEvents: "auto",
    },
  },

  [MOBILE]: {
    gap: 32,
  },
});

const Row = styled.div({
  width: "100%",
  overflow: "hidden",
  transition: "filter 0.4s ease, opacity 0.4s ease",
});

const Track = styled.div<{ duration: number; reverse: boolean }>(
  ({ duration, reverse }) => ({
    display: "flex",
    width: "max-content",
    animation: `${scroll} ${duration}s linear infinite`,
    animationDirection: reverse ? "reverse" : "normal",
    willChange: "transform",

    "@media (prefers-reduced-motion: reduce)": {
      animationDuration: `${duration * 2}s`,
    },
  }),
);

const Group = styled.ul({
  display: "flex",
  flexShrink: 0,
  alignItems: "center",
  gap: 96,
  margin: 0,
  padding: "0 96px 0 0",
  listStyle: "none",

  [MOBILE]: {
    gap: 56,
    paddingRight: 56,
  },
});

const Item = styled.li({
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  height: 58,
  opacity: 0.85,

  img: {
    display: "block",
    height: "100%",
    width: "auto",
    objectFit: "contain",
  },

  [MOBILE]: {
    height: 32,
  },
});

const Cta = styled.a(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  zIndex: 1,

  display: "inline-flex",
  alignItems: "center",
  gap: 6,

  color: theme.color.text,
  fontSize: 15,
  fontWeight: 500,
  textDecoration: "none",
  whiteSpace: "nowrap",

  opacity: 0,
  transform: "translate(-50%, -40%)",
  pointerEvents: "none",
  transition: "opacity 0.4s ease, transform 0.4s ease",

  "&:focus-visible": {
    opacity: 1,
    transform: "translate(-50%, -50%)",
    pointerEvents: "auto",
  },

  "& > span": {
    color: "#2563eb",
    transition: "transform 0.2s ease",
  },

  "&:hover > span": {
    transform: "translateX(4px)",
  },
}));

const DEFAULT_DURATION = 40;

function MarqueeRowBase({
  logos,
  speed = 50,
  reverse = false,
}: MarqueeRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLUListElement>(null);
  const [metrics, setMetrics] = useState({ copies: 2, groupWidth: 0 });

  useEffect(() => {
    const row = rowRef.current;
    const group = groupRef.current;
    if (!row || !group) return undefined;

    const update = () => {
      const groupWidth = group.offsetWidth;
      if (!groupWidth) return;
      const copies = Math.ceil(row.clientWidth / groupWidth) + 1;
      setMetrics({ copies, groupWidth });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(row);
    observer.observe(group);
    return () => observer.disconnect();
  }, [logos]);

  const { copies, groupWidth } = metrics;
  const duration = groupWidth ? groupWidth / speed : DEFAULT_DURATION;
  const copyIds = Array.from({ length: copies }, (_, n) => `copy-${n}`);

  return (
    <Row ref={rowRef}>
      <Track
        duration={duration}
        reverse={reverse}
        style={{ "--copies": copies } as CSSProperties}
      >
        {copyIds.map((copyId, order) => (
          <Group
            key={copyId}
            ref={order === 0 ? groupRef : undefined}
            aria-hidden={order === 0 ? undefined : true}
          >
            {logos.map((logo) => (
              <Item key={logo.src}>
                <img
                  src={logo.src}
                  alt={order === 0 ? (logo.alt ?? "") : ""}
                  draggable={false}
                />
              </Item>
            ))}
          </Group>
        ))}
      </Track>
    </Row>
  );
}

const MarqueeRow = memo(MarqueeRowBase);

function LogoMarquee({
  rows,
  ctaLabel = "Meet our customers",
  ctaHref = "#customers",
}: LogoMarqueeProps) {
  return (
    <Wrapper>
      {rows.map((row) => (
        <MarqueeRow
          key={row.id}
          logos={row.logos}
          speed={row.speed}
          reverse={row.reverse}
        />
      ))}

      <Cta href={ctaHref}>
        {ctaLabel}
        <span aria-hidden="true">→</span>
      </Cta>
    </Wrapper>
  );
}

export default memo(LogoMarquee);
