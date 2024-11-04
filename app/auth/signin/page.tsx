"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Mail } from "lucide-react";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (provider: string) => {
    setIsLoading(true);
    try {
      await signIn(provider, { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md space-y-8 p-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleSignIn("github")}
            disabled={isLoading}
          >
            <Github className="mr-2 h-4 w-4" />
            Sign in with GitHub
          </Button>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleSignIn("google")}
            disabled={isLoading}
          >
            <Mail className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>
        </div>
      </Card>
    </div>
  );
}