import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollAnimationIconProps {
  threshold?: number;
}

const ScrollAnimationIcon: React.FC<ScrollAnimationIconProps> = ({
  threshold = 300,
}) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, threshold], [1, 0]);

  return (
    <StyledWrapper>
      <motion.div
        className="scrolldown"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 2.5 }}
      >
        <div className="chevrons">
          <div className="chevrondown" />
          <div className="chevrondown" />
        </div>
      </motion.div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .scrolldown {
    --color: #ffffff80;
    --sizeX: 30px;
    --sizeY: 50px;
    position: absolute;
    bottom: 35px;
    left: 50%;
    transform: translateX(-50%);
    width: var(--sizeX);
    height: var(--sizeY);
    margin: auto;
    border: calc(var(--sizeX) / 15) solid var(--color);
    border-radius: 50px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .scrolldown::before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: var(--color);
    border-radius: 100%;
    animation: scrolldown-anim 2s infinite;
    box-sizing: border-box;
    box-shadow: 0px -5px 3px 1px #2a547066;
  }

  @keyframes scrolldown-anim {
    0% {
      opacity: 0;
      height: 6px;
    }
    40% {
      opacity: 1;
      height: 10px;
    }
    80% {
      transform: translate(0, 20px);
      height: 10px;
      opacity: 0;
    }
    100% {
      height: 3px;
      opacity: 0;
    }
  }

  .chevrons {
    padding: 6px 0 0 0;
    margin-left: -3px;
    margin-top: 48px;
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .chevrondown {
    margin-top: -6px;
    position: relative;
    border: solid var(--color);
    border-width: 0 3px 3px 0;
    display: inline-block;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
  }

  .chevrondown:nth-child(odd) {
    animation: pulse54012 500ms ease infinite alternate;
  }

  .chevrondown:nth-child(even) {
    animation: pulse54012 500ms ease infinite alternate 250ms;
  }

  @keyframes pulse54012 {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }
  }

  @media (max-width: 767px) {
    .scrolldown {
      bottom: 80px;
    }
  }
`;

export default ScrollAnimationIcon;
