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

type Props = {};

function About({}: Props) {
  return (
    <>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-5 kk">
          <TabsTrigger value="account">បន្ទប់</TabsTrigger>
          <TabsTrigger value="password">ការកំណត់ពិន្ទុ</TabsTrigger>
          <TabsTrigger value="pass4word">មុខវិជ្ជាផ្សេងៗ</TabsTrigger>
          <TabsTrigger value="pass2word">តារាងគម្រោងវាយតំលៃ</TabsTrigger>
          <TabsTrigger value="passw5ord">ឈ្មោះគ្រូ</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>
                <p className="kk">ការគ្រប់គ្រងថ្នាក់រៀន</p>
              </CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Table />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default About;
