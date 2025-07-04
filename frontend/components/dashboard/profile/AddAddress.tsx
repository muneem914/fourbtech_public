"use client";
import { useAddNewAddressMutation } from "@/lib/redux/api/userApi";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddAddress = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    label: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const [addNewAddress, { isSuccess, isError }] = useAddNewAddressMutation();

  const isDisabled =
    !form.label ||
    !form.street ||
    !form.city ||
    !form.state ||
    !form.postalCode ||
    !form.country;

  useEffect(() => {
    if (isError) {
      toast.error("Error in adding new address");
    }
    if (isSuccess) {
      toast.success("New address saved");
      setForm({
        label: "",
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      });
      setOpen(false);
    }
  }, [isError, isSuccess]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addNewAddress(form);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="disabled:bg-gray-300 disabled:cursor-not-allowed rounded px-3 py-2 flex gap-3 bg-red-500 cursor-pointer text-white"
      >
        <Plus /> Add Address
      </button>

      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <DialogPanel
          className="
      relative z-50 w-full max-w-4xl max-h-[90vh] overflow-hidden
      rounded-xl bg-white shadow-xl flex flex-col
    "
        >
          <div className="flex-shrink-0 p-6">
            <DialogTitle className="text-xl font-semibold text-gray-900">
              Add New Address
            </DialogTitle>
          </div>
          <form onSubmit={handleSubmit} className="overflow-y-auto">
            <div className="flex-1 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                <div className="grid mb-3">
                  <label htmlFor="label" className="mb-2">
                    Label<span className="text-red-600 ml-2">*</span>
                  </label>
                  <input
                    type="text"
                    name="label"
                    id="label"
                    value={form.label}
                    required
                    onChange={handleChange}
                    placeholder="e.g. Home, Work, Office. . "
                    className="border rounded p-2"
                  />
                </div>
                <div className="grid mb-3">
                  <label htmlFor="street" className="mb-2">
                    Street<span className="text-red-600 ml-2">*</span>
                  </label>
                  <input
                    type="text"
                    name="street"
                    id="street"
                    value={form.street}
                    required
                    onChange={handleChange}
                    placeholder="Your Street Address"
                    className="border rounded p-2"
                  />
                </div>
                <div className="grid mb-3">
                  <label htmlFor="postalCode" className="mb-2">
                    Postal Code<span className="text-red-600 ml-2">*</span>
                  </label>
                  <input
                    type="number"
                    name="postalCode"
                    id="postalCode"
                    value={form.postalCode}
                    required
                    onChange={handleChange}
                    placeholder="e.g. 5800, 9203"
                    className="border rounded p-2"
                  />
                </div>
                <div className="grid mb-3">
                  <label htmlFor="country" className="mb-2">
                    Country<span className="text-red-600 ml-2">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    value={form.country}
                    required
                    onChange={handleChange}
                    placeholder="e.g. Bangladesh"
                    className="border rounded p-2"
                  />
                </div>
                <div className="grid mb-3">
                  <label htmlFor="state" className="mb-2">
                    State/Division<span className="text-red-600 ml-2">*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={form.state}
                    required
                    onChange={handleChange}
                    placeholder="e.g. Dhaka, Rajshahi"
                    className="border rounded p-2"
                  />
                </div>
                <div className="grid mb-3">
                  <label htmlFor="city" className="mb-2">
                    City/District<span className="text-red-600 ml-2">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={form.city}
                    required
                    onChange={handleChange}
                    placeholder="e.g. Bogura, Naogaon"
                    className="border rounded p-2"
                  />
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="rounded order-2 sm:order-1 border border-red-600 flex gap-2 items-center justify-center bg-white py-3 font-semibold text-red-600 hover:bg-red-600 hover:text-white"
                >
                  <X /> Cancel
                </button>
                <button
                  type="submit"
                  disabled={isDisabled}
                  className="disabled:cursor-not-allowed disabled:bg-gray-300 cursor-pointer rounded bg-red-600 py-3 order-1 sm:order-2 flex gap-2 items-center justify-center font-semibold text-white hover:bg-red-500"
                >
                  <Plus /> Add Address
                </button>
              </div>
            </div>
          </form>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default AddAddress;
