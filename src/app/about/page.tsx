"use client";
import React from "react";
import { useSpring, animated } from "@react-spring/web";

export default function About() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const styles = useSpring({
    loop: true,
    to: { transform: "rotate(360deg)" },
    from: { transform: "rotate(0deg)" },
    config: { duration: 3000 },
    reset: mounted,
  });

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <animated.div style={styles}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-24 h-24"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.262.793-.583v-2.167c-3.338.725-4.033-1.417-4.033-1.417-.544-1.387-1.33-1.756-1.33-1.756-1.087-.744.082-.73.082-.73 1.2.082 1.83 1.225 1.83 1.225 1.07 1.83 2.803 1.3 3.488.994.106-.776.417-1.3.762-1.6-2.667-.3-5.467-1.335-5.467-5.933 0-1.31.467-2.388 1.233-3.228-.125-.303-.533-1.528.116-3.178 0 0 1.005-.322 3.3 1.233a11.53 11.53 0 013.003-.4c1.017.005 2.042.138 3.003.4 2.292-1.556 3.297-1.233 3.297-1.233.65 1.65.242 2.875.12 3.178.767.84 1.23 1.918 1.23 3.228 0 4.608-2.805 5.628-5.475 5.922.428.37.817 1.1.817 2.217v3.293c0 .32.19.703.8.582C20.565 21.797 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      </animated.div>
      <a href="https://github.com/sFarkhod" className="mt-8 text-white text-xl">
        https://github.com/sFarkhod
      </a>
    </div>
  );
}
