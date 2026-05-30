"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { toast } from "sonner"
import { Textarea } from "@/components/ui/textarea"
import { useCounterStore } from "@/store/useCounterStore";

export default function Home() {
  // const [value, setValue] = useState(0)
  const value = useCounterStore((state) => state.value);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  const [message, setMessage] = useState("");

  // const increment = () => {
  //   updateValue(value + 1);
  //   toast.success('incremented 1');
  // }

  // const decrement = () => {
  //   updateValue(value - 1);
  //   toast.warning('decremented 1');
  // }

  // const reset = () => {
  //   updateValue(0);
  //   toast.error('reseted to 0');
  // }

  const handleSendMessage = async () => {
    console.log(message);

    const res = await fetch('/api/edge/v1/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (res.ok) {
      toast.success('email sent');
      setMessage('');
    } else {
      toast.error('email not sent');
    }

  }


  return (<>
    <h1>test page</h1>
    <p>Current count: {value}</p>p
    <br />
    <Button onClick={increment}>increment</Button>
    <Button onClick={decrement}>decrement</Button>
    <Button onClick={reset}>reset</Button>
    <br />
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button onClick={handleSendMessage} >Send message</Button>
    </div>
  </>
  );
}