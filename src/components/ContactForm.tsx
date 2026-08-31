"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./Icon";

export function ContactForm({
  title = "Gửi yêu cầu liên hệ",
  submitLabel = "Gửi yêu cầu ngay",
  showWebsiteTypeField = false,
  buttonVariant = "orange",
}: {
  title?: string;
  submitLabel?: string;
  showWebsiteTypeField?: boolean;
  buttonVariant?: "orange" | "navy";
}) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-brand-border bg-white p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <p className="text-base font-bold text-brand-navy">Đã gửi yêu cầu thành công!</p>
        <p className="text-sm text-slate-500">
          Chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-brand-border bg-white p-6">
      <h3 className="text-base font-bold text-brand-navy">{title}</h3>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700">Họ và tên *</label>
          <input
            required
            type="text"
            placeholder="Nhập họ và tên"
            className="mt-1.5 w-full rounded-lg border border-brand-border px-3.5 py-2.5 text-sm outline-none focus:border-brand-navy"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">Số điện thoại *</label>
          <input
            required
            type="tel"
            placeholder="Nhập số điện thoại"
            className="mt-1.5 w-full rounded-lg border border-brand-border px-3.5 py-2.5 text-sm outline-none focus:border-brand-navy"
          />
        </div>
        <div className={showWebsiteTypeField ? "" : "sm:col-span-2"}>
          <label className="text-sm font-medium text-slate-700">Email</label>
          <input
            type="email"
            placeholder="Nhập email"
            className="mt-1.5 w-full rounded-lg border border-brand-border px-3.5 py-2.5 text-sm outline-none focus:border-brand-navy"
          />
        </div>
        {showWebsiteTypeField && (
          <div>
            <label className="text-sm font-medium text-slate-700">Loại website</label>
            <select className="mt-1.5 w-full rounded-lg border border-brand-border px-3.5 py-2.5 text-sm outline-none focus:border-brand-navy">
              <option>Website giới thiệu</option>
              <option>Website bán hàng</option>
              <option>Landing page</option>
              <option>Khác</option>
            </select>
          </div>
        )}
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-slate-700">Nội dung yêu cầu *</label>
          <textarea
            required
            rows={4}
            placeholder="Nhập nội dung cần tư vấn, sửa chữa, báo giá..."
            className="mt-1.5 w-full resize-none rounded-lg border border-brand-border px-3.5 py-2.5 text-sm outline-none focus:border-brand-navy"
          />
        </div>
      </div>
      <button
        type="submit"
        className={`mt-5 flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white ${
          buttonVariant === "navy"
            ? "bg-brand-navy hover:bg-brand-navy-dark"
            : "bg-brand-orange hover:bg-brand-orange-dark"
        }`}
      >
        {submitLabel}
      </button>
    </form>
  );
}
