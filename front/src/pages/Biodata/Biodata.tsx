"use client";

import { useEffect, useState } from "react";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@gmail.com",
    },
  ];
}

export default function Biodata() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    getData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  return (

    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>

    <>
      <div className="flex justify-center h-screen bg-accent">
        <div>We are coding at Biodata</div>
        {/* Add Code Below */}
        Winson aynandito Julio is here Joachim is here WHAT THE FUCK
      </div>
    </>

  );
}
