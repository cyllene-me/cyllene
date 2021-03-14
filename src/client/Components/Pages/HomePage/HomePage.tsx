import React from 'react';
import { Title } from './HomePage.styles';

type Props = {
  title: string;
};

export default function HomePage({ title }: Props): JSX.Element {
  return <Title>{title}</Title>;
}
