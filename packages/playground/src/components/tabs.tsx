import { Button } from "orphos/button";
import { Input } from "orphos/input";
import { Label } from "orphos/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "orphos/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account"></TabsContent>
      <TabsContent value="password"></TabsContent>
    </Tabs>
  );
}
