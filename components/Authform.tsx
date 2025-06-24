"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Formfield from "./Formfield";
import Link from "next/link";

// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// });

const authFormSchema = (type: "sign-in" | "sign-up") => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const Authform = ({ type }: { type: string }) => {
  const formSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const isLogin = type === "login";

  return (
    <>
      <div className="mb-20">
        <div className="flex justify-start mb-20 ">
          <h1 className="font-bold text-2xl text-blue-500">cowerywise</h1>
        </div>
        {!isLogin ? '' : (
          <div className="my-8">
          <p className="font-bold text-4xl text-blue-950">Jump right back in</p>
          <p className="text-2xl font-bold text-gray-400">
            Sign in to continue
          </p>
        </div>
        )}
        <div className="bg-white rounded-2xl p-8 w-[calc(100vw-120px)] mx-auto ">
          {/* Currently trying to get the div to resize with change in the size of the viewport */}

          <div className="auth card-border lg:min-w-[566px]">

            {!isLogin && (
              <div className="py-5 top">
                <h1 className="text-6xl font-semibold text-blue-950">Start your
investment journey</h1>
              </div>
            )}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6 mt-4 form"
              >
                <Formfield
                  control={form.control}
                  name="email/phone number"
                  label="Email"
                  placeholder="Email Address"
                />
                {isLogin && (
                  <>
                    <Formfield
                      control={form.control}
                      name="password"
                      label="password"
                      placeholder="Password"
                    />
                  </>
                )}

                <p className="text-left text-blue-500 font-semibold">
                  {isLogin ? "Forgot password?" : ""}
                </p>
              </form>
            </Form>
            <div className="flex justify-between">
              {isLogin ? (
                <p className="text-gray-400 text-[15px]">
                  New user?{" "}
                  <Link href="/signup" className="text-blue-600 font-semibold">
                    Create account
                  </Link>
                </p>
              ) : (
                <p className="text-gray-400 text-[15px]">
                  Got an account?{" "}
                  <Link href="/login" className="text-blue-600 font-semibold">
                    Sign In
                  </Link>
                </p>
              )}
              <Button
                className="btn bg-blue-600 rounded-[5px] w-[110px] h-[45px] font-bold text-[16px]"
                type="submit"
              >
                {isLogin ? "Sign In" : "Continue"}
              </Button>
            </div>
          </div>
        </div>

        {isLogin ? (
          <div className="flex justify-between py-8 text-[14px]">
            <p>
              <span className="text-gray-400">Trouble signing in? </span>
              <span className="text-blue-600 font-semibold">Chat with us</span>
            </p>
            <p className="text-gray-400"> Privacy | Terms</p>
          </div>
        ) : (
          <div>
            <div className="flex justify-between py-8 text-[14px]">
              <p>
                logo {" "}
                <span className="text-gray-500">
                  Cowrywise is licensed by the SEC
                </span>
              </p>
              <p className="text-blue-600 font-semibold">Need Help?</p>
            </div>
            {/* <div className="flex justify-center relative items-center "> */}
              <p className="flex justify-center  ">Stars</p>
              <h3 className="flex justify-center font-bold text-blue-900 ">
              Trusted by over a million people like you to save and invest
            </h3>
            {/* </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Authform;
