import React, { useState, Children } from "react"
import {
  Segment,
  Sidebar,
  Menu,
  Grid,
  GridRow as Row,
  GridColumn as Column,
  Icon,
  Container
} from "semantic-ui-react"

const noSpace = {
  paddingLeft: "0px !important",
  paddingRight: "0px !important",
  paddingBottom: "0px !important",
  paddingTop: "0px !important"
}

export default function MainLayout(props = {}) {
  const [visible, setVisible] = useState(true)
  const children = Children.toArray(props.children)
  const [navigation, content] = children

  return (
    <Grid fluid style={{ height: "100%", minHeight: "100vh" }}>
      <Row only="mobile">
        <Column width={16}>
          <Sidebar.Pushable
            style={{ borderRadius: "0px", margin: 0, padding: 0 }}
          >
            <Sidebar
              as={Menu}
              vertical
              fluid
              inverted
              visible={visible}
              onHide={() => setVisible(false)}
              style={{
                minHeight: "100vh",
                height: "100%",
                borderRadius: "0px !important"
              }}
            >
              {navigation}
            </Sidebar>
            <Sidebar.Pusher dimmed={visible}>
              <Icon name="bars" onClick={() => setVisible(true)} />
              <Container>{content}</Container>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Column>
      </Row>
      <Row only="tablet computer">
        <Column width={2}>
          <Menu
            vertical
            inverted
            style={{
              borderRadius: "0px !important",
              minHeight: "100vh",
              height: "100%"
            }}
          >
            {navigation}
          </Menu>
        </Column>
        <Column width={14}>{content}</Column>
      </Row>
    </Grid>
  )
}
