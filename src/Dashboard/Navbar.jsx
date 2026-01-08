import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Navbar() {
  return (
    <nav className="w-full h-16 shadow-sm bg-background px-6 flex items-center justify-between">
      <div className="text-2xl font-extrabold">Team - Gen-Z</div>

      <div className="flex items-center gap-4">
        <div className="flex gap-5">
          <p className="text-xl font-bold cursor-pointer hover:text-blue-800 hover:underline">
            Home
          </p>
          <p className="text-xl font-bold cursor-pointer hover:text-blue-800 hover:underline">
            About
          </p>
          <p className="text-xl font-bold cursor-pointer hover:text-blue-800 hover:underline">
            Context
          </p>
          <p className="text-xl font-bold cursor-pointer hover:text-blue-800 hover:underline">
            Services
          </p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
