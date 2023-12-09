import Link from "next/link"
import { Flex } from "theme-ui"

import {Button} from '@nextui-org/react'

export const MenuItem = ({
  icon,
  href,
}: {
  icon: React.ReactNode | React.ReactNode[]
  href: string
}) => {
  return (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",

        "&:hover": {
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "text",
        },
      }}
    >
      <Link href={href}>
        <Button >{icon}</Button>
        <Button>Click me</Button>
      </Link>
    </Flex>
  )
}
