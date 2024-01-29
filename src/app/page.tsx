import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import { Half1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { LogIn } from "lucide-react";
import FileUpload from "@/components/FileUpload";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold ">Chat with any pdf</h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="mt-2">
            {isAuth && <Button>Go to chats</Button>}
            <p className="max-w-xl mt-1 text-xl text-slate-80">
              Join millions of student and professionals to instantle answer
              questions and understand research with AI{" "}
            </p>
          </div>
          <div className="w-full mt-4">
            {isAuth ? (
              <FileUpload />
            ) : (
              <Link href={"/sign-in"}>
                <Button>
                  Login to get Strarted
                  <LogIn></LogIn>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
