"use client";
import React, { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const messageSent = JSON.stringify({ message });
    const res = await fetch("http://localhost:9080/publish", {
      method: "POST",
      body: messageSent,
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log("data", data);
    setMessage("");
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  
  return (
    <main className="container mx-auto  min-h-screen flex justify-start gap-20 p-24">
      <div className="w-full">
        <h2 className="text-3xl font-semibold text-blue-500">
          Redis Publisher
        </h2>
        <form action="" onSubmit={handleSubmit}>
          <textarea
            className="focus:outline-none mt-5 px-5 rounded border bg-white py-3 h-20"
            name="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your message"></textarea>
          <br />
          <button className="bg-red-400 px-4 py-2 rounded w-fit" type="submit">
            Send
          </button>
        </form>
      </div>
    </main>
  );
}

