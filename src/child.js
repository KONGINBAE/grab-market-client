function ChildComponent(props) {
  const { name, age } = props;
  return (
    <div>
      <p>나는 자식이다.</p>
      <p>
        이름은 {name}이며 나이는 {age} 이다.
      </p>
    </div>
  );
}
export default ChildComponent;
