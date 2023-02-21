import styled from "@emotion/styled";

type ContainerItemProps = {
  flex: number; //i.e: 12, 6, 4, 3, 2, 1
};

const ContainerItem = styled.div`
  flex: ${(props: ContainerItemProps) => props.flex / 12};
`;

export default ContainerItem;
