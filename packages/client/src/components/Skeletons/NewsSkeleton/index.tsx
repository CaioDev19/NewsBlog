import { Fragment } from "react"
import { Placeholder } from "react-bootstrap"
import * as Sc from "./style"

export function NewsSkeleton({
  amount = 1,
  size,
}: {
  amount?: number
  size?: "sml" | "lrg" | "mdn"
}) {
  const loadings = []

  for (let i = 0; i < amount; i++) {
    loadings.push(
      <Sc.StyledPlaceholder animation="glow" size={size}>
        <Sc.ImagePlaceholder size={size} />
        <Sc.TextCol xs={8} size={size}>
          <Placeholder xs={10} /> <Placeholder xs={10} />{" "}
          <Placeholder xs={10} /> <Placeholder xs={10} />{" "}
        </Sc.TextCol>
      </Sc.StyledPlaceholder>
    )
  }
  return (
    <>
      {loadings.map((l, index: number) => (
        <Fragment key={index}>{l}</Fragment>
      ))}
    </>
  )
}
