import { Fragment } from "react"
import { Row, Col, Image, Placeholder } from "react-bootstrap"

export function NewsSkeleton({ amount = 1 }: { amount?: number }) {
  const loadings = []

  for (let i = 0; i < amount; i++) {
    loadings.push(
      <Placeholder as={Row} animation="glow">
        <Col xs={4}>
          <Image
            src="https://via.placeholder.com/600C/?text=Loading..."
            fluid
            style={{
              maxHeight: "400px",
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
