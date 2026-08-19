"use client";

import { useEffect, useState } from "react";
import type { ContactEnquiry } from "@/types/database";
import { Card } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<ContactEnquiry[]>([]);

  useEffect(() => {
    fetch("/api/admin/enquiries")
      .then((response) => response.json())
      .then((data) => setEnquiries(data.enquiries ?? []));
  }, []);

  async function updateStatus(id: string, status: string) {
    await fetch("/api/admin/update-status", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, type: "enquiry", status }),
    });
    setEnquiries((current) =>
      current.map((item) =>
        item.id === id ? { ...item, status: status as ContactEnquiry["status"] } : item,
      ),
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-semibold text-slate-900">Contact Enquiries</h1>
      <div className="mt-6 space-y-4">
        {enquiries.map((item) => (
          <Card key={item.id}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-600">{item.email}</p>
                {item.phone ? (
                  <p className="text-sm text-slate-600">{item.phone}</p>
                ) : null}
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.message}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["new", "in_progress", "resolved"].map((status) => (
                  <Button
                    key={status}
                    size="sm"
                    variant={item.status === status ? "primary" : "outline"}
                    onClick={() => updateStatus(item.id, status)}
                  >
                    {status}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
