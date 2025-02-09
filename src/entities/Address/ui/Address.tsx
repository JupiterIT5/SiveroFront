// import { useGetAddressesQuery } from "@/shared/api/AddressApi/AddressApi";
import {
  useAddAddressesMutation,
  useDeleteAddressesMutation,
  useGetAddressesQuery,
  useUpdateAddressesMutation,
} from "@/shared/api/AddressApi/AddressApi";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { z } from "zod";
import { GoPencil } from "react-icons/go";
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";

interface IModal {
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUpdModal {
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  item: {
    id: number;
    apartment: string | null;
    city: string;
    created_at: string;
    house: string | null;
    is_primary: 0 | 1;
    pivot: Pivot;
    postal_code: string;
    state: string;
    street: string | null;
    updated_at: string;
  };
}

const formSchema = z.object({
  state: z.string().nonempty({
    message: "Почта введена неправильно",
  }),
  city: z.string().nonempty({
    message: "Пароль должен содержать не менее 8 символов",
  }),
  street: z.string().nonempty({
    message: "Подтверждение пароля должно содержать не менее 8 символов",
  }),
  house: z.string().nonempty({
    message: "Имя обязательно для заполнения",
  }),
  postal_code: z.string().nonempty({
    message: "Почтовый индекс обязательна для заполнения",
  }),
  apartment: z.string().nonempty({
    message: "Апартаменты обязательное поле",
  }),
});

type FormFields = z.infer<typeof formSchema>;

const Modal = ({ click, setClick }: IModal) => {
  const [addAddresses] = useAddAddressesMutation();
  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      state: "",
      city: "",
      street: "",
      house: "",
      postal_code: "",
    },
  });

  const handleChange = async (values: FormFields) => {
    try {
      const requestBody = {
        is_primary: false,
        state: values.state,
        city: values.city,
        street: values.street,
        house: values.house,
        postal_code: values.postal_code,
        apartment: values.apartment,
      };
      setClick(false);
      const result = await addAddresses(requestBody).unwrap();
      console.log("result: " + result);
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <>
      {" "}
      {click ? (
        <div className="z-50 bg-black/50 w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
          <div className="w-[500px] transform bg-white p-6 py-8 rounded-[5px]">
            <button onClick={() => setClick(false)}>
              <RxCross2 className="absolute top-0 right-0 cursor-pointer m-3" size={30} />{" "}
            </button>
            <form onSubmit={form.handleSubmit(handleChange)} className="flex flex-col gap-[20px]">
              <label className="input bg-transparent border-b border-[#423C3D] border-x-0 border-t-0 rounded-none flex items-center gap-2">
                <input type="text" placeholder="Государство" {...form.register("state")} />
              </label>
              <label className="input bg-transparent border-b border-[#423C3D] border-x-0 border-t-0 rounded-none flex items-center gap-2">
                <input type="text" placeholder="Город" {...form.register("city")} />
              </label>
              <label className="input bg-transparent border-b border-[#423C3D] border-x-0 border-t-0 rounded-none flex items-center gap-2">
                <input type="text" placeholder="Улица" {...form.register("street")} />
              </label>
              <label className="input bg-transparent border-b border-[#423C3D] border-x-0 border-t-0 rounded-none flex items-center gap-2">
                <input type="text" placeholder="Дом" {...form.register("house")} />
              </label>
              <label className="input bg-transparent border-b border-[#423C3D] border-x-0 border-t-0 rounded-none flex items-center gap-2">
                <input type="text" placeholder="Почтовый индекс" {...form.register("postal_code")} />
              </label>
              <label className="input bg-transparent border-b border-[#423C3D] border-x-0 border-t-0 rounded-none flex items-center gap-2">
                <input type="text" placeholder="Квартира" {...form.register("apartment")} />
              </label>
              <button>Сохранить адрес</button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const UpdateModal = ({ click, setClick, item }: IUpdModal) => {
  const [updateAddresses] = useUpdateAddressesMutation();

  const getDefaultValues = (item: AddressItem) => ({
    id: item.id,
    state: item.state || "",
    city: item.city || "",
    street: item.street || "",
    house: item.house || "",
    postal_code: item.postal_code || "",
    apartment: item.apartment || "",
    created_at: item.created_at || "",
    is_primary: 0,
    pivot: {
      user_id: item.pivot.user_id || "",
      address_id: item.pivot.address_id || "",
      created_at: item.pivot.created_at || "",
      updated_at: item.pivot.updated_at || "",
    },
    updated_at: item.updated_at || "",
  });

  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaultValues(item),
  });

  useEffect(() => {
    if (item) {
      form.reset(getDefaultValues(item));
    }
  }, [item, form]);

  const handleChange = async (values: FormFields) => {
    try {
      const requestBody = {
        id: item.id,
        is_primary: false,
        state: values.state,
        city: values.city,
        street: values.street,
        house: values.house,
        postal_code: values.postal_code,
        apartment: values.apartment,
      };
      const result = await updateAddresses(requestBody).unwrap();
      console.log("result: " + result);
      setClick(false);
      toast.info(`Адрес изменен`, {
        position: "top-right",
      });
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <>
      {click ? (
        <div className="z-50 bg-black/50 w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
          <div className="w-[500px] transform bg-white p-6 py-8 rounded-[5px]">
            <button onClick={() => setClick(false)}>
              <RxCross2 className="absolute top-0 right-0 cursor-pointer m-3" size={30} />{" "}
            </button>
            <form onSubmit={form.handleSubmit(handleChange)} className="flex flex-col gap-[20px]">
              <label className="input bg-transparent border-b border-[#423C3D] border-x-0 border-t-0 rounded-none flex items-center gap-2">
                <input type="text" placeholder="Государство" {...form.register("state")} />
              </label>
              <label className="input bg-transparent border-b border-[#423C3D] border-x-0 border-t-0 rounded-none flex items-center gap-2">
                <input type="text" placeholder="Город" {...form.register("city")} />
              </label>
              <label className="input bg-transparent border-b border-[#423C3D] border-x-0 border-t-0 rounded-none flex items-center gap-2">
                <input type="text" placeholder="Улица" {...form.register("street")} />
              </label>
              <label className="input bg-transparent border-b border-[#423C3D] border-x-0 border-t-0 rounded-none flex items-center gap-2">
                <input type="text" placeholder="Дом" {...form.register("house")} />
              </label>
              <label className="input bg-transparent border-b border-[#423C3D] border-x-0 border-t-0 rounded-none flex items-center gap-2">
                <input type="text" placeholder="Почтовый индекс" {...form.register("postal_code")} />
              </label>
              <label className="input bg-transparent border-b border-[#423C3D] border-x-0 border-t-0 rounded-none flex items-center gap-2">
                <input type="text" placeholder="Квартира" {...form.register("apartment")} />
              </label>
              <button>Сохранить адрес</button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

interface Pivot {
  user_id: number;
  address_id: number;
  created_at: string;
  updated_at: string;
}

interface AddressItem {
  id: number;
  apartment: string | null;
  city: string;
  created_at: string;
  house: string | null;
  is_primary: 0 | 1;
  pivot: Pivot;
  postal_code: string;
  state: string;
  street: string | null;
  updated_at: string;
}

const Address = () => {
  const { data, isSuccess } = useGetAddressesQuery({});

  const [click, setClick] = useState(false);
  // const [click2, setClick2] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [deleteAddresses] = useDeleteAddressesMutation();

  const handleDelete = (id: number) => {
    deleteAddresses({ id: id });
    toast.error(`Адрес удален `, {
      position: "top-right",
    });
  };

  return (
    <div className="mt-[100px] max-w-[600px] h-[300px] w-full flex flex-col gap-[50px] overflow-x-auto">
      {isSuccess ? (
        data.map((item: AddressItem) => (
          <div key={item.id} className="flex max-w-[800px] w-full">
            {/* <h3>Адрес #{item.id}</h3> */}
            <div className="address-details max-w-[500px] w-full">
              {item.state && <p>Штат: {item.state}</p>}
              {item.city && <p>Город: {item.city}</p>}
              {(item.street || item.house) && (
                <p>
                  Улица: {item.street} {item.house}
                  {item.apartment && `, кв. ${item.apartment}`}
                </p>
              )}
              {item.postal_code && <p>Почтовый индекс: {item.postal_code}</p>}
              <div className="meta-info">
                <small>Создан: {new Date(item.created_at).toLocaleDateString()}</small>
                <small>Обновлён: {new Date(item.updated_at).toLocaleDateString()}</small>
              </div>
            </div>
            <div className="flex gap-[20px]">
              <button onClick={() => setEditingId(item.id)}>
                <GoPencil size={20} className="cursor-pointer" />
              </button>

              {editingId === item.id ? (
                <UpdateModal click={true} setClick={() => setEditingId(null)} item={item} />
              ) : (
                ""
              )}
              <button onClick={() => handleDelete(item.id)}>
                <FaRegTrashCan size={20} className="cursor-pointer" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Сохранненых адресов нет</p>
      )}
      <button className="bg-gray-100 text-[#423C3D] px-4 py-2 hover:bg-gray-300 w-full" onClick={() => setClick(true)}>
        {" "}
        Добавить новый адрес{" "}
      </button>

      {click ? <Modal click={click} setClick={() => setClick(prev => !prev)} /> : ""}
    </div>
  );
};

export default Address;
