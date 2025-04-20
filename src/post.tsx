interface Props {
  content: string;
  author: string;
}

export function Post(props: Props) {
  return (
    <>
      <h1>{props.content}</h1>
      <strong>
        <h2>{props.author}</h2>
      </strong>
    </>
  );
}
