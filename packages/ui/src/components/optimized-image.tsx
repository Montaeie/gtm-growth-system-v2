"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { shimmer, toBase64 } from "../utils/image-blur";

interface OptimizedImageProps extends Omit<ImageProps, "placeholder"> {
  /**
   * Optional blur data URL for placeholder
   */
  blurDataURL?: string;
}

/**
 * Optimized Image component with blur placeholder and loading states
 */
export function OptimizedImage({
  src,
  alt,
  blurDataURL,
  className,
  onLoad,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      className={`
        ${className || ""}
        ${
          isLoading
            ? "scale-105 blur-sm grayscale"
            : "scale-100 blur-0 grayscale-0"
        }
        transition-all duration-300 ease-in-out
      `}
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={
        blurDataURL ||
        `data:image/svg+xml;base64,${toBase64(
          shimmer(props.width as number, props.height as number),
        )}`
      }
      onLoad={(event) => {
        setIsLoading(false);
        onLoad?.(event);
      }}
      {...props}
    />
  );
}
