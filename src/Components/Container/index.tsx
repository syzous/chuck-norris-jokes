import "./styles.scss";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>;
}

export default Container;
