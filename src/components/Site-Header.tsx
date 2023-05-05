import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { CheckCheck, Plus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function SiteHeader() {
  return (
    <header className="flex justify-between items-center child:text-sm  p-5  px-20 border-b">
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
          </SheetTrigger>
          <SheetContent position="left" size={"sm"} className="min-w-fit">
            <SheetHeader>
              <SheetTitle className="flex gap-5 items-center mb-5 ">
                <Avatar className="w-9 h-9">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  My Pages
                </h2>
              </SheetTitle>
              <SheetDescription className="text-left">
                Make changes to your profile here.
                <br />
                Click save when youre done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4 mt-7">
              
                <Button className="  w-full">
                  Create new page <Plus className="ml-2" />
                </Button>
                <Button className=" w-full border-2 " variant="secondary">
                  Explore page gallery
                </Button>
                
            </div>
            <SheetFooter>
              <Card className="relative  w-full space-y-2 rounded-lg border-2 mt-20">
                <CardHeader>
                  <CardTitle className="cursor-default absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <p className="rounded-full  py-2 px-4 dark:text-black font-medium text-sm bg-white border  dark:bg-spring  ">
                      Become Pro
                    </p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className=" mx-auto  [&>li]:mt-2">
                    <li>
                      <CheckCheck className=" rounded-full h-5 w-5 mr-2 inline-flex" /> Unlimited Pages
                    </li>
                    <li>  <CheckCheck className=" rounded-full h-5 w-5 mr-2 inline-flex" />
                    No advertisements</li>
                    <li><CheckCheck className=" inline-flex rounded-full h-5 w-5 mr-2" />
                    All PRO Widgets & Features</li>
                  </ul>
                </CardContent>
                <CardFooter className="block ">
                  <Button className="dark:bg-spring border mx-auto block  ">
                    Upgrade Now
                  </Button>
                  <small className="text-sm mt-3 block text-center font-medium leading-none">
                    $20/year
                  </small>
                </CardFooter>
              </Card>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex items-center gap-4 ">
        <Button variant="ghost" className="w-11 px-0">
          <Plus />
        </Button>
        <Separator orientation="vertical" className="h-7" />
        <Input
          type="search"
          placeholder="Search..."
          className=" md:w-[100px] lg:w-[300px]"
        />
        <Button variant="ghost" className="w-9 h-9 rounded-full bg-red-500">
          <Avatar className="w-9 h-9">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default SiteHeader;
