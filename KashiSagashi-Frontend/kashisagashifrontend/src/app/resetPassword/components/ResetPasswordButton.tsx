"use client";
import { useFormStatus } from "react-dom";

type Props = {
  error: boolean;
};

export function ResetPasswordButton({ error }: Props) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={!error || pending}
      className=" bg-amber-600 disabled:brightness-50 disabled:cursor-not-allowed rounded-lg"
    >
      {pending ? "Resetting" : "Reset password"}
    </button>
  );
}
