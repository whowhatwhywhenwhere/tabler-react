import * as React from "react";

import { storiesOf } from "@storybook/react";

import Card from ".";
import examples from "./Card.examples.md";
import { Button } from "..";
import Grid from "../Grid";
import Dimmer from "../Dimmer";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Card/Card", module);

stories.add(
  "Example",
  () => {
    return (
      <Card
        title="Card title"
        body={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          deleniti fugit incidunt, iste, itaque minima neque pariatur
          perferendis sed suscipit velit vitae voluptatem. A consequuntur,
          deserunt eaque error nulla temporibus!`}
      />
    );
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Advanced", () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Card title</Card.Title>
        <Card.Options>
          <Button color="primary" size="sm">
            Action 1
          </Button>
          <Button color="secondary" size="sm" className="ml-2">
            Action 2
          </Button>
        </Card.Options>
      </Card.Header>
      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
        deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis
        sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque
        error nulla temporibus!
      </Card.Body>
      <Card.Footer>This is standard card footer</Card.Footer>
    </Card>
  );
});

stories.add("Row Deck", () => {
  return (
    <Grid.Row cards deck>
      <Grid.Col md={4}>
        <Card body="Short content" />
      </Grid.Col>
      <Grid.Col md={4}>
        <Card
          body={`Extra long content of card. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr`}
        />
      </Grid.Col>
      <Grid.Col md={4}>
        <Card body="Short content" />
      </Grid.Col>
    </Grid.Row>
  );
});

stories.add("With Loader", () => {
  return (
    <Card title="Card with loader" isClosable isCollapsible>
      <Card.Body>
        <Dimmer active loader>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          deleniti fugit incidunt, iste, itaque minima neque pariatur
          perferendis sed suscipit velit vitae voluptatem. A consequuntur,
          deserunt eaque error nulla temporibus!
        </Dimmer>
      </Card.Body>
    </Card>
  );
});
