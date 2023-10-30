import React from "react";
import { NAVBAR_HEIGHT } from "../sizes";

type Props = {};

export default function page({}: Props) {
  return <div className="flex flex-col justify-center" style={{marginTop: NAVBAR_HEIGHT}}>Who?</div>;
}
