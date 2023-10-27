import * as React from "react";

interface HelloWorldProps {
  name: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default HelloWorld;
