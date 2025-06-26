import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <h1 className="text-3xl font-bold underline text-center">Hola dev</h1>
    <Button>Click me</Button>
    </>
  );
}
