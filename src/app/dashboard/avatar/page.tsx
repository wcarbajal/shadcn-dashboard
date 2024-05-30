'use client'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
export default function AvatarPage() {
    return (
        <div className="grid grid-cols-4 gap-4">
            <Avatar>
                <AvatarImage  src="https://github.com/shadcn.png" alt="@shadcn" sizes="xl"/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Avatar style={{ width: 100, height: 100 }} >
                <AvatarImage  src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    );
}