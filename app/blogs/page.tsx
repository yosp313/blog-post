import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addBlog } from "./actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function BlogForm() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="flex flex-col justify-center items-center">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Create new blogs</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={addBlog}>
            <Label>Title</Label>
            <Input placeholder="awesome title" name="title" />
            <Label>Content</Label>
            <Textarea
              className="w-96 h-36"
              placeholder="awesome sauce"
              name="content"
            />
            <Button className="mt-6" type="submit">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
