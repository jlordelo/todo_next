import Link from 'next/link';
import styles from '../../styles/Todos.module.css';

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos');

  const todos = await data.json();

  //console.log(todos);
  return {
    props: {
      todos,
    },
  };
}

export default function Todos({ todos }) {
  return (
    <>
      <h1>Tarefas para fazer</h1>
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>
              {todo.id} - {todo.title} -{' '}
              <Link href={`/todos/${todo.id}`} legacyBehavior>
                <a>Ver mais</a>
              </Link>
            </span>
            <input type="checkbox" />
          </li>
        ))}
      </ul>
    </>
  );
}
