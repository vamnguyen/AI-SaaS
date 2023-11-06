"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a1675f31-b3cb-472f-be6a-b0f5b0da07a5");
  }, []);

  return null;
};
