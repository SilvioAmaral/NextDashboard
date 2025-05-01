import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import { Suspense } from "react";

export const metadata = {
  title: "Customers",
  description: "Manage your customers"
};

type Props = {
  searchParams?: Promise<{
    query?: string;
  }>;
};

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query); // Placeholder for customer data

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
        {/* <CreateCustomer /> */}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CustomersTable customers={customers} />
      </Suspense>
      <div>
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}