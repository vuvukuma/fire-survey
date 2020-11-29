export default function Page(props) {
  return (
    <section class="flex flex-col">
      {props.children}
    </section>
  );
}
