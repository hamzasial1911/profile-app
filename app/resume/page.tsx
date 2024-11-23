"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

export default function ResumePage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [hasAccess, setHasAccess] = useState(true);

  // Google Drive file URL from environment variables
  const driveFileId = '10p3tP4kYxdIkQz1C9IcwzpRlzkfWGy0S'

  const viewLink = `https://drive.google.com/file/d/${driveFileId}/view`;
  const editLink = `https://drive.google.com/file/d/${driveFileId}/preview`;

  useEffect(() => {
    setMounted(true);

    // Test if the file is accessible
    fetch(viewLink, { method: "HEAD" })
      .then((response) => {
        if (!response.ok) {
          setHasAccess(false); // File not accessible
        }
      })
      .catch(() => setHasAccess(false)); // Catch fetch errors
  }, [viewLink]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container py-8 flex-1">
        <div className="flex justify-between items-center mb-4">
          <Button variant="ghost" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {hasAccess ? (
            <Button variant="outline" onClick={() => window.open(viewLink, "_blank")}>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          ) : (
            <Button disabled variant="outline">
              <Download className="mr-2 h-4 w-4" />
              File Not Accessible
            </Button>
          )}
        </div>

        {hasAccess ? (
          <div className="w-full h-[calc(100vh-12rem)] rounded-lg overflow-hidden bg-card">
            <iframe
              src={editLink}
              className="w-full h-full"
              title="Resume"
              allow="autoplay"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-[calc(100vh-12rem)] rounded-lg bg-card">
            <p className="text-red-600">Unable to load the resume. Please check your access permissions.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
