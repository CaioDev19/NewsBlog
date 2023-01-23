import { Fragment } from "react"
import { Row, Col, Image, Placeholder } from "react-bootstrap"

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
      <Placeholder
        as={Row}
        animation="glow"
        style={{
          width: "100%",
          maxWidth: size === "mdn" ? "100%" : "1000px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: size === "mdn" ? "column" : "row",
        }}
      >
        <Col
          xs={4}
          style={{ width: size === "mdn" ? "100%" : "45%" }}
        >
          <Image
            src="https://via.placeholder.com/600C/?text=Carregando..."
            fluid
            style={{
              maxHeight:
                size === "lrg" || size === "mdn" ? "350px" : "125px",
              width: "100%",
              objectFit: "cover",
              borderRadius: "25px",
            }}
          />
        </Col>
        <Col
          xs={8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem",
            width: size === "mdn" ? "100%" : "55%",
          }}
        >
          <Placeholder xs={10} /> <Placeholder xs={10} />{" "}
          <Placeholder xs={10} /> <Placeholder xs={10} />{" "}
        </Col>
      </Placeholder>
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
