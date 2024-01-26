import { useState } from "react";

interface AppProps {
  pageTitle: string;
}
interface User {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
}

function App({ pageTitle }: AppProps) {
  const [name, setName] = useState("");
  const [user, setUser] = useState<User>();

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const contactInfo = new FormData(target);
    const contactInfoDataObject = Object.fromEntries(
      contactInfo.entries()
    ) as unknown as User & { age: string };
    const userData: User = {
      firstName: contactInfoDataObject.firstName,
      lastName: contactInfoDataObject.lastName,
      gender: contactInfoDataObject.gender,
      age: Number(contactInfoDataObject.age),
    };
    setUser(userData);
    console.log(userData);
  };

  return (
    <div>
      <h1>{pageTitle}</h1>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="firstName">First Name </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleSetName}
          />
        </div>
        <br />
        <div>
          <label htmlFor="lastName">Last Name </label>
          <input id="lastName" name="lastName" type="text" />
        </div>
        <br />
        <div>
          <label htmlFor="gender">Gender </label>
          <select id="gender" name="gender">
            <option value="female"> Female</option>
            <option value="male"> Male</option>
            <option value="noValue"> Don't want to say</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="age">Age </label>
          <input id="age" name="age" type="number" />
        </div>
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <div>
        <div>
          <p>Name: {user?.firstName}</p>
          <p>Last Name: {user?.lastName}</p>
          <p>Gender: {user?.gender}</p>
          <p>Age: {user?.age}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
