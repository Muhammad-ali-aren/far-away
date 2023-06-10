export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>start adding some items to your packing list!</em>
      </footer>
    );
  }
  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((totalPacked / totalItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you have packed everything and your are ready to go!"
          : ` you have ${totalItems} item and you have already packed ${totalPacked} (
            ${percentage}%)`}
      </em>
    </footer>
  );
}
