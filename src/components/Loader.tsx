import Skeleton from "@mui/material/Skeleton/Skeleton";
import Container from "./styled/Container";

const Loader = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): JSX.Element => {
  return <Skeleton variant="rectangular" width={width} height={height} />;
};

//todo: terrible designed loader, but it's just a demo

export const RowLoader = (): JSX.Element => {
  return (
    <Container column>
      {[...Array(10)].map((_, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <Loader width={window.screen.width / 3} height={40} />
        </div>
      ))}
    </Container>
  );
};

export default Loader;
