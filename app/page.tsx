import Button from "@/components/button";

export default function Home() {
  return (
    <>
      <div className="flex  justify-center items-center h-full">
        <div className="flex flex-col justify-center space-y-8">
          <h1 className="text-xl text-slate-900 text-center font-bold">
            Frontend challenges
          </h1>

          <div className="grid grid-cols-3 gap-4">
            <Button href="/challenges/qr" label="QR component" />
          </div>
        </div>
      </div>
    </>
  );
}
