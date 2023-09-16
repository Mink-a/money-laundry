import React from "react";
import { CircuitBoardIcon, MoveRight, UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

function ThreeFeatures() {
  return (
    <section className='max-w-screen-xl px-4 py-8 -mt-32 mx-auto flex flex-col items-center lg:flex-row lg:justify-between lg:gap-3'>
      <Card className='w-full lg:w-[400px] mb-3'>
        <CardHeader>
          <CircuitBoardIcon />
        </CardHeader>
        <CardContent>
          <h4 className='font-semibold mb-3'>AML Technology</h4>
          <p>
            Optimas AML Compass Platform combines cutting-edge technology and
            proven...
          </p>
          <Link href='#'>
            <Button variant='link' className='px-0'>
              Get Started <MoveRight className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        </CardContent>
      </Card>
      <Card className='w-full lg:w-[400px] mb-3'>
        <CardHeader>
          <CircuitBoardIcon />
        </CardHeader>
        <CardContent>
          <h4 className='font-semibold mb-3'>AML Technology</h4>
          <p>
            Optimas AML Compass Platform combines cutting-edge technology and
            proven...
          </p>
          <Link href='#'>
            <Button variant='link' className='px-0'>
              Get Started <MoveRight className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        </CardContent>
      </Card>
      <Card className='w-full lg:w-[400px] mb-3'>
        <CardHeader>
          <CircuitBoardIcon />
        </CardHeader>
        <CardContent>
          <h4 className='font-semibold mb-3'>AML Technology</h4>
          <p>
            Optimas AML Compass Platform combines cutting-edge technology and
            proven...
          </p>
          <Link href='#'>
            <Button variant='link' className='px-0'>
              Get Started <MoveRight className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
}

export default ThreeFeatures;
