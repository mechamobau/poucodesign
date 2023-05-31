import { PropsWithChildren } from 'react';
import Shape from './Shape';
import { styled } from '../stitches.config';
import Heading from './Heading';
import Subtitle from './Subtitle';
import Paragraph from './Paragraph';

const Card = ({ children }: PropsWithChildren) => {
  return (
    <Shape>
      {children}
    </Shape>
  );
};

const CardTitle = styled(Heading, {
    marginBottom: '$spacingStackXxs',
});

const CardSubtitle = styled(Subtitle, {
    marginBottom: '$spacingStackXxs',
});

const CardContent = styled(Paragraph, {
    marginBottom: '$spacingStackSm',
});

Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Content = CardContent;

export default Card;