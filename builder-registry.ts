"use client";
import { builder, Builder } from "@builder.io/react";
import Button from "./components/Button";
import Counter from "./components/Counter/Counter";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Button, {
  name: "Button",
  inputs: [
    {
      name: "icon",
      type: "string",
    },
    {
      name: "text",
      type: "string",
      required: true,
    },
  ],
});
