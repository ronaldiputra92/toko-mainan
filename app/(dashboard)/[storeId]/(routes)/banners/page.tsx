import db from "@/lib/db";
import BannerClient from "./components/client";
import { format } from "date-fns";
import { BannerColumn } from "./components/columns";

async function BannersPage({ params }: { params: { storeId: string } }) {
  const banners = await db.banner.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createAt: "desc",
    },
  });

  const formattedBanners: BannerColumn[] = banners.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createAt, "MMMM do, yyyy"),
  }));
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BannerClient data={formattedBanners} />
      </div>
    </div>
  );
}

export default BannersPage;
