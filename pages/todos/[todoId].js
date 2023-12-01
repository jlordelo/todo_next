import Link from 'next/link';

export async function getStaticProps(context) {
  const { params } = context;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`,
  );

  const todo = await data.json();

  return {
    props: { todo },
  };
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const data = await response.json();

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export default function Todo({ todo }) {
  return (
    <>
      <Link href="/todos" legacyBehavior>
        <a>Voltar</a>
      </Link>
      <h1>Exibindo o Todo: {todo.id}</h1>
      <p>
        Comentário: lalalalala
        <Link href={`/todos/${todo.id}/comments/1`} legacyBehavior>
          <a>Detalhes</a>
        </Link>
      </p>
      <p>
        Comentário: lelelelele
        <Link href={`/todos/${todo.id}/comments/2`} legacyBehavior>
          <a>Detalhes</a>
        </Link>
      </p>
      <p>
        Comentário: lilililili
        <Link href={`/todos/${todo.id}/comments/3`} legacyBehavior>
          <a>Detalhes</a>
        </Link>
      </p>
    </>
  );
}
