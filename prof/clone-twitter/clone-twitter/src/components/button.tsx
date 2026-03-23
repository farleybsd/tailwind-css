import { tv } from "tailwind-variants";

const variants = tv({
  base: "bg-blue w-full px-4 py-2 outline-none cursor-pointer rounded-3xl text-white not-disabled:hover:bg-blue/80 font-medium duration-500 not-disabled:active:scale-95 disabled:opacity-45 disabled:cursor-not-allowed",
  variants: {
    variant: {
      small: "w-auto py-1 px-5 text-sm",
    },
  },
});

type Props = {
  children: React.ReactNode;
  variant?: keyof (typeof variants)["variants"]["variant"];
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, variant, ...props }: Props) => {
  return (
    <button className={variants({ variant })} {...props}>
      {children}
    </button>
  );
};
