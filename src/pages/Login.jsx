import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeClosed} from "lucide-react";

const formSchema = z
  .object({
    name: z.string().min(5, "Name should be at least 5 characters."),
    email: z.string().email("Invalid email address."),
    password: z.string().min(8, "Password should be at least 8 characters."),
    confirmPassword: z
      .string()
      .min(8, "Password should be at least 8 characters."),
  })
  

const Register = () => {
   const [show, setShow] = React.useState(false);

   
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      
      email: "",
      password: "",
      
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Card className="w-1/3 mx-auto mt-32">
        <CardHeader>
          <CardTitle>Login to WanderWise</CardTitle>
          <CardDescription>
            Fill your details to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="email"
                  placeholder="ram.bahadur@example.com"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <div className='flex items-end gap-1'>
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type={show ? "text" : "password"}
                    placeholder="••••••••"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Button  onClick= {()=>{setShow(!show)}} type="button" size="icon" variant="outline">
              {
                 show ? <EyeClosed /> : <Eye /> 
              }
              
            </Button>

          </div>

        </CardContent>
        <CardFooter className="block">
          <Button className="w-full" type="submit">Login</Button>

          <div className="mt-2 text-center">
            Already have an account ?
            <a  className="text-blue-500 underline" href="/register">Register</a>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};

export default Login;
