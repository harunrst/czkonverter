import styled from "@emotion/styled";

type ContainerProps = {
  column?: boolean;
};

const Container = styled.div`
  margin: 1%;
  padding: 3%;
  display: flex;
  flex-direction: ${(props: ContainerProps) =>
    props.column ? "column" : "row"};
`;

export default Container;
