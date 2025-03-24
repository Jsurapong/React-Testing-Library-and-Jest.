import { FormEvent, useState } from "react";

type UserFormProps = { onUserAdd: (name: string, email: string) => void };
const UserForm = ({ onUserAdd }: UserFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUserAdd(name, email);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">Add user</button>
    </form>
  );
};

export default UserForm;
