import { Button } from "@/common/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function Notfound() {
    return(
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="mb-2 text-4xl font-bold md:text-6xl">404</h1>
            <p className="mb-5 text-2xl">The page you are looking for is not found</p>
            <div className="flex items-center justify-center gap-3">
                <Button variant="outline">
                    <ArrowLeft /> 
                    Back
                </Button>
                <Button>
                    Home
                    <Home />
                </Button>
            </div>
        </div>
    )
}