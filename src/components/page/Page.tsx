export default function Page(props) {
  return (
    <section className="flex flex-col">
      {props.children}
    </section>
  );
}
