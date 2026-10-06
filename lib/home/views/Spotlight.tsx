"use client";

import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { homeVM } from "@/injector";
import { IHomeViewModel } from "../view-model/home-view-model";

interface Props {
  vm: IHomeViewModel;
}

const Content = observer(({ vm }: Props) => {
  const { x, y } = vm.getHomeState().getSpotlight();

  useEffect(() => {
    const handleMove = (e: PointerEvent) => vm.setSpotlight(e.clientX, e.clientY);
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [vm]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden transition duration-300 lg:block"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, var(--spotlight), transparent 80%)`,
      }}
    />
  );
});

export default function Spotlight() {
  return <Content vm={homeVM} />;
}
