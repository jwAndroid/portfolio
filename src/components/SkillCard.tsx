import { memo, useMemo } from "react";
import styled from "@emotion/styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import 'react-lazy-load-image-component/src/effects/blur.css';

import { useAppSelector } from "../hooks/useRedux";

const Container = styled.div({
  width: "100%",
  maxWidth: "1140px",
  margin: "20px auto 50px",
  padding: "30px 20px",

  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "50px",

  boxSizing: "border-box",

  "@media screen and (max-width: 900px)": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },

  "@media screen and (max-width: 640px)": {
    gridTemplateColumns: "1fr",
    padding: "30px 20px",
  },
});

interface IBox {
  boxShadow: string;
}

const Box = styled.div<IBox>(({ boxShadow }) => ({
  width: "100%",
  minWidth: 0,
  boxSizing: "border-box",

  padding: "20px",
  borderRadius: "15px",
  boxShadow: `1px 2px 5px ${boxShadow}`,

  "&:hover": {
    background: "rgba(0,0,0,0.1)",
    opacity: 0.5,
    transition: "0.3s",
  },

  "@media screen and (max-width: 740px)": {
    padding: "10px 20px",
  },
}));

const ImageContainer = styled.div({
  width: "100%",
  height: "120px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  boxSizing: "border-box",
});

const Image = styled(LazyLoadImage)({
  width: "100px",
  height: "100px",
  objectFit: "contain",
  display: "block",
});

const CardText = styled.h3({
  fontSize: "20px",
  textAlign: "center",
  margin: "10px 0",

  "@media screen and (max-width: 740px)": {
    fontSize: "10px",
  },
});

const StyledAnchor = styled.a({});

function SkillCard() {
  const cards = useAppSelector((state) => state.card.posts.data);

  const data = useMemo(
    () => cards?.toSorted((a, b) => b.proficiency - a.proficiency),
    [cards],
  );

  return (
    <Container>
      {data?.map((item) => (
        <Box key={item.title} boxShadow={item.shadowColor}>
          <StyledAnchor href={item.url} target="_blank">
            <ImageContainer>
              <Image alt={item.title} effect="blur" src={item.image} />
            </ImageContainer>

            <CardText>{item.title}</CardText>
          </StyledAnchor>
        </Box>
      ))}
    </Container>
  );
}

export default memo(SkillCard);
