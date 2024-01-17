import { ModeToggle } from "./components/theme/mode-toggle";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

import { Inbox, Send, ArchiveX, Trash2, Archive } from "lucide-react";
import { Outlet } from "react-router-dom";
import { Nav } from "./components/nav";
import { Button } from "./components/ui/button";
import Logo from "./assets/img/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";

import { cn } from "./lib/utils";
import { Separator } from "./components/ui/separator";
import React from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";

interface MailProps {
  accounts: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export default function App({
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  return (
    <div className="h-screen">
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full"
      >
        <ResizablePanel
          defaultSize={defaultLayout[14]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={10}
          maxSize={10}
          onCollapse={(_: React.MouseEvent, collapsed: boolean) => {
            setIsCollapsed(collapsed);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              collapsed
            )}`;
          }}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          <div className="flex justify-center items-center my-12 opacity-60">
            <img src={Logo} style={{ width: "70px" }} alt="" className="" />
          </div>
          <Separator className="mt-4" />
          <div className="p-2 kk">
            <Nav
              isCollapsed={isCollapsed}
              links={[
                {
                  title: "ពត៌មាន",
                  label: "4",
                  icon: Inbox,
                  variant: "default",
                  href: "/about",
                },
                {
                  title: "កម្មវិធីសិក្សា",
                  label: "12",
                  icon: Inbox,
                  variant: "ghost",
                },
                {
                  title: "សិស្ស",
                  label: "1250",
                  icon: Send,
                  variant: "ghost",
                },
                {
                  title: "ទទួលប្រាក់",
                  label: "23",
                  icon: ArchiveX,
                  variant: "ghost",
                },
                {
                  title: "ការកំណត់",
                  label: "",
                  icon: Trash2,
                  variant: "ghost",
                },
                {
                  title: "របាយការណ៍",
                  label: "",
                  icon: Archive,
                  variant: "ghost",
                },
              ]}
            />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={30}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={4}>
              <div className="flex h-full items-center justify-between px-6">
                <h4 className="kk text-md font-black">វិទ្យាល័យស្តៅសន្តិភាព</h4>
                <div className="flex space-x-4">
                  <ModeToggle />

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="secondary" className="">
                        <Avatar className="h-[1.2rem] w-[1.2rem]">
                          <AvatarImage src="/avatars/03.png" alt="@shadcn" />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-56"
                      align="end"
                      forceMount
                    >
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">
                            shadcn
                          </p>
                          <p className="text-xs leading-none text-muted-foreground">
                            m@example.com
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          Profile
                          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Billing
                          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Settings
                          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>New Team</DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={75}>
              <div className="p-4 w-full">
                <Outlet />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
