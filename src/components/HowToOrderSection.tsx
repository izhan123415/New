const ORDER_STEPS = [
  {
    number: '01',
    title: 'Choose your cake',
    description:
      'Pick a cake from the classic menu or send an inspiration photo for a custom celebration or bento cake.',
  },
  {
    number: '02',
    title: 'Contact me',
    description:
      'Tap any Order button to message me directly on WhatsApp or connect via Instagram @sweetcraft_daryna.',
  },
  {
    number: '03',
    title: 'Confirm your order',
    description:
      'Together we agree on the date, portions, flavours, inscriptions, ribbons, and price.',
  },
  {
    number: '04',
    title: 'Collection / Delivery',
    description:
      'Collect your freshly baked cake in London or arrange local delivery by agreement.',
  },
];

export function HowToOrderSection() {
  return (
    <section
      id="how-to-order"
      className="border-t border-[#E9D8CE] bg-[#F5ECE2] py-16 sm:py-22"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight text-[#2B1C16]">
            How to{' '}
            <span className="italic font-medium text-[#9E5360]">Order</span>
          </h2>
          <p className="mt-3 text-base text-[#5E453B]">
            Simple, personal ordering from the first message to collection day.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ORDER_STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-[22px] border border-[#E3CFC2] bg-[#FFFDF9] p-6 shadow-[0_16px_38px_-26px_rgba(43,28,22,0.14)]"
            >
              <span className="font-display italic text-4xl font-semibold text-[#C49A5C] tabular-nums leading-none">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-[#2B1C16]">
                {step.title}
              </h3>
              <p className="mt-2.5 text-base text-[#5E453B] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
