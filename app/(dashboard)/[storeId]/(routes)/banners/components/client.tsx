"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Banner } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { BannerColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface BannerClientProps {
  data: BannerColumn[];
}

export const BannerClient: React.FC<BannerClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Banners (${data.length})`}
          description="Manage Banners for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/banners/new`)}>
          <Plus />
          Add New
        </Button>
      </div>
      <hr />
      <DataTable columns={columns} data={data} searchKey="label" />
      <Heading title="API" description="API calls for Banners" />
      <hr />
      <ApiList namaIndikator="banners" idIndikator="bannerId" />
    </>
  );
};

export default BannerClient;
