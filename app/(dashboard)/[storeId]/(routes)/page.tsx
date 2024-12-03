import db from "@/lib/db";
import Image from "next/image";

interface DashboardPageProps {
  params: { storeId: string };
}
const DashboardPage = async ({ params }: DashboardPageProps) => {
  const store = await db.store?.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return (
    <div className=" bg-black min-h-screen">
      <h1 className="text-4xl text-muted-foreground font-bold text-center tracking-[10px]">
        <p className="text-muted-foreground mb-2">Welcome To</p>
        {store?.name}
      </h1>
      <div className="flex items-center justify-center">
        <Image
          src="/assets/logo-onmyway.png"
          alt="onmyway"
          width={500}
          height={500}
          className="mt-10 rounded-md"
        />
      </div>
    </div>
  );
};

export default DashboardPage;
