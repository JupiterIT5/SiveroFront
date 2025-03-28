import React from "react";

import AccordionFAQ from "@/shared/ui/AccordionFAQ";

const faq = [
  {
    name: "Как оформить заказ?",
    value: `Вы можете оформить заказ через наш сайт, добавив товары в корзину и заполнив необходимые данные при оформлении. После подтверждения заказа вам придет письмо с деталями на указанную почту.`,
  },
  {
    name: "Какие способы оплаты доступны?",
    value: `Мы принимаем оплату банковскими картами (Visa, MasterCard, Мир), электронными кошельками и другими способами, указанными на странице оплаты.`,
  },
  {
    name: "Как отследить заказ?",
    value: `После отправки заказа вам придет трек-номер для отслеживания. Вы можете проверить статус доставки на сайте транспортной компании.`,
  },
  {
    name: "Как вернуть товар, если он не подошел?",
    value: `Вы можете вернуть товар в течение 14 дней с момента получения, если он не был в использовании и сохранен товарный вид. Для оформления возврата свяжитесь с нами по почте info@siveno.store или через WhatsApp +79134702311.`,
  },
  {
    name: "Сколько времени занимает возврат средств?",
    value: `Возврат денежных средств осуществляется в течение 1-5 рабочих дней после получения возврата и его проверки. Срок зачисления зависит от вашего банка.`,
  },
  {
    name: "Как заменить товар на другой размер или модель?",
    value: `Для обмена свяжитесь с нами, указав номер заказа и желаемый размер/модель. Обмен возможен при наличии товара в наличии.`,
  },
  {
    name: "Что делать, если пришел бракованный товар?",
    value: `Если вам пришел товар с дефектом, пожалуйста, отправьте фото и описание проблемы на нашу почту info@example.com. Мы предложим замену или возврат средств.`,
  },
  {
    name: "Какие условия доставки?",
    value: `Мы отправляем заказы по всей России и в другие страны. Стоимость и сроки доставки зависят от вашего региона и выбранного способа доставки.`,
  },
  {
    name: "Как изменить или отменить заказ?",
    value: `Вы можете изменить или отменить заказ до момента его отправки. Свяжитесь с нами как можно скорее, если вам нужно внести изменения.`,
  },
];

const Faq = () => {
  return (
    <div className="flex flex-col  mx-auto items-center max-w-[1200px] w-full  text-text bona">
      <h1 className="title-h1">FAQ</h1>
      <div className="flex flex-col gap-[20px] mt-[40px] w-full">
        {faq.map((item, idx) => {
          return <AccordionFAQ key={idx} question={item.name} answer={item.value} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
