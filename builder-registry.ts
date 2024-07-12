"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Button from "./components/Button";

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
      friendlyName: "apple",
      required: true,
    },
  ],
});
