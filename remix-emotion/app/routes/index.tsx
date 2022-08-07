import styled from '@emotion/styled';

const MyStyledH1 = styled.h1`
  font-size: 5rem;
  color: green;
`;

export default function JokesIndexRoute() {
  return (
    <div>
      <MyStyledH1>Welcome to Remix</MyStyledH1>
      <p>Here's a random joke:</p>
      <p>
        I was wondering why the frisbee was getting bigger,
        then it hit me.
      </p>
    </div>
  );
}