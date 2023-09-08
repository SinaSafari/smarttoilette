"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function RegisterForm({ strings }: { strings: any }) {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    age: 0,
    gender: "",
  });
  async function register() {
    try {
      const res = await fetch("/api/register", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          gender: data.gender,
          age: data.age,
        }),
      });
      const parsedRes = await res.json();
      localStorage.setItem("uid", parsedRes.user.id);
      return void router.push("/no-data");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="w-full flex flex-col items-stretch gap-4 px-4">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">{strings.fullname.label}</span>
        </label>
        <input
          type="text"
          placeholder={strings.fullname.placeholder}
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="input input-bordered w-full text-xs"
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">{strings.age.label}</span>
        </label>
        <input
          type="text"
          placeholder={strings.age.placeholder}
          value={data.age}
          onChange={(e) => setData({ ...data, age: +e.target.value })}
          className="input input-bordered w-full text-xs"
        />
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">{strings.gender.label}</span>
        </label>
        <select
          defaultValue={strings.gender.options.pickOne.value}
          className="select select-bordered text-xs pr-[1rem]"
          onChange={(e) => setData({ ...data, gender: e.target.value })}
        >
          <option disabled value={strings.gender.options.pickOne.value}>
            {strings.gender.options.pickOne.label}
          </option>
          <option value={strings.gender.options.male.value}>
            {strings.gender.options.male.label}
          </option>
          <option value={strings.gender.options.female.value}>
            {strings.gender.options.female.label}
          </option>
        </select>
      </div>
      <button
        onClick={async (e) => {
          e.preventDefault();
          return await register();
        }}
        className="w-full btn btn-neutral mt-4"
      >
        {strings.btnText}
      </button>
    </div>
  );
}
