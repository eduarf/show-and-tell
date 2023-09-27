import { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledJobsArchive = styled.div`
  position: absolute;
  top: 120%;
  left: -30%;
  height: 10rem;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  width: 12rem;
  transform: ${(props) => (props.isOpen ? "rotate(-7deg)" : "rotate(0)")};
  background-color: var(--color-text);
  transition: opacity 0.15s ease-in-out, transform 0.3s ease-in-out;
`;

const JobsArchive = () => {
  const isOpen = useSelector((state) => state.aboutDropdown.isOpen);

  // useMemo kullanarak bileşenin sadece isOpen değiştiğinde yeniden render edilmesini sağlama
  const memoizedComponent = useMemo(() => {
    return <StyledJobsArchive isOpen={isOpen}></StyledJobsArchive>;
  }, [isOpen]);

  return memoizedComponent;
};

export default JobsArchive;
