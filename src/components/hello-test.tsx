import * as React from "react";


export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const HelloTest = (props: HelloWorldProps) => (
  <h1>
    Hi {props.userName} from React! Welcome to {props.lang}!
  </h1>
);

export const Toface = (props: HelloWorldProps) => (
    <h1>
      Hi {props.userName}Nice!
    </h1>
  );