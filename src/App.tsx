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


        <ResizablePanel defaultSize={30}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={4}>
              <div className="flex h-full items-center justify-between px-6">
                <h4 className="uppercase font-extralight ">Checkout Payment</h4>
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
