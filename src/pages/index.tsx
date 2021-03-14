import { GetServerSideProps } from 'next';
import * as React from 'react';
import HomePage from 'Pages/HomePage/HomePage';

type Props = {
  title: string;
};

export default function Home({ title }: Props): JSX.Element {
  return <HomePage title={title} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      title: 'This comes from server side',
    },
  };
};
