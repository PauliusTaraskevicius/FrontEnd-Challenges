import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";



type Props = {
  href: string;
  label: string;
};

const Button = ({ href, label }: Props) => {
  return (
    <Link href={href}>
      <AnimatedSubscribeButton
        buttonColor="#000000"
        buttonTextColor="#ffffff"
        subscribeStatus={false}
        initialText={
          <span className="group inline-flex items-center">
            {label}
            <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        }
        changeText={
          <span className="group inline-flex items-center">Loading...</span>
        }
      />
    </Link>
  );
};

export default Button;
