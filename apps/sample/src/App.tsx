import { Button, Card, Heading as BaseHeading, Paragraph as BaseParagraph, Subtitle as BaseSubtitle } from 'ui';
import { styled } from 'ui/stitches.config';

const Heading = styled(BaseHeading, {
  marginBottom: '$spacingStackXxs'
});

const Subtitle = styled(BaseSubtitle, {
  marginBottom: '$spacingStackXxs',
});

const Paragraph = styled(BaseParagraph, {
  marginBottom: '$spacingStackXl',
});

const Container = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '$spacingInsetNano'
})

function App() {
  return (
    <Container>
      <Heading>Sample</Heading>
      <Subtitle>Subtitle SM</Subtitle>
      <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Paragraph>
      <Card>
        <Card.Title>Heading SM</Card.Title>
        <Card.Subtitle>Subtitle SM</Card.Subtitle>
        <Card.Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer when an unknown printer took a galley of type and scrambled.</Card.Content>
        <Button>Button Label</Button>
      </Card>
    </Container>
  );
}

export default App;
