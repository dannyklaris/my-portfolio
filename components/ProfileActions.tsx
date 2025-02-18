import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ProfileActions() {
  const [openModal, setOpenModal] = useState<"contact" | "resume" | null>(null);

  return (
    <div className="flex gap-4 mt-4">
      {/* View Resume Button */}
      <Button
        className="bg-white text-black hover:bg-neutral-200 px-6"
        onClick={() => setOpenModal("resume")}>
        View Resume
      </Button>

      {/* Contact Me Button */}
      <Button
        variant="outline"
        className="text-white border-white hover:bg-white/10"
        onClick={() => setOpenModal("contact")}>
        Contact Me
      </Button>

      {/* Modal for Resume */}
      <Dialog
        open={openModal === "resume"}
        onOpenChange={() => setOpenModal(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Download Resume</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-600">
            Click the button below to download my resume.
          </p>
          <a
            href="/resume.pdf"
            download="CV_Danial Akmal bin Kamal Aris.pdf"
            className="mt-4">
            <Button className="w-full bg-black text-white hover:bg-neutral-800">
              Download Resume
            </Button>
          </a>
        </DialogContent>
      </Dialog>

      {/* Modal for Contact */}
      <Dialog
        open={openModal === "contact"}
        onOpenChange={() => setOpenModal(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact Me</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-600">You can reach me at:</p>
          <p className="text-lg font-semibold">danialdakmal@gmail.com</p>
          <Button
            className="mt-4 w-full bg-black text-white hover:bg-neutral-800"
            onClick={() =>
              navigator.clipboard.writeText("danialdakmal@gmail.com")
            }>
            Copy Email
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
