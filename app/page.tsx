import LandingNav from "./ui/landing/landing-nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" ">
      <LandingNav />
      <section className="flex flex-row items-between gap-6 h-[100%] ">
        <div>
          <h1 className="font-bold  ">Your Ultimate Finances Tracker: Simplify, Track, Succeed.</h1>
          <p>
            Easily Track and Manage Your Finances. Stay on top of your expenses,
            set budgets, and achieve your financial goals with our intuitive and
            user-friendly platform.
          </p>
        </div>
        <div className="shadow-hero rounded-sm overflow-hidden ">
          <Image
            src={"/DemoScreen.png"}
            width={800}
            height={700}
            className="shadow-hero"
            alt="demo screen"
          />
        </div>
      </section>
    </main>
  );
}
