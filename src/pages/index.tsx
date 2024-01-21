import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Table from "./table";
import { Icons } from "@/components/icons";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {};

function About({}: Props) {
  return (
    <>
      <div className="container items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-1 grid items-start gap-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Shopping Cart.</CardTitle>
              <CardDescription>
                Add a new payment method to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-3 gap-4"></div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 grid items-start gap-6 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="font-thin">ABA KHQR</div>
              </CardTitle>
              <CardDescription>
                <Label className="kk">ស្កែនដើម្បីទូទាត់តាម ABA Mobile</Label>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="khqr">
                <div className="">
                  <div>
                    <div className="khqr flex justify-center items-center">
                      <svg
                        width="60"
                        height="14"
                        viewBox="0 0 60 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M39.0058 5.19439V9.59764H34.5316C34.0727 9.59764 33.7285 9.2307 33.7285 8.80731V5.22264C33.7285 4.77103 34.1014 4.43231 34.5316 4.43231H38.174C38.6616 4.40408 39.0058 4.74278 39.0058 5.19439Z"
                          fill="white"
                        />{" "}
                        <path
                          d="M59.9716 6.97176H57.7345C57.7345 4.34676 55.5547 2.20159 52.8874 2.20159C50.765 2.20159 48.9008 3.55645 48.2698 5.53225C48.1264 6.01209 48.0403 6.49192 48.0403 6.97176V13.9718H47.983C46.7784 13.9718 45.8032 13.0121 45.8032 11.8266V6.97176H45.8319C45.8319 5.05241 46.635 3.21773 48.069 1.89112C49.3883 0.677406 51.1092 0 52.9161 0C56.8167 0 59.9716 3.13305 59.9716 6.97176Z"
                          fill="white"
                        />{" "}
                        <path
                          d="M59.9999 13.9713L56.845 13.9996L56.0706 13.2374L54.3497 11.5439L51.9692 9.20117H55.1241L59.9999 13.9713Z"
                          fill="white"
                        />{" "}
                        <path
                          d="M39.7517 11.7702H33.0117C32.18 11.7702 31.5203 11.121 31.5203 10.3024V3.66936C31.5203 2.85081 32.18 2.20159 33.0117 2.20159H39.7517C40.5835 2.20159 41.2431 2.85081 41.2431 3.66936V10.3024L43.4802 12.504V2.14515C43.4802 0.959671 42.5051 0 41.3005 0H31.4629C30.2584 0 29.2832 0.959671 29.2832 2.14515V11.8266C29.2832 13.0121 30.2584 13.9718 31.4629 13.9718H41.9888L39.7517 11.7702Z"
                          fill="white"
                        />{" "}
                        <path
                          d="M12.3614 14H9.20656L2.60996 7.47984V14H0V0H2.60996V6.2379L8.94843 0H12.046L5.16255 6.71772L12.3614 14Z"
                          fill="white"
                        />{" "}
                        <path
                          d="M24.1491 0H26.7016V14H24.1491V7.93145H16.8641V14H14.3115V0H16.8641V5.84273H24.1491V0Z"
                          fill="white"
                        />{" "}
                      </svg>
                    </div>
                    <div className="">
                      <div className="triangle-top-right" />
                    </div>
                    <div className="amount bg-white pt-6">
                      <div className="company-name text-slate-700 px-6 font-light uppercase">
                        Company Name
                      </div>
                      <div className="bg-white">
                          <div className="amount-value text-slate-800 px-6 py-2 text-xl font-medium">
                            30.00{" "}
                            <span className="amount-currency font-light text-sm ml-2">
                              USD
                            </span>
                          </div>
                      </div>
                    </div>
                    <div className="bg-white w-full">
                      <hr
                        className="border-t-[1px] border-dotted border-slate-400 h-1 text-center overflow-visible
    after:content-[''] after:relative after:top-[-14px] after:bg-white after:text-red-600 after:px-1"
                      />
                    </div>
                    <div className="h-[240px] bg-white"></div>
                <div className="text-slate-900 text-center text-sm bg-white font-light py-8">Scan with ABA Mobile, or other Mobile Banking App supporting KHQR</div>
                    <div className="">
              </div>
                  </div>
                </div>
              </div>

            </CardContent>

          </Card>
        </div>
      </div>
    </>
  );
}

export default About;
