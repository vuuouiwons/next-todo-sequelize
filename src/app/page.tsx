"use client"
import { Button } from "@/components/ui/button"
import { useCounterStore } from "@/store/useCounterStore";
import { useState } from "react";

export default function Home() {
  const value = useCounterStore((state) => state.value);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  // const [value, setValue] = useState(0)

  // const increment = () => {

  //   setValue((prevValue) => prevValue + 1);
  // }

  // const decrement = () => {
  //   setValue((prevValue) => prevValue - 1);
  // }

  // const reset = () => {
  //   setValue(0);
  // }

  return (<>
    <h1>root page</h1>
    <p>Current count: {value}</p>
    <br />
    <Button onClick={increment}>increment</Button>
    <Button onClick={decrement}>decrement</Button>
    <Button onClick={reset}>reset</Button>
    <br />
  </>
  );
}