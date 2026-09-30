import { useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Section = styled.section(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "80px 24px",
  background: theme.color.surface,

  "@media (max-width: 640px)": {
    padding: "40px 16px",
  },
}));

type Stat = { label: string; value: string };

type GlassProfileCardProps = {
  name?: string;
  role?: string;
  bio?: string;
  stats?: Stat[];
};

const defaultStats: Stat[] = [
  { label: "프로젝트", value: "24" },
  { label: "경력", value: "5년" },
  { label: "기여한 오픈소스", value: "12" },
];

const MOBILE = "@media (max-width: 640px)";

/**
 * 지금은 OS의 '동작 줄이기' 설정과 상관없이 항상 움직이도록 해둠.
 * 접근성을 위해 배포 전에는 아래 값으로 바꾸는 걸 권장:
 * "@media (prefers-reduced-motion: no-preference)"
 */
const MOTION_OK = "@media all";

/** theme.color.text 를 기준으로 투명도만 조절 → 화이트/다크 테마 모두 자동 대응 */
const tint = (color: string, percent: number) =>
  `color-mix(in srgb, ${color} ${percent}%, transparent)`;

/** 카드 안에서만 그려지는 알록달록한 메쉬 그라데이션 (전부 반투명이라 배경은 투명 유지) */
const MESH_GRADIENT = [
  "radial-gradient(circle at 10% 15%, rgba(255, 126, 179, 0.5), transparent 46%)",
  "radial-gradient(circle at 90% 10%, rgba(122, 125, 255, 0.5), transparent 46%)",
  "radial-gradient(circle at 85% 95%, rgba(79, 209, 232, 0.45), transparent 46%)",
  "radial-gradient(circle at 8% 92%, rgba(255, 196, 107, 0.35), transparent 42%)",
].join(", ");

/** 카드 안의 색 덩어리가 흘러 다니는 움직임 */
const drift = keyframes({
  from: { backgroundPosition: "0% 0%" },
  to: { backgroundPosition: "100% 100%" },
});

/** 유리 표면 위로 빛이 주기적으로 훑고 지나가는 움직임 (쉬는 구간 포함) */
const sheen = keyframes({
  "0%": { backgroundPosition: "130% 0" },
  "55%, 100%": { backgroundPosition: "-30% 0" },
});

const Card = styled.article(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  isolation: "isolate",

  display: "flex",
  alignItems: "center",
  gap: 56,

  width: "100%",
  maxWidth: 960,
  padding: "52px 56px",

  borderRadius: 32,

  background: `${MESH_GRADIENT}, ${tint(theme.color.text, 4)}`,
  backdropFilter: "blur(26px) saturate(180%)",
  WebkitBackdropFilter: "blur(26px) saturate(180%)",
  boxShadow: `0 30px 60px -20px rgba(40, 30, 90, 0.35), inset 0 1px 0 ${tint(
    theme.color.text,
    18,
  )}, inset 0 -1px 0 ${tint(theme.color.text, 6)}`,

  /* 그라데이션 유리 테두리: 빛을 받는 좌상단/우하단은 밝고 나머지는 옅게 */
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    zIndex: 0,

    padding: 1,
    borderRadius: "inherit",
    pointerEvents: "none",

    background: `linear-gradient(135deg, ${tint(theme.color.text, 55)}, ${tint(
      theme.color.text,
      6,
    )} 35%, ${tint(theme.color.text, 6)} 65%, ${tint(theme.color.text, 35)})`,
    mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
    maskComposite: "exclude",
    WebkitMask:
      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
    WebkitMaskComposite: "xor",
  },

  /* 유리 표면에 비치는 빛 반사 */
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    zIndex: 0,

    pointerEvents: "none",
    background:
      "linear-gradient(115deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 38%)",
  },

  "& > *": {
    position: "relative",
    zIndex: 1,
  },

  [MOTION_OK]: {
    /* 그라데이션이 움직일 여유 공간을 확보 */
    backgroundSize: "150% 150%",
    animation: `${drift} 6s ease-in-out infinite alternate`,

    /* 평소에는 멈춰 있다가, 커서가 카드 위에 있을 때만 재생 */
    animationPlayState: "paused",

    "&:hover": {
      animationPlayState: "running",
    },

    "&::after": {
      background:
        "linear-gradient(115deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.24) 45%, rgba(255, 255, 255, 0) 60%)",
      backgroundSize: "250% 100%",
      animation: `${sheen} 3s ease-in-out infinite`,
      animationPlayState: "paused",
    },

    "&:hover::after": {
      animationPlayState: "running",
    },
  },

  [MOBILE]: {
    flexDirection: "column",
    gap: 28,

    padding: "36px 22px 26px",
    borderRadius: 24,
  },
}));

const AvatarRing = styled.div(({ theme }) => ({
  position: "relative",
  flexShrink: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: 168,
  height: 168,

  borderRadius: "50%",
  background: "linear-gradient(135deg, #ff7eb3, #7a7dff 55%, #4fd1e8)",
  boxShadow: "0 18px 40px rgba(60, 50, 140, 0.35)",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 5,

    borderRadius: "50%",
    border: `1px solid ${tint(theme.color.text, 22)}`,

    background: `linear-gradient(145deg, ${tint(
      theme.color.text,
      14,
    )}, ${tint(theme.color.text, 4)})`,
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    boxShadow: `inset 0 1px 0 ${tint(theme.color.text, 30)}`,
  },

  [MOBILE]: {
    width: 120,
    height: 120,
  },
}));

const AvatarText = styled.span(({ theme }) => ({
  position: "relative",
  zIndex: 1,

  color: theme.color.text,

  fontSize: 48,
  fontWeight: 800,

  letterSpacing: "-2px",

  [MOBILE]: {
    fontSize: 36,
  },
}));

const Info = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  minWidth: 0,

  [MOBILE]: {
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },
});

const Name = styled.h1(({ theme }) => ({
  margin: 0,

  color: theme.color.text,

  fontSize: "clamp(28px, 4vw, 42px)",
  fontWeight: 800,
  lineHeight: 1.15,

  letterSpacing: "-1.2px",
}));

const Role = styled.p(({ theme }) => ({
  margin: "8px 0 0",

  color: tint(theme.color.text, 80),

  fontSize: 16,
  fontWeight: 600,
}));

const Bio = styled.p(({ theme }) => ({
  maxWidth: 480,
  margin: "18px 0 0",

  color: tint(theme.color.text, 70),

  fontSize: 15,
  lineHeight: 1.7,

  wordBreak: "keep-all",
}));

/** 통계 영역도 작은 유리 패널로 한 겹 더 */
const StatRow = styled.dl(({ theme }) => ({
  display: "flex",

  margin: "28px 0 0",
  padding: "16px 8px",

  borderRadius: 18,
  border: `1px solid ${tint(theme.color.text, 14)}`,
  background: tint(theme.color.text, 6),
  boxShadow: `inset 0 1px 0 ${tint(theme.color.text, 16)}`,

  [MOBILE]: {
    justifyContent: "center",
    width: "100%",
  },
}));

const StatItem = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 4,

  padding: "0 24px",

  "&:not(:first-of-type)": {
    borderLeft: `1px solid ${tint(theme.color.text, 14)}`,
  },

  [MOBILE]: {
    flex: 1,
    alignItems: "center",

    padding: "0 8px",
  },
}));

const StatValue = styled.dd(({ theme }) => ({
  margin: 0,

  color: theme.color.text,

  fontSize: 22,
  fontWeight: 700,

  letterSpacing: "-0.5px",
}));

const StatLabel = styled.dt(({ theme }) => ({
  color: tint(theme.color.text, 58),

  fontSize: 12,
}));

const ButtonRow = styled.div({
  display: "flex",
  gap: 10,

  marginTop: 24,

  [MOBILE]: {
    width: "100%",
  },
});

const Button = styled.button<{ variant: "primary" | "ghost" }>(
  ({ theme, variant }) => {
    const isPrimary = variant === "primary";

    return {
      height: 48,
      padding: "0 28px",

      borderRadius: 14,
      border: isPrimary
        ? "1px solid rgba(255, 255, 255, 0.35)"
        : `1px solid ${tint(theme.color.text, 20)}`,

      color: isPrimary ? "#fff" : theme.color.text,
      background: isPrimary
        ? "linear-gradient(135deg, #e0559a, #6a6df0)"
        : tint(theme.color.text, 7),
      boxShadow: isPrimary
        ? "0 10px 24px -8px rgba(106, 109, 240, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.35)"
        : `inset 0 1px 0 ${tint(theme.color.text, 14)}`,

      fontSize: 15,
      fontWeight: 700,

      cursor: "pointer",
      transition:
        "transform 0.15s ease, filter 0.15s ease, background 0.15s ease",

      "&:hover": isPrimary
        ? { filter: "brightness(1.08)" }
        : { background: tint(theme.color.text, 13) },

      "&:active": {
        transform: "scale(0.97)",
      },

      "&:focus-visible": {
        outline: `2px solid ${tint(theme.color.text, 60)}`,
        outlineOffset: 2,
      },

      [MOBILE]: {
        flex: 1,
        padding: 0,
      },
    };
  },
);

export default function GlassProfileCard({
  name = "김하늘",
  role = "프론트엔드 개발자",
  bio = "사용자가 느끼는 작은 불편까지 코드로 풀어내는 걸 좋아해요. 단단한 구조와 섬세한 인터랙션으로 오래 쓰이는 화면을 만듭니다.",
  stats = defaultStats,
}: GlassProfileCardProps) {
  const [following, setFollowing] = useState(false);

  return (
    <Section>
      <Card>
        <AvatarRing>
          <AvatarText>{name.slice(0, 2)}</AvatarText>
        </AvatarRing>

        <Info>
          <Name>{name}</Name>
          <Role>{role}</Role>
          <Bio>{bio}</Bio>

          <StatRow>
            {stats.map(({ label, value }) => (
              <StatItem key={label}>
                <StatValue>{value}</StatValue>
                <StatLabel>{label}</StatLabel>
              </StatItem>
            ))}
          </StatRow>

          <ButtonRow>
            <Button
              type="button"
              variant="primary"
              onClick={() => setFollowing((prev) => !prev)}
            >
              {following ? "팔로잉" : "팔로우"}
            </Button>
            <Button type="button" variant="ghost">
              연락하기
            </Button>
          </ButtonRow>
        </Info>
      </Card>
    </Section>
  );
}
