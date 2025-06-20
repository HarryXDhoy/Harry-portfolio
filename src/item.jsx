export default function MyItem() {
  function showpage() {
    alert("harry");
  }
  return <div onClick={showpage}>Hello harry</div>;
}
