import Card from "react-bootstrap/Card"
import Placeholder from "react-bootstrap/Placeholder"

export function CardSkeleton() {
  return (
    <Card style={{ width: "100%" }}>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
        <Placeholder xs={6} />
        <Placeholder xs={4} size={"sm"} />
      </Placeholder>
      <Card.Img
        variant="top"
        src="https://via.placeholder.com/600C/?text=Loading..."
        style={{ maxHeight: "600px", objectFit: "cover" }}
      />
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
