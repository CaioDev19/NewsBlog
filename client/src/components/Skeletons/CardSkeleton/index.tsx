import Card from "react-bootstrap/Card"
import Placeholder from "react-bootstrap/Placeholder"

export function CardSkeleton() {
  return (
    <Card style={{ width: "100%", flexWrap: "wrap" }}>
      <Placeholder xs={10} as={Card.Title} animation="glow">
        <Placeholder xs={6} />
        <Placeholder xs={6} />
        <Placeholder xs={4} size={"sm"} />
      </Placeholder>
      <Card.Header style={{ width: "100%", height: "700px" }} />
      <Card.Body>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={12} /> <Placeholder xs={12} />{" "}
          <Placeholder xs={12} /> <Placeholder xs={12} />{" "}
          <Placeholder xs={12} />
          <Placeholder xs={12} /> <Placeholder xs={12} />{" "}
          <Placeholder xs={12} /> <Placeholder xs={12} />{" "}
          <Placeholder xs={12} />
          <Placeholder xs={12} /> <Placeholder xs={12} />{" "}
          <Placeholder xs={12} /> <Placeholder xs={12} />{" "}
          <Placeholder xs={12} />
        </Placeholder>
      </Card.Body>
    </Card>
  )
}
