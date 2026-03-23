import {
  Bell,
  Bookmark,
  CircleEllipsis,
  Ellipsis,
  Hash,
  House,
  List,
  Mail,
  User,
} from "lucide-react";
import { Button } from "./button";

export const SidebarLeft = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="space-y-14">
        <div className="space-y-1">
          <div className="hover:bg-hover/40 flex cursor-pointer items-center gap-3 rounded-sm px-3 py-3 brightness-150 transition-all hover:brightness-125">
            <House className="text-text size-[21px]" />
            <span className="text-text font-semibold">Home</span>
          </div>
          <div className="hover:bg-hover/40 flex cursor-pointer items-center gap-3 rounded-sm px-3 py-3 transition-all hover:brightness-125">
            <Hash className="text-text size-[21px]" />
            <span className="text-text font-semibold">Explore</span>
          </div>
          <div className="hover:bg-hover/40 flex cursor-pointer items-center gap-3 rounded-sm px-3 py-3 transition-all hover:brightness-125">
            <div className="relative">
              <Bell className="text-text size-[21px]" />
              <div className="bg-blue absolute -top-1.5 -right-1 flex size-[15px] items-center justify-center rounded-full text-[11px] text-white">
                1
              </div>
            </div>
            <span className="text-text font-semibold">Notifications</span>
          </div>
          <div className="hover:bg-hover/40 flex cursor-pointer items-center gap-3 rounded-sm px-3 py-3 transition-all hover:brightness-125">
            <Mail className="text-text size-[21px]" />
            <span className="text-text font-semibold">Message</span>
          </div>
          <div className="hover:bg-hover/40 flex cursor-pointer items-center gap-3 rounded-sm px-3 py-3 transition-all hover:brightness-125">
            <Bookmark className="text-text size-[21px]" />
            <span className="text-text font-semibold">Bookmarks</span>
          </div>
          <div className="hover:bg-hover/40 flex cursor-pointer items-center gap-3 rounded-sm px-3 py-3 transition-all hover:brightness-125">
            <List className="text-text size-[21px]" />
            <span className="text-text font-semibold">Lists</span>
          </div>
          <div className="hover:bg-hover/40 flex cursor-pointer items-center gap-3 rounded-sm px-3 py-3 transition-all hover:brightness-125">
            <User className="text-text size-[21px]" />
            <span className="text-text font-semibold">Profile</span>
          </div>
          <div className="hover:bg-hover/40 flex cursor-pointer items-center gap-3 rounded-sm px-3 py-3 transition-all hover:brightness-125">
            <CircleEllipsis className="text-text size-[21px]" />
            <span className="text-text font-semibold">More</span>
          </div>
        </div>

        <Button>Tweet</Button>
      </div>

      <div className="flex items-center gap-4 pr-4">
        <img
          src="https://thispersondoesnotexist.com/"
          className="size-10 rounded-full"
          alt="Nome do Usuário"
        />

        <div className="flex-1 -space-y-0.5">
          <div className="text-text text-[15px] font-bold">João da Silva</div>
          <div className="text-text text-[13px] font-bold">@joao</div>
        </div>

        <div className="ml-5">
          <Ellipsis className="text-text size-5" />
        </div>
      </div>
    </div>
  );
};
