import { Tabs, TabsContent, TabsList, TabsTrigger } from "orphos/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="tab-1" className="w-full max-w-[400px]">
      <TabsList>
        <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">
        <p className="p-4 text-center text-foreground-subtle text-xs">
          Tab 1 content
        </p>
      </TabsContent>
      <TabsContent value="tab-2">
        <p className="p-4 text-center text-foreground-subtle text-xs">
          Tab 2 content
        </p>
      </TabsContent>
      <TabsContent value="tab-3">
        <p className="p-4 text-center text-foreground-subtle text-xs">
          Tab 3 content
        </p>
      </TabsContent>
    </Tabs>
  );
}
