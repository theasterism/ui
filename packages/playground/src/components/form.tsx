import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@theanalog/orphos/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@theanalog/orphos/form";
import { Input } from "@theanalog/orphos/input";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function FormDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    error={{
                      type: "too_small",
                      message: "Username must be at least 2 characters.",
                    }}
                    placeholder="shadcn"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>This is your public display name.</FormDescription>
              </FormItem>
            );
          }}
        />
        <Button className="w-fit" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
