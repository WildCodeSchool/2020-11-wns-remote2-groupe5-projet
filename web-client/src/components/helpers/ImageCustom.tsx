import React from "react"
import { Image } from "@chakra-ui/image"

type ImageCustomProps = {
  src: string
  alt: string
}

const ImageCustom = (props: ImageCustomProps) => {
  const {src, alt } = props;
  return(
    <Image
      w={{base:"160px",sm:"200px",md:"260px",lg:"300px", xl:"320px"}}
      borderRadius={'2xl'}
      src={src}
      alt={alt}
    />
  )
}

export default ImageCustom