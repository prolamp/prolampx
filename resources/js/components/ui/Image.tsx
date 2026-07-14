import React, { CSSProperties } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    fill?: boolean;
    priority?: boolean;
    sizes?: string;
    width?: number;
    height?: number;
    style?: CSSProperties;
}

const Image: React.FC<ImageProps> = ({
    src,
    alt,
    fill,
    priority,
    sizes,
    width,
    height,
    style,
    ...props
}) => {
    if (fill) {
        return (
            <img
                src={src}
                alt={alt}
                loading={priority ? "eager" : "lazy"}
                sizes={sizes}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    ...style,
                }}
                {...props}
            />
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            sizes={sizes}
            style={style}
            {...props}
        />
    );
};

export default Image;
