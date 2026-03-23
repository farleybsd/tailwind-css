import {
  BadgeCheck,
  Calendar,
  ChartSpline,
  Heart,
  Image,
  ImagePlay,
  Laugh,
  MessageCircle,
  Repeat2,
  WandSparkles,
} from "lucide-react";
import { Button } from "./button";

const FeedItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex gap-5 px-6 py-4">
      <img
        src="https://picsum.photos/100"
        className="size-11 rounded-full"
        alt="Nome do Usuário"
      />

      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="text-text text-[15px] font-semibold">{title}</div>
          <BadgeCheck className="text-blue -ml-1 size-4" fill="#1c8fdb53" />
          <div className="text-gray text-sm lowercase">@{title}</div>
          <div className="text-gray text-sm lowercase">• 7m</div>
        </div>
        <div className="text-text text-sm">{description}</div>
        <div className="mt-5 flex items-center gap-7">
          <div className="flex items-center gap-1.5">
            <MessageCircle className="text-gray size-4" />
            <span className="text-gray text-xs font-medium">103</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Repeat2 className="text-gray size-4" />
            <span className="text-gray text-xs font-medium">79</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Heart className="text-gray size-4" />
            <span className="text-gray text-xs font-medium">1.000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Feed = () => {
  return (
    <div className="divide-border divide-y">
      <div className="flex h-14 items-center justify-between px-5">
        <div className="text-text text-lg font-semibold">Home</div>
        <WandSparkles className="text-text size-4" />
      </div>

      <div className="flex gap-5 px-5 py-2">
        <div>
          <img
            src="https://thispersondoesnotexist.com/"
            className="size-11 rounded-full"
            alt="Nome Do Usuário"
          />
        </div>

        <div className="flex-1 space-y-4 py-1">
          <input
            className="text-text/70 focus:text-text placeholder:text-gray w-full border-none duration-300 outline-none"
            placeholder="'What’s happening?"
          />

          <div className="flex">
            <div className="text-blue flex flex-1 items-center gap-3">
              <Image className="size-4.5" />
              <ImagePlay className="size-4.5" />
              <ChartSpline className="size-4.5" />
              <Laugh className="size-4.5" />
              <Calendar className="size-4.5" />
            </div>

            <Button variant="small" disabled>
              Tweet
            </Button>
          </div>
        </div>
      </div>

      <div className="divide-border divide-y">
        <FeedItem
          title="CNN"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <FeedItem
          title="CNN"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <FeedItem
          title="CNN"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <FeedItem
          title="CNN"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <FeedItem
          title="CNN"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <FeedItem
          title="CNN"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <FeedItem
          title="CNN"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <FeedItem
          title="CNN"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <FeedItem
          title="CNN"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </div>
    </div>
  );
};
