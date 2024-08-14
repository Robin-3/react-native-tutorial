interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  country: string;
  houseNo: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    firstName: "Fernando",
    lastName: "Herrera",
    age: 37,
    address: {
      country: "Canada",
      houseNo: 615
    }
  };

  return (
    <>
      <h3>Objetos literales</h3>
      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>
    </>
  );
};
