'use client';
import { useState } from "react"
import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DialogPage() {
    const [dialogOpen, setDialogOpen] = useState(false);
    return (
        <div className="grid grid-cols-2 gap-5">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                
                <DialogTrigger asChild>
                    <Button variant="outline">Share</Button>
                </DialogTrigger>
                
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Enlace para compartir</DialogTitle>
                        <DialogDescription>
                            Cualquiera que tenga el enlace podrá ver esta página.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <Label htmlFor="link" className="sr-only">
                                Link
                            </Label>
                            
                            <Input
                                id="link"
                                defaultValue="https://ui.shadcn.com/docs/installation"
                                readOnly
                            />
                        </div>
                        <Button type="submit" size="sm" className="px-3"
                        onClick={() => navigator.clipboard.writeText("https://ui.shadcn.com/docs/installation")}
                        >
                            <span className="sr-only">Copy</span>
                            <Copy className="h-4 w-4" />
                        </Button>
                    </div>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>

            </Dialog>

            <Button
             onClick={() => setDialogOpen(true)}
             >Abrir para compartir</Button>

        </div>
    );
}